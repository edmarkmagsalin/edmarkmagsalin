import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <header>
                <h1>Edmark Magsalin.</h1>
                <p>Web developer/designer</p>
                <a href="#contact" className="btn-primary">Contact me</a>&nbsp;<a href="#projects" className="btn-secondary">View projects</a>
            </header>
        )
    }
}

export default Header
