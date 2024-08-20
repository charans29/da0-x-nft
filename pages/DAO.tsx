import ParallaxView from '@/components/ParallaxView'
import React from 'react'
import DaoForm from './DaoForm'

function DAO() {
  return (
    <div
      className="h-full w-10/12 rounded-xl flex flex-col justify-between items-center pb-3
      border-[0.25px] border-red-950 text-white/60 -mt-5"
      style={{
        backgroundImage: `linear-gradient(300deg, rgba(234,88,88,0.1) 30%, rgba(130,110,118,0.35) 120%)`
      }}
    >
      {/* <text className='text-md text-blue-600 font-semibold font-sans pt-3'>
        Bowse NFT's FOR YOUR DAO
      </text>
      <ParallaxView/> */}
      <text className='text-md text-blue-600 font-semibold font-sans pt-3'>
        NFT FOR YOUR DAO
      </text>
      <DaoForm/>
    </div>
  )
}

export default DAO