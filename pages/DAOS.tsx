import React from 'react'
import DAOs from './api/DAOs'
import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";

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
      <div className='flex flex-row justify-between space-x-3.5 px-24 cursor-pointer overflow-x-auto'
        style={{
          scrollbarWidth: 'none'
        }}
      >
        {DAOs.slice().reverse().map((nft, idx) => (
            <img key={idx}
              src={nft.asset}
              style={{height:'250px', width:'175px', borderRadius:'10px'}}
              onClick={()=>{}}
            />
          ))}
      </div>
      <div className='flex justify-center pb-3 space-x-2'>
        <AiOutlineCaretLeft className='bg-slate-700 rounded-full -p-3 cursor-pointer' style={{color:'black'}}/>
        <AiOutlineCaretRight className='bg-slate-700 rounded-full -p-3 cursor-pointer' style={{color:'black'}}/>
      </div>
    </div>
  )
}

export default DAOS