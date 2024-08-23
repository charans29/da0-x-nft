import React, { useState } from 'react';
import DAOs, { Member } from './api/DAOs';
import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";
import { RiDoorOpenFill, RiDoorClosedFill } from "react-icons/ri";
import Button from '@/components/Button';
import JoinDao from './JoinDao';

function DAOS() {
  const [blinkingButtons, setBlinkingButtons] = useState(Array(DAOs.length).fill(false));
  const [selectedDaoIdx, setSelectedDaoIdx] = useState<number | null>(null);
  const [BlinkEnter, setBlinkEnter] = useState(false);
  const [Address, setAddress] = useState("");

  const handleJoin = (idx: number) => {
    const actualIndex = DAOs.length - 1 - idx;
    console.log("Actual Index:", actualIndex);

    setBlinkingButtons(prev => ({ ...prev, [actualIndex]: true }));
    setTimeout(() => {
      setBlinkingButtons(prev => ({ ...prev, [actualIndex]: false }));
    }, 100);
    setTimeout(() => {
      setSelectedDaoIdx(actualIndex);
    }, 300);
  };

  const handleEnter = (idx: number) => {
    const newMember: Member = {
      name: "",
      address: Address
    };
    DAOs[idx].members.push(newMember);
    DAOs[idx].count = DAOs[idx].members.length;
    setBlinkEnter(true);
    setTimeout(() => {
      setBlinkEnter(false);
    }, 100);
    setTimeout(() => {
      setSelectedDaoIdx(null);
    }, 300);
  };

  return (
    <div 
      className="h-full w-10/12 rounded-xl flex flex-col justify-between text-center border-[0.25px]
      border-red-950 text-white/60 -mt-5 backdrop:blur-3xl"
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
        {DAOs.slice().reverse().map((nft, idx) => {
          const actualIndex = DAOs.length - 1 - idx;
          return (
            <div key={idx} className='flex flex-col space-y-1.5 min-w-[180px]'>
              <img className='cursor-pointer'
                src={nft.asset}
                style={{height:'220px', width:'180px', borderRadius:'10px'}}
                onClick={() => handleJoin(idx)}
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
                  onClick={() => handleJoin(idx)} 
                  className={`rounded-md py-0 text-xs border-[0.25px] border-gray-500 ${
                    nft.count === nft.fractions ? 'text-white/40' : 'text-white/80'
                  }`}
                  style={{
                    backgroundImage: blinkingButtons[actualIndex]
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
          );
        })}
      </div>
      <div className='flex justify-center pb-3 space-x-2'>
        <AiOutlineCaretLeft className='bg-gray-800 rounded-full -p-3 cursor-pointer' style={{color:'gray', fontSize:"15px"}}/>
        <AiOutlineCaretRight className='bg-gray-800 rounded-full -p-3 cursor-pointer' style={{color:'gray', fontSize:"15px"}}/>
      </div>
      {selectedDaoIdx !== null && 
        <JoinDao>
          <label className='items-start font-sans text-xs scale-y-75'>Address: </label>
          <input className='rounded bg-transparent focus:outline-none text-xs p-1.5 m-1.5 text-white/90 font-thin
              border-[0.25px] border-gray-600'
              style={{
                  backgroundImage: `linear-gradient(180deg, rgba(50, 50, 50, 0.5) 100%, rgba(10,1,1,0.35) 0%)`,
                  width:`350px`
              }}
              placeholder='Your SOL Wallet Address'
              type='text'
              value={Address}
              onChange={(e) => setAddress(e.target.value)}
          ></input><br/>
          <Button onClick={()=>{handleEnter(selectedDaoIdx)}} 
            className='px-6 py-0.5 mb-2 border-purple-100 font-mono text-xs text-white'
            style={{
              backgroundImage: BlinkEnter
              ? `linear-gradient(300deg, rgba(88,4,5,1) 50%, rgba(130,110,118,0.35) 120%)`
              : `linear-gradient(300deg, rgba(88,4,5,0.5) 50%, rgba(130,110,118,0.35) 120%)`
            }}
            >
              enter.
          </Button>
          <button
          className="fixed top-10 right-4 z-[120] h-10 w-10 text-red-600 text-lg bg-gray-800 rounded-full"
          onClick={() => setSelectedDaoIdx(null)}
        >
          X
        </button>
        </JoinDao>}
    </div>
  );
}

export default DAOS;