import React, { Component, Fragment } from 'react'

export class Banner extends Component {
    render() {
        return (
            <Fragment>
                <section className="bg-transparent cover pb-0">
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
