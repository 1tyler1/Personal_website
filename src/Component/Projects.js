import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Projects extends Component {
    render() {
        return ( < Link label = "example 1"
            to = "https://morning-peak-19701.herokuapp.com" >
            Project 1 < /Link>
        )
    }
}