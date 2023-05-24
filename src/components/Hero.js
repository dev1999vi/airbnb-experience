import React from 'react';
import heroImage from '../assets/Group 77hero.png';
import './Hero.css'; 

const Hero = () => {
  return (
    <div className='hero'>
        <img className='hero-img' src={heroImage} alt='hero-img' />
        <h1>Online Experiences</h1>
        <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
        </p>
    </div>
  )
}

export default Hero;