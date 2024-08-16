import React from 'react'

function Header() {
  return (
        <div className='flex flex-row justify-between relative p-3 m-5 overflow-hidden'>
            <div className='text-green-500 font-extrabold text-xs font-sans scale-x-120'>
                Hi, Oxcharan
            </div>
            <div className='text-purple-500 font-extrabold text-xs font-sans scale-x-120'>
                WALLET
            </div>
        </div>
  )
}

export default Header