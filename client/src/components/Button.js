import React, { Component, Fragment } from 'react'


export class Button extends Component {
    render() {
        const {href, className, target, text} = this.props;
        return (
            <Fragment>
                <a href={href} className={className} target={target}>{text}</a>
            </Fragment>
        )
    }
}

export default Button
