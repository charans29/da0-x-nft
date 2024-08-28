import Confetti from '@/components/Confetti'
import { useDAO } from '@/context/DaoContext'
import React from 'react'

function DaoSelected() {
  const { asset } = useDAO();
  const imageSrc = asset || '';
  return (
    <div className='w-full h-full -mt-10'>
      <Confetti>
        <div className='relative inset-x-[2650px] inset-y-[100px]'>
          <img 
            src={ imageSrc }
            className="h-28 w-28 rounded-lg cursor-pointer"
          />
        </div>
        <div className="text-white-500 text-cyan-200 font-light text-center text-xs -mt-11">
          Woohoo..! YOU Joined
        </div>
        <div className="text-white-500 text-cyan-200 font-light mt-36 text-xs text-center">
            DAO
        </div>
      </Confetti>
    </div>
  )
}

export default DaoSelected