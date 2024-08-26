import React from 'react'

function UserDaos() {
  return (
    <div 
        className={`absolute top-16 right-10 h-[calc(100vh-110px)] w-[300px] 
            p-5 z-30 rounded-lg`}
        style={{
            backgroundImage:'linear-gradient(300deg, rgba(234,88,88,0.1) 30%, rgba(130,110,118,0.35) 120%)',
        }}
    >
        <h2 className='text-lg text-black font-bold mb-4 sticky top-0 p-2 text-center'>
            Your DAOS
        </h2>
        <ul className=' h-full overflow-y-auto -mt-3' style={{scrollbarWidth: 'none'}}>
            <li className='mb-2 border-[1.25px] rounded-md p-2 border-black text-black'>Item 1</li>
            <li className='mb-2 border-[1.25px] rounded-md p-2 border-black text-black'>Item 1</li>
            <li className='mb-2 border-[1.25px] rounded-md p-2 border-black text-black'>Item 1</li>
            <li className='mb-2 border-[1.25px] rounded-md p-2 border-black text-black'>Item 1</li>
            <li className='mb-2 border-[1.25px] rounded-md p-2 border-black text-black'>Item 1</li>
            <li className='mb-2 border-[1.25px] rounded-md p-2 border-black text-black'>Item 1</li>
            <li className='mb-2 border-[1.25px] rounded-md p-2 border-black text-black'>Item 1</li>
            <li className='mb-2 border-[1.25px] rounded-md p-2 border-black text-black'>Item 1</li>
            <li className='mb-2 border-[1.25px] rounded-md p-2 border-black text-black'>Item 1</li>
            <li className='mb-2 border-[1.25px] rounded-md p-2 border-black text-black'>Item 1</li>
            <li className='mb-2 border-[1.25px] rounded-md p-2 border-black text-black'>Item 1</li>
            <li className='mb-2 border-[1.25px] rounded-md p-2 border-black text-black'>Item 1</li>
            <li className='mb-2 border-[1.25px] rounded-md p-2 border-black text-black'>Item 1</li>
            <li className='mb-2 border-[1.25px] rounded-md p-2 border-black text-black'>Item 1</li>
            <li className='mb-2 border-[1.25px] rounded-md p-2 border-black text-black'>Item 1</li>
            <li className='mb-2 border-[1.25px] rounded-md p-2 border-black text-black'>Item 1</li>
            <li className='mb-2 border-[1.25px] rounded-md p-2 border-black text-black'>Item 1</li>
        </ul>
    </div>
  )
}

export default UserDaos