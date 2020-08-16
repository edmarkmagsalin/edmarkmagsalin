import React, { Component } from 'react'
import Logo from '../components/Logo'
import Menu from '../components/Menu'

export class Navbar extends Component {


    componentDidMount() {
        const sections = document.querySelectorAll('.anchor-point');
        const sectionLinks = document.querySelectorAll('.top-menu a');
        function determineActiveSection () {
            sections.forEach(section => {
                sectionLinks.forEach(sectionLink => {
                    // offsetTop is the distance of an element from the top of the window
                    // pageYOffset is the distance a user scrolled from the top of the window
                    if(section.offsetTop < window.pageYOffset+80) {
                        if(sectionLink.getAttribute('href').slice(1) === section.getAttribute('id')){
                            sectionLink.classList.add('active');
                        } else {
                            sectionLink.classList.remove('active');
                        }
                    } else {
                        if(sectionLink.getAttribute('href').slice(1) === section.getAttribute('id')){
                            sectionLink.classList.remove('active');
                        }
                    }
                });
            });
        }
        window.addEventListener('scroll', determineActiveSection);
    }
    render() {
        return (
            <nav className="top-nav bg-blur">
                <div className="container">
                    <Logo />
                    <Menu />
                </div>
            </nav>  
        )
    }
}

export default Navbar
