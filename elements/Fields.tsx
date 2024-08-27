import Button from '@/components/Button'
import { useDAO } from '@/context/DaoContext';
import DAOs, { DAO } from '@/pages/api/DAOs';
import React, { useState } from 'react'

function Fields() {
    const [create, setCreate] = useState(false);
    const [daoName, setDaoName] = useState('');
    const [address, setAddress] = useState('');
    const [fractions, setFractions] = useState('');
    const [share, setShare] = useState('');
    const [isHovered, setIsHovered] = useState(false);
    const { nft, setCreated } = useDAO();

    const handleMouseEnter = () => {
        if(!create)
            setIsHovered(true);
    };

    const handleMouseLeave = () => {
        if(!create)
            setIsHovered(false);
    };

    const handleCreate = () => {
        if (!daoName || !address || !fractions || !share) {
            alert("Please fill in all the fields before creating the DAO.");
            return;
        }
        const newDAO: DAO = {
            DAOname: daoName,
            address: address,
            asset: nft?.image,
            fractions: parseInt(fractions) || 0,
            share: parseInt(share) || 0, 
            count: 1,
            creator: "",
            members:[
                {
                    name: "",
                    address: address,
                }
            ]
        }

        DAOs.push(newDAO) 
        setCreate(true)
        setTimeout(() => {
            setCreated(true);
          }, 400);
    }

  return (
    <fieldset className='flex flex-col space-y-1'>
        <legend className='text-center text-xs mb-1'>CREATE YOUR DAO</legend>
        <label className='items-start font-sans text-xs'>DAO Name</label>
        <input className='rounded bg-transparent focus:outline-none text-xs p-1.5 text-white font-thin 
            border-[0.25px] border-gray-600'
            style={{
                backgroundImage: `linear-gradient(180deg, rgba(50, 50, 80, 0.5) 100%, rgba(10,1,1,0.35) 0%)`,
                width:`300px`
            }}
            placeholder='Arstistic Aliance'
            type='text'
            value={daoName}
            onChange={(e) => setDaoName(e.target.value)}
        ></input>
        <label className='items-start font-sans text-xs'>Address</label>
        <input className='rounded bg-transparent focus:outline-none text-xs p-1.5 text-white font-thin
            border-[0.25px] border-gray-600'
            style={{
                backgroundImage: `linear-gradient(180deg, rgba(50, 50, 80, 0.5) 100%, rgba(10,1,1,0.35) 0%)`,
                width:`300px`
            }}
            placeholder='Your Solana Wallet&apos;s'
            type='text'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
        ></input>
        <label className='items-start font-sans text-xs'>Fractions</label>
        <input className='rounded bg-transparent focus:outline-none text-xs p-1.5 text-white font-thin
            border-[0.25px] border-gray-600'
            style={{
                backgroundImage: `linear-gradient(180deg, rgba(50, 50, 80, 0.4) 100%, rgba(10,1,1,0.35) 0%)`,
                width:`300px`
            }}
            placeholder='Total Number of Shares'
            type='text'
            value={fractions}
            onChange={(e) => setFractions(e.target.value)}
            required
        ></input>
        <label className='items-start font-sans text-xs'>Your Share</label>
        <input className='rounded bg-transparent focus:outline-none text-xs p-1.5 text-white font-thin
            border-[0.25px] border-gray-600'
            style={{
                backgroundImage: `linear-gradient(180deg, rgba(50, 50, 80, 0.5) 100%, rgba(10,1,1,0.35) 0%)`,
                width:`300px`
            }}
            placeholder='SOL you willing to invest'
            type='text'
            value={share}
            onChange={(e) => setShare(e.target.value)}
        ></input>
        <div className='flex justify-center w-full pt-1.5' 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Button className='border-[0.25px] border-orange-900 text-center px-8'
                onClick={handleCreate}
                style={{
                    backgroundImage: isHovered
                    ? 'linear-gradient(270deg, rgba(82,0,83,1) -10%, rgba(0,12,15,1) 90%)'
                    : 'linear-gradient(90deg, rgba(82,0,83,1) -10%, rgba(0,12,15,1) 90%)'
                }}
                disabled={create}
            >
                Create
            </Button>
        </div>
    </fieldset>
  )
}

export default Fields