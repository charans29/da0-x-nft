import React from 'react'

function Content() {
  return (
    <div className='font-thin text-md text-center pt-10'>
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
        <div className='text-sm font-thin p-2 text-white'>
            Explore, collaborate, and grow your digital portfolio with DAOxNFT.
        </div>
    </div>
  )
}

export default Content