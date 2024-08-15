"use client";
import React from 'react';
import Header from '../elements/Header';
import Body from '../elements/Body';
import Footer from '../elements/Footer';

function Hero() {
  return (
    <div className='h-screen flex flex-col justify-between'
    style={{
      backgroundImage: `linear-gradient(180deg, rgba(10,0,20,0.1) 15%, rgba(60,10,35,0.55) 140%)`
    }}
    >
      <Header/>
      <Body/>
      {/* <Footer/> */}
    </div>
  );
}

export default Hero;