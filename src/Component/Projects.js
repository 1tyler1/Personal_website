import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Projects extends Component {
    render() {
        return (
            <div className="projects">
                <ul>
                    <li>
                        <Link label="example 1" to="https://morning-peak-19701.herokuapp.com">
                        Handlebars/Express.js - MVC project example (first time build)
                        </Link>
                    </li>
                    <li>
                        <Link label="example 2" to="https://progress-mern.herokuapp.com/">
                            MERN stack project
                        </Link>
                    </li>
                    <li>
                        <Link label="example 2" to="https://progress-mern.herokuapp.com/">
                            Ruby on rails - React.js view project
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}