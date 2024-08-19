import ParallaxView from '@/components/ParallaxView'
import React from 'react'

function DAO() {
  return (
    <div
    className="h-full w-10/12 rounded-xl text-center flex flex-col justify-between border-[0.25px]
     border-red-950 text-white/60 -mt-5"
    style={{
      backgroundImage: `linear-gradient(300deg, rgba(234,88,88,0.1) 30%, rgba(130,110,118,0.35) 120%)`
    }}
  >
    <text className='text-md text-blue-500 font-bold font-sans pt-3'>
      SELECT NFT FOr YOUR DAO
    </text>
    <ParallaxView/>
    </div>
  )
}

export default DAO