"use client";
import React from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

function Hero() {
  return (
    <div className='h-screen flex flex-col justify-between'
    style={{
      backgroundImage: `linear-gradient(180deg, rgba(10,0,20,0.1) 15%, rgba(20,10,35,0.55) 140%)`
    }}
    >
      <Header/>
      <Body/>
      {/* <Footer/> */}
    </div>
  );
}

export default Hero;