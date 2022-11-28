import React from 'react'
import '../App.css';
import {Button} from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src="./videos/video-3.mp4" autoPlay play loop muted/>
        <h1>Lifelong Memories</h1>
        <p>Let's start your journey with us, your dream will come true
        </p>
        
        <div className= 'hero-btns'>
            <Button className ="btns"
            buttonStyle ='btn--outline'
            buttonSize='btn--large' 
            >Explore</Button>
              <Button className ="btns"
            buttonStyle ='btn--primary'
            buttonSize='btn--large'>Watch <i className='fa fa-play-circle' /></Button>
        
        </div>
    </div>
  )
};

export default HeroSection;