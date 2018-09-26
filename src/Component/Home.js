import React, { Component } from 'react';
import Video from '../style/videos/Hacker_code_whiteblack_01_Videvo.mov';
import NavBar from './NavBar';


export default class Home extends Component {


    render() {
        return (
            <div className="video-overlay">
                <NavBar />
                <video src={Video} autoPlay={true} loop={true} ></video>
            </div>
        )
    }
}
