import Button from '@/components/Button'
import React, { useState } from 'react'

function Fields() {
    const [create, setCreate] = useState(false)
  return (
    <fieldset className='flex flex-col space-y-1'>
        <legend className='text-center text-xs mb-1'>CREATE YOUR DAO</legend>
        <label className='items-start font-sans text-xs'>DAO Name</label>
        <input className='rounded bg-transparent focus:outline-none text-xs p-1.5 text-white font-thin 
            border-[0.25px] border-gray-600'
            style={{
                backgroundImage: `linear-gradient(180deg, rgba(50, 50, 80, 0.5) 100%, rgba(10,1,1,0.35) 0%)`,
                width:`300px`
            }}
            placeholder='Arstistic Aliance'
            type='text'
        ></input>
        <label className='items-start font-sans text-xs'>Address</label>
        <input className='rounded bg-transparent focus:outline-none text-xs p-1.5 text-white font-thin
            border-[0.25px] border-gray-600'
            style={{
                backgroundImage: `linear-gradient(180deg, rgba(50, 50, 80, 0.5) 100%, rgba(10,1,1,0.35) 0%)`,
                width:`300px`
            }}
            placeholder='Your Solana Wallet&apos;s'
            type='text'
        ></input>
        <label className='items-start font-sans text-xs'>Fractions</label>
        <input className='rounded bg-transparent focus:outline-none text-xs p-1.5 text-white font-thin
            border-[0.25px] border-gray-600'
            style={{
                backgroundImage: `linear-gradient(180deg, rgba(50, 50, 80, 0.4) 100%, rgba(10,1,1,0.35) 0%)`,
                width:`300px`
            }}
            placeholder='Total Number of Shares'
            type='text'
        ></input>
        <label className='items-start font-sans text-xs'>Your Share</label>
        <input className='rounded bg-transparent focus:outline-none text-xs p-1.5 text-white font-thin
            border-[0.25px] border-gray-600'
            style={{
                backgroundImage: `linear-gradient(180deg, rgba(50, 50, 80, 0.5) 100%, rgba(10,1,1,0.35) 0%)`,
                width:`300px`
            }}
            placeholder='SOL you willing to invest'
            type='text'
        ></input>
        <div className='flex justify-center w-full pt-1.5'>
            <Button className='border-[0.25px] border-orange-900 text-center px-8'
                onClick={() => {setCreate(true)}}
                style={{
                    backgroundImage: 'linear-gradient(90deg, rgba(82,0,83,1) -10%, rgba(0,12,15,1) 90%)'
                }}
                disabled={create}
            >
                Create
            </Button>
        </div>
    </fieldset>
  )
}

export default Fields