import React from 'react'
import { GiOrganigram } from "react-icons/gi";

function Header() {
  return (
        <div className='flex flex-row justify-between relative p-3 m-5 overflow-hidden'>
            <div className='text-green-500 font-extrabold text-xs font-sans scale-x-120'>
                Hi, Oxcharan
            </div>
            {/* <div className='fill-purple-500 font-extrabold text-xs font-sans scale-x-120'> */}
                <GiOrganigram className='fill-purple-400 size-5 cursor-pointer'/>
            {/* </div> */}
        </div>
  )
}

export default Header