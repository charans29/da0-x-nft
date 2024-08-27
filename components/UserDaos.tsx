import { useDAO } from '@/context/DaoContext';
import DAOs from '@/pages/api/DAOs';
import React from 'react';
import { TbUsersGroup } from "react-icons/tb";

function UserDaos() {
  const { user } = useDAO();
  
  function DaoTile({ asset, label, count, fractions } : {
    asset: string | undefined, 
    label: string,
    count: number,
    fractions: number
  }) {
    return (
      <div className="flex flex-col items-center">
        <img src={asset} alt="DAO" className="w-full rounded-t-lg h-[75px]" />
        <div className="text-center mt-2 flex flex-1 justify-between w-full m-1 px-1">
          <p className='text-xs bg-gray-950 rounded-md p-0.5 scale-75 font-thin'>{label}</p>
          <div className='flex items-center space-x-1'>
            <TbUsersGroup className='size-4 text-zinc-500'/>
            <p className='font-thin scale-y-90 scale-x-90'>{count} / {fractions}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`absolute top-16 right-10 h-[calc(100vh-110px)] w-[200px]
        p-5 z-30 rounded-lg border-gray-700 border-[0.25px] overflow-hidden`}
      style={{
        backgroundImage: 'linear-gradient(180deg, rgba(50,40,80,0.75) 10%, rgba(50,100,80,0.75) 130%)',
      }}
    >
      <h2 className='text-md text-purple-200 font-thin mb-4 sticky top-0 text-center z-10 scale-x-90 scale-y-75'>
        YOUR DAOS
      </h2>
      <ul className='relative h-full overflow-y-auto z-0 py-5' 
        style={{ scrollbarWidth: 'none' }}
        >
        {DAOs.map((dao, index) => (
          dao.creator === user || dao.members.some(member => member.name === user) ? (
            <li key={index} className='mb-3 border-[.25px] rounded-lg border-zinc-600 text-xs text-purple-200'>
              <DaoTile asset={dao.asset} label= {dao.creator === user ? "Created": "Joined"} count={dao.count} fractions={dao.fractions}/>
            </li>
          ) : null
        ))}
      </ul>
    </div>
  );
}

export default UserDaos;