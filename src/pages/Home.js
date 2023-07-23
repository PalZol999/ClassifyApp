import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import TextBlock from '../textBlock';
import Navbar from '../components/Navbar';
import '../App.css';

const Home = () => {
  return (
    <div className="App">
      <Parallax pages={2} style={{ top: '0', left: '0' }} className="animation">
        <nav className="navbar">
          <Navbar />
        </nav>
        <ParallaxLayer offset={0} speed={0}>
          <div className="animation_layer parallax" id="bg" style={{ width: '100%'}}></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.4}>
          <div className="animation_layer parallax" id="text"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.2}>
          <TextBlock />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default Home

/* width: 100%*/