import React from 'react';
import './Home.css';
import Neds from '../assets/images/neds.jpg';
import SocialButtons from './SocialButtons';
import { TypeAnimation } from 'react-type-animation';

function Home() {
  return (
    <div className='homeContainer'>
      <div className="leftContainer">
        <h1>Hi! I am <span className='name'>Neds</span></h1>
        <div className="role">
          <h2>Aspiring</h2>
          <TypeAnimation
            sequence={[
              'Web Designer',
              2000,
              'Frontend Developer',
              2000,
            ]}
            speed={40}
            repeat={Infinity}
            className='roleAnimation'
          />
        </div>
        <SocialButtons />
      </div>
      <div className="rightContainer">
        <img src={Neds} alt="Neds Image" />
      </div>
    </div>
  );
}

export default Home;