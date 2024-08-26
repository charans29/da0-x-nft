import UserDaos from '@/components/UserDaos';
import { useDAO } from '@/context/DaoContext';
import React, { useState } from 'react';
import { GiOrganigram } from 'react-icons/gi';

function Header() {
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const { created } = useDAO();

  const toggleSlider = () => {
    setIsSliderOpen(!isSliderOpen);
  };

  return (
      <div className='flex flex-row justify-between p-3 m-5'>
        <div className='text-green-500 font-extrabold text-xs font-sans scale-x-120'>
          Hi, Oxcharan
        </div>
        <GiOrganigram 
          className='fill-purple-400 size-5 cursor-pointer' 
          onClick={toggleSlider} 
        />
        {isSliderOpen && (
            <UserDaos/>
        )}
    </div>
  );
}

export default Header;
