"use client";
import Button from '@/components/Button';
import React from 'react';

function Hero() {
  return (
    <div className='h-screen flex flex-col justify-between p-10'
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(10,0,20,0.2) 15%, rgba(45,2,85,0.55) 100%)`,
      }}
    >
      <div className='flex flex-row justify-between'>
        <div>
          Welcome to DAOxNFT
        </div>
        <div>
          Welcome to DAOxNFT
        </div>
      </div>
      <div className='flex flex-row justify-center space-x-2'>
          <Button onClick={() => {}}
            style={{
              backgroundImage: 'linear-gradient(90deg, rgba(212,83,83,1) -90%, rgba(0,12,15,1) 90%)'
            }}
          >
            Make A DAO
          </Button>
        <Button onClick={() => {}}
          style={{
            backgroundImage: 'linear-gradient(270deg, rgba(212,83,83,1) -90%, rgba(0,12,15,1) 90%)'
          }}
        >
          Pick A DAO
        </Button>
      </div>
      <div className='flex flex-row justify-center space-x-2 pb-16'>
          <Button onClick={() => {}}
            style={{
              backgroundImage: 'linear-gradient(90deg, rgba(212,83,83,1) -90%, rgba(0,12,15,1) 90%)'
            }}
          >
            Make A DAO
          </Button>
        <Button onClick={() => {}}
          style={{
            backgroundImage: 'linear-gradient(270deg, rgba(212,83,83,1) -90%, rgba(0,12,15,1) 90%)'
          }}
        >
          Pick A DAO
        </Button>
      </div>
    </div>
  );
}

export default Hero;
