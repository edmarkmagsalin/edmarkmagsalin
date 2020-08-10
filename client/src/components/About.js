import React, { Component, Fragment } from 'react'

export class About extends Component {
    render() {
        return (
            <Fragment>
                <a className="anchor-point" id="about"></a>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-7">
                                <h2>
                                    About
                                </h2>
                                <p>
                                    I'm a graduate of Bachelor of Science in Information Technology and I build things that can make people lives easier and better. I'm a problem solver, listens carefully to the requirements needed in a project.
                                </p>
                                <p>
                                    I believe, online presence is necessary to a business nowadays, it improves how customer can connect to the business.
                                </p>
                            </div>
                            <div className="col-sm-12 col-md-5">
                                <div className="mx picture-frame">
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container my-2">
                        <h3 className="color-primary">Some of the web technologies and tool that I trust using</h3>
                    </div>

                    
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-4">
                                <div className="blurb">
                                    <div className="icon"><i className="fab fa-html5"></i></div>
                                    <h4>HTML5</h4>
                                    <p>There's no web developer that doesn't know this language. I'm putting this here for formality. <span role="img" aria-label="Slightly Smiling Face">🙂</span></p>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4">
                                <div className="blurb">
                                    <div className="icon"><i className="fab fa-css3-alt"></i></div>
                                    <h4>CSS3</h4>
                                    <p>This is the fun side of being a web developer, you can be creative building website. In order to give a website unique feel and design, one should know this.</p>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4">
                                <div className="blurb">
                                    <div className="icon"><i className="fab fa-js"></i></div>
                                    <h4>JavaScript</h4>
                                    <p>This is for me, the most powerful web technology out there, and one of the key knowledge a web developer should have.</p>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4">
                                <div className="blurb">
                                    <div className="icon"><i className="fab fa-node-js"></i></div>
                                    <h4>Node.js</h4>
                                    <p>All the web apps that I made so far is built using Node.js, it has plenty of modules that can help speed up the development process. I usually used <strong>Express</strong>, <strong>React</strong> and <strong>MongoDB</strong> with Node.js.</p>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4">
                                <div className="blurb">
                                    <div className="icon"><i className="fab fa-react"></i></div>
                                    <h4>React</h4>
                                    <p>React is developed by Facebook and it is the most popular JavaScript Framework today. Used by lots of website right now. In fact, this website is also powered by React. <span role="img" aria-label="Smiling Face with Sunglasses">😎</span></p>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4">
                                <div className="blurb">
                                    <div className="icon"><i className="fab fa-php"></i></div>
                                    <h4>PHP</h4>
                                    <p>PHP, the oldest server-side scripting that I know of. I used PHP in all of my college projects. This is the base language of web technologies like WordPress and Laravel.</p>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4">
                                <div className="blurb">
                                    <div className="icon"><i className="fab fa-wordpress"></i></div>
                                    <h4>WordPress</h4>
                                    <p>I like using WordPress because it's easy to use and free.</p>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4">
                                <div className="blurb">
                                    <div className="icon"><i className="fab fa-laravel"></i></div>
                                    <h4>Laravel</h4>
                                    <p>I prefer this PHP framework because it's easy to understand MVC structure.</p>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4">
                                <div className="blurb">
                                    <div className="icon"><i className="fab fa-adobe-xd"></i></div>
                                    <h4>Adobe Xd</h4>
                                    <p>The tool that I'm using in designing. I like Adobe Xd because I can use it even I'm offline. Sketch also a great tool to for designing but it is currently not available on PC.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        )
    }
}

export default About
