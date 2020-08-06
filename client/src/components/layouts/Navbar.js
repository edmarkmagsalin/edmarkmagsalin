import React, { Component } from 'react'
import logo from '../../../src/logo.svg'

export class Navbar extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <img src={logo} alt=""/>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navbar
