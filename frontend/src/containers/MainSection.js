import React from 'react';
// import { Button } from './Button';
import './MainSection.css';
// import '../App.css';
// import mainVideo from '../videos/tourism_video.mp4';
import tourism_video from '../assests/tourism_video.mp4';
function MainSection() {
    return (
        <div className="main-container">
            <video src={tourism_video} autoPlay loop muted/>
           
            {/* <div className="main-btns">
                <Button className='btn' buttonStyle='btn--outline' buttonSize='btn--large'>
                    Get started
                </Button>
                <Button className='btn' buttonStyle='btn--primary' buttonSize='btn--large'>
                    Watch Trailer <i className='far fa-play-circle'/>
                </Button>
            </div> */}
        </div>
    )
}

export default MainSection;
