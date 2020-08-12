import React, { Component } from 'react'
import Logo from '../components/Logo'
import Menu from '../components/Menu'

export class Navbar extends Component {
    render() {
        return (
            <nav className="top-nav bg-blur">
                <div className="container">
                    <Logo />
                    <Menu />
                </div>
            </nav>  
        )
    }
}

export default Navbar
