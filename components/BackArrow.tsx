import { useDAO } from '@/context/DaoContext';
import React from 'react'
import { BiArrowBack } from 'react-icons/bi'

function BackArrow({ DaoCreated }: { DaoCreated?: boolean }) {
    const { setSelected, setCreated } = useDAO();
  return (
    DaoCreated
    ?   <BiArrowBack onClick={()=>{setCreated(false); setSelected(false);}} 
            className='cursor-pointer h-4 w-4 rounded-md' 
            style={{
            backgroundImage: `linear-gradient(180deg, rgba(50, 50, 80, 0.5) 100%, rgba(10,1,1,0.35) 0%)`,
            fontSize:"25px",
            color:"red",
            }}
        />
    :   <BiArrowBack onClick={()=>{setSelected(false)}} className='cursor-pointer h-4 w-4 rounded-md ' 
            style={{
            backgroundImage: `linear-gradient(180deg, rgba(50, 50, 80, 0.5) 100%, rgba(10,1,1,0.35) 0%)`,
            fontSize:"25px",
            color:"black",
            }}
        />
  )
}

export default BackArrow