import { useDAO } from '@/context/DaoContext';
import React from 'react'

function Nft() {
    const { nft } = useDAO();
  return (
    <div className='flex flex-row justify-between space-x-2'>
        <div className='h-36 w-36 rounded-lg'
            style={{
                backgroundImage:`url(${nft?.image})`,
                backgroundSize:'100% 100%'
            }}
        />
        <div className='flex flex-col justify-end'>
            <text className='text-xs font-mono'>
                Asset Price:
            </text>
            <text className='text-xs font-mono'>
                Volume:
            </text>
        </div>
    </div>
  )
}

export default Nft