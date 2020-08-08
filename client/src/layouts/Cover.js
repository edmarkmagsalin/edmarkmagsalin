import React, { Component, Fragment } from 'react'

export class Banner extends Component {
    render() {
        return (
            <Fragment>
                <section className="bg-transparent cover">
                    <div className="container">
                        <h1>Edmark Magsalin.</h1>
                        <p>Web developer/designer</p>
                        <div>
                            <a href="#contact" className="btn btn-primary" target="_parent">Contact me</a>&nbsp;<a href="#projects" className="btn btn-secondary" target="_parent">View projects</a>
                        </div>
                    </div>
                </section>
            </Fragment>
        )
    }
}

export default Banner
