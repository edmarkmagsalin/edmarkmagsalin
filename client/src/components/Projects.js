import React, { Component } from 'react'

export class Projects extends Component {
    render() {
        return (
            <section>
                <div className="container">
                    <h2>Projects</h2>
                    <div className="carousel">
                        <div className="carousel__item">
                            <div className="two-column">
                                <div>
                                    <div className="carousel__image" data-bg-image="contact-keeper.png"></div>
                                </div>
                                <div>
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
                            <div className="two-column">
                                <div>
                                    <div className="carousel__image" data-bg-image="github-finder.png"></div>
                                </div>
                                <div>
                                    <h3>Github Finder</h3>
                                    <p className="lead">
                                        You can organize your personal and professional contacts using this application. This project is part of the course React Front To Back that is created by Brad Traversy.
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
        )
    }
}

export default Projects
