import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Projects extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link label="example 1" to="https://morning-peak-19701.herokuapp.com">
                        Handlebars/Express.js - MVC project example
                        </Link>
                    </li>
                    <li>
                        <Link label="example 2" to="https://progress-mern.herokuapp.com/">
                            MERN stack project
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}