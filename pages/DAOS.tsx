import React, { useState } from 'react';
import DAOs from './api/DAOs';
import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";
import { RiDoorOpenFill, RiDoorClosedFill } from "react-icons/ri";
import Button from '@/components/Button';

function DAOS() {
  const [blinkingButtons, setBlinkingButtons] = useState(Array(DAOs.length).fill(false));

  const handleButtonClick = (idx:any) => {
    setBlinkingButtons(prev => ({ ...prev, [idx]: true }));
    setTimeout(() => {
      setBlinkingButtons(prev => ({ ...prev, [idx]: false }));
    }, 100);
  };


  return (
    <div 
      className="h-full w-10/12 rounded-xl flex flex-col justify-between text-center border-[0.25px]
      border-red-950 text-white/60 -mt-5"
      style={{
        backgroundImage: `linear-gradient(300deg, rgba(234,88,88,0.1) 30%, rgba(130,110,118,0.35) 120%)`
      }}
    >
      <p className='text-md text-blue-600 font-semibold font-sans pt-3'>
        JOIN A DAO NFT U LIKE
      </p>
      <div className='flex flex-row space-x-3.5 overflow-x-auto px-24'
        style={{
          scrollbarWidth: 'none'
        }}
      >
        {DAOs.slice().reverse().map((nft, idx) => (
          <div key={idx} className='flex flex-col space-y-1.5 min-w-[180px]'>
            <img className='cursor-pointer'
              src={nft.asset}
              style={{height:'220px', width:'180px', borderRadius:'10px'}}
              onClick={()=>{}}
            />
            <div className='flex flex-row justify-between'>
              <div className='text-start font-mono text-xs'>
                {nft.count === nft.fractions 
                  ? <RiDoorClosedFill className='fill-red-600'/>
                  : <RiDoorOpenFill className='fill-green-600'/>
                }
                {nft.count}/{nft.fractions}
              </div>
              <Button
                onClick={() => handleButtonClick(idx)} 
                className={`rounded-md py-0 text-xs border-[0.25px] border-gray-500 ${
                  nft.count === nft.fractions ? 'text-white/40' : 'text-white/80'
                }`}
                style={{
                  backgroundImage: blinkingButtons[idx]
                  ? 'linear-gradient(135deg,#1e1e20,#0e0e11 122%)'
                  : 'linear-gradient(135deg,#1e1e20,#0e0e11 2%)'
                }}
                disabled={nft.count === nft.fractions}
              >
                {nft.count === nft.fractions 
                  ? 'Full'
                  : 'Join'
                }
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className='flex justify-center pb-3 space-x-2'>
        <AiOutlineCaretLeft className='bg-gray-800 rounded-full -p-3 cursor-pointer' style={{color:'gray', fontSize:"15px"}}/>
        <AiOutlineCaretRight className='bg-gray-800 rounded-full -p-3 cursor-pointer' style={{color:'gray', fontSize:"15px"}}/>
      </div>
    </div>
  );
}

export default DAOS;