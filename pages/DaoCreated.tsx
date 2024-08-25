import Confetti from '@/components/Confetti'
import React from 'react'

function DaoCreated() {
  return (
    <div className='w-full h-full'>
      <Confetti>
        <div className='relative inset-x-[100px] inset-y-[100px]'>
          <img 
            src={"/api/image-proxy?url=https://www.arweave.net/7dntcPrPZeee702M5FBVCAOdnKVS5pGGQJVUsHKGCWI?ext=png"}
            className="h-32 w-32 rounded-lg cursor-pointer inset-x-[550px] inset-y-[200px] "
          />
        </div>
        <div className="text-white-500 text-cyan-200 font-light text-center">
          Woohoo..! Created
        </div>
        <div className="text-white-500 text-cyan-200 font-light mt-52 text-center">
            DAO
        </div>
      </Confetti>
    </div>
  )
}

export default DaoCreated