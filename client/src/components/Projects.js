import React, { Component, Fragment } from 'react'
import contactKeeper from '../assets/images/thumbnails/contact-keeper.png'
import githubFinder from '../assets/images/thumbnails/github-finder.png'
import MERNCRUD from '../assets/images/thumbnails/mern-crud-bare-minimum.png'

export class Projects extends Component {
    componentDidMount() {
        const slider = document.querySelector('.carousel');
        
        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.classList.add('active');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });

        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.classList.remove('active');
        });

        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('active');
        });

        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;  // stop the fn from running
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2;
            slider.scrollLeft = scrollLeft - walk;
        });
    }
    render() {
        return (
            <Fragment>
                <span className="anchor-point" id="projects">&nbsp;</span>
                <section>
                    <div className="container mb-1">
                        <h2>Projects</h2>
                    </div>
                    <div className="container-fluid">

                        <div className="carousel">

                            <div className="carousel__item">
                                <div className="container project row">
                                    <div className="col-sm-12 col-lg-6 pb-1">
                                        <img src={contactKeeper} alt="Contact Keeper" />
                                    </div>
                                    <div className="col-sm-12 col-lg-6">
                                        <h3>Contact Keeper</h3>
                                        <p className="lead">
                                            You can organize your personal and professional contacts using this application. This project is part of the course <strong>React Front To Back</strong> that is created by Brad Traversy.
                                        </p>
                                        <p>
                                            Powered by: MongoDB, Express, React, Node.js
                                        </p>
                                        <p>
                                            <a href="https://edmarkmagsalin-contact-keeper.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="btn btn-tertiary">Visit this project</a>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel__item">
                                <div className="container project row">
                                    <div className="col-sm-12 col-lg-6 pb-1">
                                        <img src={githubFinder} alt="GitHub User Finder" />
                                    </div>
                                    <div className="col-sm-12 col-lg-6">
                                        <h3>Github User Finder</h3>
                                        <p className="lead">
                                            This application lets you search Github users using the Github API. This project is part of the course <strong>React Front To Back</strong> that is created by Brad Traversy.
                                        </p>
                                        <p>
                                            Powered by: Node.js, Express, React
                                        </p>
                                        <p>
                                            <a href="https://edmarkmagsalin-github-user-finder.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn btn-tertiary">Visit this project</a>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel__item">
                                <div className="container project row">
                                    <div className="col-sm-12 col-lg-6 pb-1">
                                        <img src={MERNCRUD} alt="MERN CRUD Bare Minimum" />
                                    </div>
                                    <div className="col-sm-12 col-lg-6">
                                        <h3>MERN CRUD Bare Minimum</h3>
                                        <p className="lead">
                                            This is application is a demonstration of Create, Read, Update and Delete (CRUD) using MERN stack. I also added account management using JSON Web Token. 
                                        </p>
                                        <p>
                                            Powered by: MongoDB, Express, React, Node.js
                                        </p>
                                        <p>
                                            <a href="https://mern-crud-bare-minimum.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="btn btn-tertiary">Visit this project</a>
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>
            </Fragment>
        )
    }
}

export default Projects
