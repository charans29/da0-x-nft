import Confetti from '@/components/Confetti'
import React from 'react'

function DaoCreated() {
  return (
    <div className='w-full h-full'>
      <Confetti>
        <div className='relative inset-x-[300px] inset-y-[100px]'>
          <img 
            src={"/api/image-proxy?url=https://www.arweave.net/7dntcPrPZeee702M5FBVCAOdnKVS5pGGQJVUsHKGCWI?ext=png"}
            className="h-28 w-28 rounded-lg cursor-pointer"
          />
        </div>
        <div className="text-white-500 text-cyan-200 font-light text-center text-xs -mt-11">
          Woohoo..! Created
        </div>
        <div className="text-white-500 text-cyan-200 font-light mt-36 text-xs text-center">
            DAO
        </div>
      </Confetti>
    </div>
  )
}

export default DaoCreated