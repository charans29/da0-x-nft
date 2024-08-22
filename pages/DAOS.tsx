import React from 'react'
import DAOs from './api/DAOs'
import { motion } from "framer-motion";

function DAOS() {
  return (
    <div 
      className="h-full w-10/12 rounded-xl flex flex-col justify-center border-[0.25px] overflow-x-auto
      border-red-950 text-white/60 -mt-5"
      style={{
        backgroundImage: `linear-gradient(300deg, rgba(234,88,88,0.1) 30%, rgba(130,110,118,0.35) 120%)`
      }}
    >
      <div className='flex flex-row justify-between space-x-4 px-28 cursor-pointer'>
        {DAOs.map((nft, idx) => (
            <img 
              src={nft.asset}
              style={{height:'500px', width:'350px', borderRadius:'10px'}}
              onClick={()=>{}}
            />
            
          ))}
      </div>
    </div>
  )
}

export default DAOS