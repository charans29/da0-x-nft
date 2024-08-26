import React from 'react'

function UserDaos() {
  return (
    <div 
        className={`absolute top-16 right-10 h-[calc(100vh-110px)] w-[200px] 
            p-5 z-30 rounded-lg border-green-500 border-[0.25px] overflow-hidden`}
        style={{
            backgroundImage:'linear-gradient(300deg, rgba(84,48,188,0.5) 10%, rgba(150,100,180,0.8) 100%)',
        }}
    >
        <h2 className='text-lg text-black font-bold mb-4 sticky top-0 p-2 text-center z-10'>
            Your DAOS
        </h2>
        <ul className='realtive h-full overflow-y-auto -mt-3 z-0' style={{scrollbarWidth: 'none'}}>
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