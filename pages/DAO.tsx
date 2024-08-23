import React from 'react'
import DaoForm from './DaoForm'
import { useDAO } from '@/context/DaoContext'
import { ParallaxScroll } from '@/components/UI/ParallaxScroll';
import NFTs from '@/pages/api/NFTs';
import BackArrow from '@/components/BackArrow';

function DAO() {
  const { isSelected, created } = useDAO();

  return (
    <div
      className={`h-full w-10/12 rounded-xl flex flex-col justify-between items-center pb-3 
      border-[0.25px] ${created ? 'border-blue-600' : 'border-red-950'} text-white/60 -mt-5`}
      style={{
        backgroundImage: created
          ? 'linear-gradient(180deg, rgba(88,88,234,0.5) 50%, rgba(130,110,118,0.35) 120%)'
          : 'linear-gradient(300deg, rgba(234,88,88,0.1) 30%, rgba(130,110,118,0.35) 120%)',
      }}
    >
      { isSelected ?
        <>
          <text className='text-md text-blue-600 font-semibold font-sans pt-3'>
            NFT FOR YOUR DAO
          </text>
          <DaoForm Dao={created}/>
          <BackArrow DaoCreated={created}/>
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