import React, { useEffect, useState } from 'react';
import DAOs, { Member } from './api/DAOs';
import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";
import { RiDoorOpenFill, RiDoorClosedFill } from "react-icons/ri";
import Button from '@/components/Button';
import JoinDao from './JoinDao';
import { useDAO } from '@/context/DaoContext';
import DaoSelected from './DaoSelected';
import Blink from '@/components/Blink';
import { findNftByIdx } from '@/lib/utils';

function DAOS() {
  const [blinkingButtons, setBlinkingButtons] = useState(Array(DAOs.length).fill(false));
  const [selectedDaoIdx, setSelectedDaoIdx] = useState<number | null>(null);
  const [BlinkEnter, setBlinkEnter] = useState(false);
  const [Address, setAddress] = useState("");
  const { picked, setPicked, setAsset, user } = useDAO();
  const [markJoined, setMarkJoined] = useState(Array(DAOs.length).fill(false));
  const [blink, setBlink] = useState(false)
  const [blinkURL, setBlinkURL] = useState("")

  const handleJoin = (idx: number) => {
    const actualIndex = DAOs.length - 1 - idx;
    console.log("Actual Index:", actualIndex, "DAOS LENGTH:", DAOs.length, "idx:", idx);

    setBlinkingButtons(prev => ({ ...prev, [actualIndex]: true }));
    setTimeout(() => {
      setBlinkingButtons(prev => ({ ...prev, [actualIndex]: false }));
    }, 100);
    setTimeout(() => {
      setSelectedDaoIdx(actualIndex);
    }, 300);
  };

  const markJoin = (idx: number) => {
    setMarkJoined(prev => ({ ...prev, [idx]: true }));
  }

  useEffect(() => {
    const updatedMarkJoined = DAOs.map(dao => {
      return dao.members.some(member => member.name === user);
    });
    setMarkJoined(updatedMarkJoined);
  }, [user]);

  const handleEnter = (idx: number) => {
    const newMember: Member = {
      name: user ?? "DSCVUSR",
      address: Address
    };
    DAOs[idx].members.push(newMember);
    DAOs[idx].count = DAOs[idx].members.length;
    const assetValue = DAOs[idx].asset || "";
    setAsset(assetValue);
    setBlinkEnter(true);
    setTimeout(() => {
      setBlinkEnter(false);
    }, 100);
    setTimeout(() => {
      setPicked(true);
    }, 500);
    setTimeout(() => {
      setPicked(false);
      markJoin(idx);
      setSelectedDaoIdx(null);
    }, 5000);
  };

  const exportLink = (idx:number) => {
    const daoIndex = DAOs.length - 1 - idx;
    const dao = DAOs[daoIndex];
    const { count, fractions, asset } = dao;
    const nft_id = findNftByIdx(asset ?? "")
    const daoActionUrl = `https://da0-x-nft.vercel.app/api/join-dao-action?nft=${nft_id}mbrs=${count}frcn=${fractions}`;
    const dscvrBlinkUrl = `https://dscvr-blinks.vercel.app/?action=${encodeURIComponent(daoActionUrl)}`;
  
    setBlinkURL(dscvrBlinkUrl);
    console.log(`SOLANA_BLINK_URL:`, daoActionUrl);

    setBlink(true)
    setTimeout(() => {
      setSelectedDaoIdx(daoIndex);
    }, 300);
  }

  return (
    <div 
      className={`h-full w-10/12 rounded-xl flex flex-col ${ picked ? 'justify-center border-green-800' : 'justify-between border-red-950'} text-center border-[0.25px]
       text-white/60 -mt-5 backdrop:blur-3xl`}
      style={{
        backgroundImage: picked
        ? `linear-gradient(200deg, rgba(88,254,138,0.5) 10%, rgba(150,90,200,0.5) 100%)`
        : `linear-gradient(300deg, rgba(234,88,88,0.1) 30%, rgba(130,110,118,0.35) 120%)`
      }}
    >
      {picked 
      ? <> <p className='text-md text-cyan-200 font-semibold font-sans pt-3'>
      CONGRATS ON YOUR PICK
    </p><DaoSelected/></>
      : <>
          <p className='text-sm text-blue-600 font-semibold font-sans pt-3'>
            JOIN A DAO NFT U LIKE
          </p>
          <div className='flex flex-row space-x-3.5 overflow-x-auto px-24'
          style={{
            scrollbarWidth: 'none'
          }}
        >
          {DAOs.slice().reverse().map((dao, idx) => {
            const actualIndex = DAOs.length - 1 - idx;
            return (
              <div key={idx} className='flex flex-col space-y-1.5 min-w-[150px]'>
                <img className='cursor-pointer'
                  src={dao.asset}
                  style={{height:'180px', width:'150px', borderRadius:'10px'}}
                  onClick={() => handleJoin(idx)}
                />
                <div className='flex flex-row justify-between'>
                  <div className='text-start font-mono text-xs flex space-x-2 items-center'>
                    <div>
                      {dao.count === dao.fractions 
                        ? <RiDoorClosedFill className='fill-red-600'/>
                        : <RiDoorOpenFill className='fill-green-600'/>
                      }
                      {dao.count}/{dao.fractions}
                    </div>
                    <Blink avail={ markJoined[actualIndex] || dao.creator === user } onClick={()=>{exportLink(idx)}} />
                  </div>
                  <Button
                    onClick={() => handleJoin(idx)} 
                    className={`rounded-md py-0 text-xs border-[0.25px]  
                      ${dao.count === dao.fractions ? markJoined[actualIndex] ? 'text-green-300' : 'text-white/40' 
                      : markJoined[actualIndex] ? 'text-green-300' : 'text-white/80'}
                      ${ dao.creator === user ? 'border-indigo-500 text-indigo-500' 
                       : markJoined[actualIndex] ? 'border-green-800' : 'border-gray-500' }
                      `}
                    style={{
                      backgroundImage: blinkingButtons[actualIndex]
                      ? 'linear-gradient(135deg,#1e1e20,#0e0e11 122%)'
                      : 'linear-gradient(135deg,#1e1e20,#0e0e11 2%)'
                    }}
                    disabled={markJoined[actualIndex] || dao.count === dao.fractions || dao.creator === user}
                  >
                    {dao.count === dao.fractions 
                      ? markJoined[actualIndex] 
                      ? 'joined' : 'full'
                      : markJoined[actualIndex]
                      ? 'joined'
                      : dao.creator === user
                      ? 'Yours'
                      : 'Join'
                    }
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
        <div className='flex justify-center pb-3 space-x-2'>
          <AiOutlineCaretLeft className='bg-gray-800 rounded-full -p-3 cursor-pointer' style={{color:'gray', fontSize:"10px"}}/>
          <AiOutlineCaretRight className='bg-gray-800 rounded-full -p-3 cursor-pointer' style={{color:'gray', fontSize:"10px"}}/>
        </div>
        {
          selectedDaoIdx !== null && 
            <JoinDao blink={blink}>
              {blink
              ?
              <>
                <label className='items-start font-mono text-xs scale-y-75'>Your DAO Blink URL:</label><br/>
                <input className='rounded bg-transparent focus:outline-none text-xs px-1.5 -mb-1.5 text-white/90 font-thin
                    border-[0.25px] border-gray-600 resize-none'
                    style={{
                        backgroundImage: `linear-gradient(180deg, rgba(50, 50, 50, 0.5) 100%, rgba(10,1,1,0.35) 0%)`,
                        width:`440px`,
                        height:`30px`
                    }}
                    value={blinkURL}
                    readOnly
                /><br/>
                <label className='items-start font-mono text-[10px] scale-y-0'>Share on DSCVR and invite your friends to join your DAO!</label><br/>
              </>
              :
              <>
                <label className='items-start font-sans text-xs scale-y-75'>Address: </label>
                <input className='rounded bg-transparent focus:outline-none text-xs p-1.5 m-1.5 text-white/90 font-thin
                    border-[0.25px] border-gray-600'
                    style={{
                        backgroundImage: `linear-gradient(180deg, rgba(50, 50, 50, 0.5) 100%, rgba(10,1,1,0.35) 0%)`,
                        width:`350px`
                    }}
                    placeholder='Your SOL Wallet Address'
                    type='text'
                    value={Address}
                    onChange={(e) => setAddress(e.target.value)}
                ></input><br/>
                <Button onClick={()=>{handleEnter(selectedDaoIdx)}} 
                  className='px-6 py-0.5 mb-2 border-purple-100 font-mono text-xs text-white'
                  style={{
                    backgroundImage: BlinkEnter
                    ? `linear-gradient(300deg, rgba(88,4,5,1) 50%, rgba(130,110,118,0.35) 120%)`
                    : `linear-gradient(300deg, rgba(88,4,5,0.5) 50%, rgba(130,110,118,0.35) 120%)`
                  }}
                  >
                    enter.
                </Button>
              </>
              }
              <button
                className="fixed top-10 right-4 z-[120] h-5 w-5 text-red-500 text-sm bg-gray-700 rounded-full"
                onClick={() => {setSelectedDaoIdx(null); if(blink){setBlink(false)}}}
              >
                X
              </button>
            </JoinDao>
          }
        </>
        }
    </div>
  );
}

export default DAOS;