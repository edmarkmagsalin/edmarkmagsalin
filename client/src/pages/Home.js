import React, { Component, Fragment } from 'react'
import About from '../components/About'
import Projects from '../components/Projects'

export class Home extends Component {
    render() {
        return (
            <Fragment>
                <About />
                <Projects />
            </Fragment>
        )
    }
}

export default Home
