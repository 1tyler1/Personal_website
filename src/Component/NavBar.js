<<<<<<< HEAD
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Logo from '../style/images/logo.png';
import Projects from './Projects';
=======
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
>>>>>>> 1d3bd86dd549e579b1ad86f5f4908f86452856e2

export default class NavBar extends Component {
    render() {
        return (
            <div className="video-header">
<<<<<<< HEAD
                <img src={Logo} className="nav-bar-logo"/>
                <ul className="nav-bar-links-ul">
                    <li className="link-1">
                        <Link label="About Me" to="/about">
                            <button className="link-1-btn">
                                About Tyler
                            </button>
                        </Link >
                    </li>
                    <li className="link-2">
                        <Link label="Projects" to={Projects}>
                            <button className="link-2-btn">
                                Project Examples
                            </button>
                        </Link >
                    </li >
                    <li className="link-3">
                        <Link label="Projects" to="https://github.com/1tyler1/">
                            <button className="link-3-btn">
                                Github
                            </button>
                        </Link >
                    </li>
                </ul>
            </div>
        )
    }
}
=======
                <nav className="nav-bar-links">
                    <ul className="nav-bar-links-ul">
                        <li>
                            <Link label="About Me" to="/about">
                                <button>About Tyler</button>
                            </Link>
                        </li> 
                        <li>
                            <Link label="Projects" to="/projects">
                                <button>Project Examples</button>
                            </Link>
                        </li>
                        <li>
                            <Link label="Projects" to="https://github.com/1tyler1/">
                                <button>Github</button>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}
>>>>>>> 1d3bd86dd549e579b1ad86f5f4908f86452856e2
