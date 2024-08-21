import React from 'react'
import DaoForm from './DaoForm'
import { useDAO } from '@/context/DaoContext'
import { ParallaxScroll } from '@/components/UI/ParallaxScroll';
import NFTs from '@/components/UI/NFTs';
import { BiArrowBack } from "react-icons/bi";

function DAO() {
  const { isSelected, setSelected } = useDAO();

  return (
    <div
      className="h-full w-10/12 rounded-xl flex flex-col justify-between items-center pb-3
      border-[0.25px] border-red-950 text-white/60 -mt-5"
      style={{
        backgroundImage: `linear-gradient(300deg, rgba(234,88,88,0.1) 30%, rgba(130,110,118,0.35) 120%)`
      }}
    >
      { isSelected ?
        <>
          <text className='text-md text-blue-600 font-semibold font-sans pt-3'>
            NFT FOR YOUR DAO
          </text>
          <DaoForm/>
          <BiArrowBack onClick={()=>{setSelected(false)}} className='cursor-pointer h-5 w-5 rounded-md '
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(50, 50, 80, 0.5) 100%, rgba(10,1,1,0.35) 0%)`,
              fontSize:"25px",
              color:"black",
            }}
          />
        </>
        :
        <>
          <text className='text-md text-blue-600 font-semibold font-sans pt-3'>
            BROWSE NFT&apos;s FOR YOUR DAO
          </text>
          <ParallaxScroll nfts={NFTs}/>
        </>
      }
    </div>
  )
}

export default DAO