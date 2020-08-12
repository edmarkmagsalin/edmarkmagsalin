import React, { Component, Fragment } from 'react'
import EM_1 from '../assets/images/EM_1.JPG'

export class Banner extends Component {
    render() {
        return (
            <Fragment>
                <section className="bg-transparent cover" style={{backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(${EM_1})`}}>
                    <div className="container">
                        <h1>Edmark Magsalin.</h1>
                        <p>Web developer/designer</p>
                        <div>
                            <span><a href="#contact" className="btn btn-primary mb-1 mr-1" target="_parent">Contact me</a></span>
                            <span><a href="#projects" className="btn btn-secondary" target="_parent">View projects</a></span>
                        </div>
                    </div>
                </section>
            </Fragment>
        )
    }
}

export default Banner
