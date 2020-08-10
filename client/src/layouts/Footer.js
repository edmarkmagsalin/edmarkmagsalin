import React, { Component } from 'react'
import Logo from '../components/Logo'

export class Footer extends Component {
    render() {
        return (
            <section className="bg-dark">
                <div className="container">
                    <div className="d-flexCenter mx-auto">
                        <Logo /> <h3 className="logo-label">Edmark Magsalin</h3>
                    </div>
                    <ul className="menu-row bottom-menu">
                        <li>
                            <a href="#privacy-link" className="color-light">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#cookie-policy" className="color-light">Cookie Policy</a>
                        </li>
                    </ul>
                    <ul className="menu-row socials">
                        <li>
                            <a href="https://www.facebook.com/magsalin.edmark" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/edmark.magsalin" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                        </li>
                        <li>
                            <a href="https://twitter.com/edmarkmagsalin" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                        </li>
                    </ul>
                    <p className="disclaimer">
                        Copyright &copy; 2020 Edmark Magsalin
                    </p>
                </div>
            </section>
        )
    }
}

export default Footer
