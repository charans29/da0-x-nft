import Confetti from '@/components/Confetti'
import React from 'react'

function DaoSelected() {
  return (
    <div className='w-full h-full'>
      <Confetti>
        <div className='relative inset-x-[550px] inset-y-[200px]'>
          <img 
            src={"/api/image-proxy?url=https://www.arweave.net/7dntcPrPZeee702M5FBVCAOdnKVS5pGGQJVUsHKGCWI?ext=png"}
            className="h-40 w-40 rounded-lg cursor-pointer inset-x-[550px] inset-y-[200px] "
          />
        </div>
        <text className="text-white-500 text-cyan-200 font-light">
          Woohoo..! Joined
        </text>
        <div className="text-white-500 text-cyan-200 font-light mt-52">
            DAO
        </div>
      </Confetti>
    </div>
  )
}

export default DaoSelected