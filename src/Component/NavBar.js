import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
    render() {
        return (
            <div className="video-header">
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
