import ParallaxView from '@/components/ParallaxView'
import React from 'react'

function DAO() {
  return (
    <div
    className="h-full w-10/12 rounded-xl text-center  flex flex-col justify-between items-center pb-3
    border-[0.25px] border-red-950 text-white/60 -mt-5"
    style={{
      backgroundImage: `linear-gradient(300deg, rgba(234,88,88,0.1) 30%, rgba(130,110,118,0.35) 120%)`
    }}
  >
    <text className='text-md text-blue-600 font-bold font-sans pt-3'>
      SELECT NFT FOR YOUR DAO
    </text>
    {/* <div className='flex flex-row'> */}
      <ParallaxView/>
    {/* </div> */}
    {/* <img src='/api/image-proxy?url=https://creator-hub-prod.s3.us-east-2.amazonaws.com/collection_images/taiyo_robotics.jpg'
      className='h-10 w-10 object-cover'
    /> */}
    </div>
  )
}

export default DAO