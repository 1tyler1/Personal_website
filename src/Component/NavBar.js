import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../style/images/logo.png';
import Projects from './Projects';

export default class NavBar extends Component {
    render() {
        return ( 
            <div className = "video-header">
                <img src = { Logo } className = "nav-bar-logo"/>
                <ul className = "nav-bar-links-ul">
                    <li className = "link-1">
                        <Link label = "About Me" to = "/about">
                            <button className = "link-1-btn"> About Tyler </button>
                        </Link> 
                    </li>    
                    <li className = "link-2">
                        <Link label = "Projects" to = { Projects }>
                            <button className = "link-2-btn"> Project Examples </button>    
                        </Link> 
                    </li>    
                    <li className = "link-3">
                        <Link label = "Projects" to = "https://github.com/1tyler1/">
                            <button className = "link-3-btn" > Github </button>    
                        </Link> 
                    </li>    
                </ul> 
            </div>
        )
    }
}