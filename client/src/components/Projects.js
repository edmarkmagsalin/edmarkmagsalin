import React, { Component, Fragment } from 'react'
import contactKeeper from '../assets/images/thumbnails/contact-keeper.png'
import githubFinder from '../assets/images/thumbnails/github-finder.png'
import MERNCRUD from '../assets/images/thumbnails/mern-crud-bare-minimum.png'

export class Projects extends Component {
    componentDidMount() {
        const slider = document.querySelector('.carousel__slider');
        const item = document.querySelectorAll('.carousel__item');
        const prev = document.querySelector('#prev');
        const next = document.querySelector('#next');
        
        let isDown = false;
        let startX;
        let scrollLeft;
        let entireSliderWidth;

        function determinePosition () {
            if (slider.scrollLeft===0){
                prev.classList.add('disable');
            } else {
                prev.classList.remove('disable');
            }
            
            entireSliderWidth = slider.clientWidth*(item.length-1);

            if (slider.scrollLeft===entireSliderWidth){
                next.classList.add('disable');
            } else {
                next.classList.remove('disable');
            }
        }

        next.addEventListener('click', () => {
            const remainder = slider.scrollLeft%slider.clientWidth;
            slider.scrollLeft=slider.scrollLeft+slider.clientWidth-remainder;
            determinePosition();
        })

        prev.addEventListener('click', () => {
            const remainder = slider.scrollLeft%slider.clientWidth; // residue

            
            if (remainder === 0){
                slider.scrollLeft=slider.scrollLeft-slider.clientWidth;
            } else {
                slider.scrollLeft=slider.scrollLeft-remainder;
            }
            determinePosition();
        })

        slider.addEventListener('mousedown', (e) => {
            isDown = true; // initialized moement
            startX = e.pageX - slider.offsetLeft; // assign starting point for dragging
            scrollLeft = slider.scrollLeft; // determine how far the item/s is scrolled to the left
            slider.classList.add('grabbing');
        });

        slider.addEventListener('mouseleave', () => {
            isDown = false; // assign false for stopping the movement
            slider.classList.remove('grabbing');
        });

        slider.addEventListener('mouseup', () => {
            isDown = false; // assign false for stopping the movement
            slider.classList.remove('grabbing');
        });

        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;  // stop the fn from running
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2;
            slider.scrollLeft = scrollLeft - walk;
            slider.classList.add('grabbing');
            determinePosition();
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
                            
                            <div id="prev" className="carousel__prev disable">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>
                            </div>

                            <div className="carousel__slider">

                                <div className="carousel__item">
                                    <div className="container project row">
                                        <div className="col-sm-12 col-lg-5 pb-1">
                                            <img src={contactKeeper} alt="Contact Keeper" />
                                        </div>
                                        <div className="col-sm-12 col-lg-7">
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
                                        <div className="col-sm-12 col-lg-5 pb-1">
                                            <img src={githubFinder} alt="GitHub User Finder" />
                                        </div>
                                        <div className="col-sm-12 col-lg-7">
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
                                        <div className="col-sm-12 col-lg-5 pb-1">
                                            <img src={MERNCRUD} alt="MERN CRUD Bare Minimum" />
                                        </div>
                                        <div className="col-sm-12 col-lg-7">
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
                            <div id="next" className="carousel__next">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>
                            </div>
                        </div>

                    </div>
                </section>
            </Fragment>
        )
    }
}

export default Projects
