import React from 'react'

function DaoForm() {
  return (
    <div className='flex flex-1 justify-between items-center w-10/12'>
        <div className='h-32 w-32 rounded-lg'
            style={{
                backgroundImage:`url(/api/image-proxy?url=https://bafkreihtg7spdwkxdvm443jnzigsawiwnjadgncotjetketqgezfkag3r4.ipfs.nftstorage.link/)`,
                backgroundSize:'100% 100%'
            }}
        />
        <fieldset>
        <legend className='text-center mb-8'>CREATE YOUR DAO</legend>
        <label className='items-start font-sans text-sm'>DAO Name</label><br/>
        <input className='rounded bg-transparent focus:outline-none text-sm py-1 px-1.5 text-white font-thin mb-4'
            style={{
                backgroundImage: `linear-gradient(180deg, rgba(50, 50, 80, 0.3) 100%, rgba(10,1,1,0.35) 0%)`,
                width:`300px`
              }}
              placeholder='Arstistic Aliance'
              type='text'
        ></input><br/>
        <label className='items-start font-sans text-sm'>Fractionalization</label><br/>
        <input className='rounded bg-transparent focus:outline-none text-sm py-1 px-1.5 text-white font-thin mb-4'
            style={{
                backgroundImage: `linear-gradient(180deg, rgba(50, 50, 80, 0.3) 100%, rgba(10,1,1,0.35) 0%)`,
                width:`300px`
              }}
              placeholder='Total Number of Shares'
              type='text'
        ></input><br/>
        <label className='items-start font-sans text-sm'>Your Sahre</label><br/>
        <input className='rounded bg-transparent focus:outline-none text-sm py-1 px-1.5 text-white font-thin mb-4'
            style={{
                backgroundImage: `linear-gradient(180deg, rgba(50, 50, 80, 0.3) 100%, rgba(10,1,1,0.35) 0%)`,
                width:`300px`
              }}
              placeholder='willing to invest'
              type='text'
        ></input><br/>
        <label className='items-start font-sans text-sm'>NFT Price</label><br/>
        <input className='rounded bg-transparent focus:outline-none text-sm py-1 px-1.5 text-white font-thin mb-4'
            style={{
                backgroundImage: `linear-gradient(180deg, rgba(50, 50, 80, 0.3) 100%, rgba(10,1,1,0.35) 0%)`,
                width:`300px`
              }}
              placeholder='Asset Value'
              type='text'
        ></input><br/>
        <label className='items-start font-sans text-sm'>Signature</label><br/>
        <input className='rounded bg-transparent focus:outline-none text-sm py-1 px-1.5 text-white font-thin'
            style={{
                backgroundImage: `linear-gradient(180deg, rgba(50, 50, 80, 0.3) 100%, rgba(10,1,1,0.35) 0%)`,
                width:`300px`
              }}
              placeholder='Digital Signature'
              type='text'
        ></input><br/>
    </fieldset>
    </div>
  )
}

export default DaoForm
