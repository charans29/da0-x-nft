import React from 'react'
import DAOs from './api/DAOs'

function DAOS() {
  return (
    <div 
      className="h-full w-10/12 rounded-xl flex flex-col justify-center border-[0.25px]
      border-red-950 text-white/60 -mt-5"
      style={{
        backgroundImage: `linear-gradient(300deg, rgba(234,88,88,0.1) 30%, rgba(130,110,118,0.35) 120%)`
      }}
    >
      <div className='flex flex-row justify-between space-x-3 px-24 cursor-pointer overflow-x-auto'
        style={{
          scrollbarWidth: 'none'
        }}
      >
        {DAOs.map((nft, idx) => (
            <img key={idx}
              src={nft.asset}
              style={{height:'250px', width:'175px', borderRadius:'10px'}}
              onClick={()=>{}}
            />
          ))}
      </div>
    </div>
  )
}

export default DAOS