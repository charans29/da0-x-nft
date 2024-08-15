import Button from '@/components/Button'
import React from 'react'

function Body() {
  return (
    <div className='h-full flex flex-col justify-between p-16'>
        <div className='font-thin text-4xl text-center py-10 overflow-hidden'>
            <text 
                style={{
                    background: `linear-gradient(302deg, rgba(249,5,5,1) 0%, rgba(4,248,251,1) 61%, rgba(242,5,151,1) 100%)`,
                    WebkitBackgroundClip: 'text',
                    color: 'transparent'
                }}
            >
                Join forces <br />
                with fellow enthusiasts to <br />
                own, trade, and profit from high-value NFTs
            </text>
            <div className='text-sm font-thin p-2'>
                Explore, collaborate, and grow your digital portfolio with DAOxNFT.
            </div>
        </div>
        <div className='flex flex-row justify-center space-x-2'>
            <Button onClick={() => {}} className='px-10 border-purple-500'
                style={{
                    backgroundImage: 'linear-gradient(90deg, rgba(212,0,83,1) -90%, rgba(0,12,15,1) 90%)'
                }}
            >
                Make A DAO
            </Button>
            <span></span>
            <Button onClick={() => {}} className='px-11 border-green-600'
                style={{
                    backgroundImage: 'linear-gradient(270deg, rgba(212,0,83,1) -90%, rgba(0,12,15,1) 90%)'
                }}
            >
                Pick A DAO
            </Button>
        </div>
    </div>
  )
}

export default Body