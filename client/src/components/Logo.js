import React, { Component, Fragment } from 'react'
import logo from '../logo.svg'

export class Logo extends Component {
    render() {
        return (
            <Fragment>
                <div className="logo">
                    <a href="./">
                        <img src={logo} alt="Edmark Magsalin"/>
                    </a>
                </div>
            </Fragment>
        )
    }
}

export default Logo
