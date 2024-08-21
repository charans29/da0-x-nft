import Button from '@/components/Button'
import React from 'react'

function DaoForm() {
  return (
    <div className='flex flex-1 justify-between items-center w-10/12'>
        <div className='flex flex-row justify-between space-x-2'>
            <div className='h-32 w-32 rounded-lg'
                style={{
                    backgroundImage:`url(/api/image-proxy?url=https://bafkreihtg7spdwkxdvm443jnzigsawiwnjadgncotjetketqgezfkag3r4.ipfs.nftstorage.link/)`,
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
            <label className='items-start font-sans text-xs'>Fractionalization</label>
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
                placeholder='SOL willing to invest'
                type='text'
            ></input>
            <label className='items-start font-sans text-xs'>Signature</label>
            <input className='rounded bg-transparent focus:outline-none text-xs p-1.5 text-white font-thin
                border-[0.25px] border-gray-600'
                style={{
                    backgroundImage: `linear-gradient(180deg, rgba(50, 50, 80, 0.5) 100%, rgba(10,1,1,0.35) 0%)`,
                    width:`300px`
                }}
                placeholder='Digital Signature'
                type='text'
            ></input>
            <div className='flex justify-center w-full pt-1.5'>
                <Button className='border-[0.25px] border-orange-900 text-center px-8'
                    onClick={() => {}}
                    style={{
                        backgroundImage: 'linear-gradient(90deg, rgba(82,0,83,1) -90%, rgba(0,12,15,1) 90%)'
                    }}
                >
                    Create
                </Button>
            </div>
        </fieldset>
    </div>
  )
}

export default DaoForm