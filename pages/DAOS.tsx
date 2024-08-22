import React from 'react'
import DAOs from './api/DAOs'
import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";
import { RiDoorOpenFill, RiDoorClosedFill } from "react-icons/ri";
import Button from '@/components/Button';

function DAOS() {
  return (
    <div 
      className="h-full w-10/12 rounded-xl flex flex-col justify-between text-center border-[0.25px]
      border-red-950 text-white/60 -mt-5"
      style={{
        backgroundImage: `linear-gradient(300deg, rgba(234,88,88,0.1) 30%, rgba(130,110,118,0.35) 120%)`
      }}
    >
      <text className='text-md text-blue-600 font-semibold font-sans pt-3'>
        JOIN A DAO NFT U LIKE
      </text>
      <div className='flex flex-row justify-between space-x-3.5 px-24 overflow-x-auto'
        style={{
          scrollbarWidth: 'none'
        }}
      >
        {DAOs.slice().reverse().map((nft, idx) => (
          <div key={idx}>
            <img className='cursor-pointer'
              src={nft.asset}
              style={{height:'250px', width:'175px', borderRadius:'10px'}}
              onClick={()=>{}}
            />
            <div className='flex justify-between mt-2'>
              <div className='text-start font-mono text-sm'>
                { nft.count === nft.fractions 
                  ? <RiDoorClosedFill className='fill-red-600'/>
                  : <RiDoorOpenFill className='fill-green-600'/>
                }
                {nft.count}/{nft.fractions}
              </div>
              <Button 
                onClick={()=>{}} 
                className={`rounded-md py-0 text-sm border-[0.25px] border-gray-500 ${
                  nft.count === nft.fractions ? 'text-white/40' : 'text-white/80'
                }`}
                style={{
                  backgroundImage: 'linear-gradient(135deg,#1e1e20,#0e0e11 32%)'
                }}
                disabled={ nft.count === nft.fractions }
              >
                { nft.count === nft.fractions 
                  ? 'Full'
                  : 'Join'
                }
              </Button>
            </div>
          </div>
          ))}
      </div>
      <div className='flex justify-center pb-3 space-x-2'>
        <AiOutlineCaretLeft className='bg-gray-800 rounded-full -p-3 cursor-pointer' style={{color:'gray'}}/>
        <AiOutlineCaretRight className='bg-gray-800 rounded-full -p-3 cursor-pointer' style={{color:'gray'}}/>
      </div>
    </div>
  )
}

export default DAOS