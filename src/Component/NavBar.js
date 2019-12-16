import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../style/images/logo.png';


export default class NavBar extends Component {
    render() {
        return ( 
                <div className="video-container">
                    <div className="video-header">
                    <img src = { Logo } className="nav-bar-logo"/>
                    </div>
                    
                    <ul className = "nav-bar-links-ul"> 
                        <li className = "link-2">
                            <Link label = "Projects" to ="/projects" className = "link-2-btn">   
                                Project Examples    
                            </Link> 
                        </li>    
                        <li className = "link-3">
                            <a className = "link-2-btn" href="https://github.com/1tyler1/">Github</a>
                        </li>    
                    </ul> 
                </div>
        )
    }
}