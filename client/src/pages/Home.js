import React, { Component, Fragment } from 'react'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

export class Home extends Component {
    render() {
        return (
            <Fragment>
                <About />
                <Projects />
                <Contact />
            </Fragment>
        )
    }
}

export default Home
