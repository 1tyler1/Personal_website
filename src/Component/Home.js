import React, { Component } from 'react';
import Video from '../style/videos/Hacker_code_whiteblack_01_Videvo.mov';
import NavBar from './NavBar';
<<<<<<< HEAD
import DownArrow from '../style/images/arrow_down.png';
=======

>>>>>>> 1d3bd86dd549e579b1ad86f5f4908f86452856e2

export default class Home extends Component {


    render() {
        return (
            <div className="video-overlay">
                <NavBar />
                <video src={Video} autoPlay={true} loop={true} ></video>
<<<<<<< HEAD
                <h1 className="header-animation-1">Tyler Lauren Designs</h1>
                <h1 className="header-animation-2">Fullstack Software Development and Design</h1>
                <div className="scroll-button">
                    <img className="down_arrow_scroll bounce" src={DownArrow} />
                </div>
=======
>>>>>>> 1d3bd86dd549e579b1ad86f5f4908f86452856e2
            </div>
        )
    }
}
