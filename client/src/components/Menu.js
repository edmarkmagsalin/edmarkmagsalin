import React, { Component, Fragment } from 'react'

export class Menu extends Component {
    render() {
        return (
            <Fragment>
                <ul className="top-menu">
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
            </Fragment>
        )
    }
}

export default Menu
