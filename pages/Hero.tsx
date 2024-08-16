"use client";
import React from 'react';
import Header from '../elements/Header';
import Body from '../elements/Body';

function Hero() {
  return (
    <div className='h-screen flex flex-col'
    style={{
      backgroundImage: `linear-gradient(180deg, rgba(5,0,5,0.65) 30%, rgba(15,1,4,1) 70%)`
    }}
    >
      <Header/>
      <Body/>
    </div>
  );
}

export default Hero;