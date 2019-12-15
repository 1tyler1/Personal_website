import React, { Component } from 'react';
import Video from '../style/videos/Hacker_code_whiteblack_01_Videvo.mov';
import NavBar from './NavBar';
import DownArrow from '../style/images/arrow_down.png';

export default class Home extends Component {


    render() {
        return ( 
            <div className = "video-overlay">
                <NavBar/ >
                <video src = { Video } autoPlay = { true } loop = { true }> 
                </video>  
                <h1 className = "header-animation-1" > Tyler Lauren Designs </h1>     
                <h1 className = "header-animation-2" > Fullstack Software Development and Design </h1>
                    <div className = "scroll-button">
                        <img className = "down_arrow_scroll bounce" src = { DownArrow }/>     
                    </div> 
            </div>
        )
    }
}