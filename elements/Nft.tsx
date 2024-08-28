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
            <text className='text-xs font-mono text-white/40'>
                Name:
                <div className='ml-0.5 text-purple-300'>
                    {nft?.name}
                </div>
            </text>
            <text className='text-xs font-mono text-white/40'>
                Price:
                <div className='ml-o.5 text-green-300'>
                    {nft?.floorPrice}
                </div>
            </text>
            <text className='text-xs font-mono text-white/40'>
                Volume:
                <div className='ml-0.5 text-blue-300'>
                    {nft?.volumeAll}
                </div>
            </text>
        </div>
    </div>
  )
}

export default Nft