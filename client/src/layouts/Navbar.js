import React, { Component } from 'react'
import Logo from '../components/Logo'
import Menu from '../components/Menu'

export class Navbar extends Component {


    componentDidMount() {
        const topNav = document.querySelector('.top-nav');
        const sections = document.querySelectorAll('.anchor-point');
        const sectionLinks = document.querySelectorAll('.top-menu a');
        const menuToggle = document.querySelector('.menu-row.top-menu');
        const menuCheckBox = document.querySelector('#menu');
        function determineActiveSection () {
            sections.forEach(section => {
                sectionLinks.forEach(sectionLink => {
                    // offsetTop is the distance of an element from the top of the window
                    // pageYOffset is the distance a user scrolled from the top of the window
                    if(section.offsetTop < window.pageYOffset+topNav.clientHeight) {
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

            if(window.pageYOffset <= topNav.clientHeight) {
                topNav.classList.remove('bg-light-overlay')
            } else {
                topNav.classList.add('bg-light-overlay')
            }
        }
        window.addEventListener('scroll', determineActiveSection);
        menuToggle.addEventListener('click', () => {
            menuCheckBox.checked = false;
        })
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
