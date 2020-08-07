import React, { Component, Fragment } from 'react'
import Button from '../components/Button'

export class Banner extends Component {
    render() {
        return (
            <Fragment>
                <h1>Edmark Magsalin.</h1>
                <p>Web developer/designer</p>
                <Button href="#contact" className="btn btn-primary" target="_parent" text="Contact me" />&nbsp;<Button href="#projects" className="btn btn-secondary" target="_parent" text="View projects" />
            </Fragment>
        )
    }
}

export default Banner
