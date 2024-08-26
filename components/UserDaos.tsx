import React from 'react'

function UserDaos() {
  return (
    <div 
        className={`absolute top-16 right-10 h-[calc(100vh-110px)] w-[200px] 
            p-5 z-30 rounded-lg border-gray-700 border-[0.25px] overflow-hidden`}
        style={{
            backgroundImage:'linear-gradient(180deg, rgba(50,40,80,0.75) 10%, rgba(50,100,80,0.75) 130%)',
        }}
    >
        <h2 className='text-md text-white/50 font-light mb-4 sticky top-0 p-2 text-center z-10'>
            Your DAOS
        </h2>
        <ul className='realtive h-full overflow-y-auto mt-5 z-0' style={{scrollbarWidth: 'none'}}>
            <li className='mb-3 border-[1.25px] rounded-lg p-1 px-2 border-zinc-600 text-xs text-purple-300'>DAO 1</li>
            <li className='mb-3 border-[1.25px] rounded-lg p-1 px-2 border-zinc-600 text-xs text-purple-300'>DAO 2</li>
        </ul>
    </div>
  )
}

export default UserDaos