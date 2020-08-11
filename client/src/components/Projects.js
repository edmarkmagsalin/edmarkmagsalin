import React, { Component, Fragment } from 'react'
import contactKeeper from '../images/thumbnails/contact-keeper.png'
import githubFinder from '../images/thumbnails/github-finder.png'
import MERNCRUD from '../images/thumbnails/mern-crud-bare-minimum.png'

export class Projects extends Component {

    render() {
        return (
            <Fragment>
                <span className="anchor-point" id="projects">&nbsp;</span>
                <section>
                    <div className="container">
                        <h2>Projects</h2>
                        <div className="carousel mt-1">
                            
                            <div className="carousel__item">
                                <div className="row">
                                    <div className="col-sm-12 col-lg-6">
                                        <img className="carousel__image" src={contactKeeper} alt="Contact Keeper" />
                                    </div>
                                    <div className="col-sm-12 col-lg-6">
                                        <h3>Contact Keeper</h3>
                                        <p className="lead">
                                            You can organize your personal and professional contacts using this application. This project is part of the course <strong>React Front To Back</strong> that is created by Brad Traversy.
                                        </p>
                                        <p>
                                            Powered by: Node.js, Express, React, MongoDB
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel__item">
                                <div className="row">
                                    <div className="col-sm-12 col-lg-6">
                                        <img className="carousel__image" src={githubFinder} alt="GitHub User Finder" />
                                    </div>
                                    <div className="col-sm-12 col-lg-6">
                                        <h3>GitHub User Finder</h3>
                                        <p className="lead">
                                            You can organize your personal and professional contacts using this application. This project is part of the course <strong>React Front To Back</strong> that is created by Brad Traversy.
                                        </p>
                                        <p>
                                            Powered by: Node.js, Express, React, MongoDB
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel__item">
                                <div className="row">
                                    <div className="col-sm-12 col-lg-6">
                                        <img className="carousel__image" src={MERNCRUD} alt="MERN CRUD Bare Minimum" />
                                    </div>
                                    <div className="col-sm-12 col-lg-6">
                                        <h3>MERN CRUD Bare Minimum</h3>
                                        <p className="lead">
                                            You can organize your personal and professional contacts using this application. This project is part of the course <strong>React Front To Back</strong> that is created by Brad Traversy.
                                        </p>
                                        <p>
                                            Powered by: Node.js, Express, React, MongoDB
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
