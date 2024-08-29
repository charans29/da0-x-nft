import UserDaos from '@/components/UserDaos';
import { useDAO } from '@/context/DaoContext';
import React, { useEffect, useState } from 'react';
import { GiOrganigram } from 'react-icons/gi';
import { CanvasInterface, CanvasClient } from '@dscvr-one/canvas-client-sdk';


function Header() {
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const { view, setView, user, setUser} = useDAO();

  useEffect(() => {
        if(view !== "content" && isSliderOpen){
            setIsSliderOpen(!isSliderOpen);
        }
    }, [view]);

  const toggleSlider = () => {
    setView("content")
    setIsSliderOpen(!isSliderOpen);
  };

  useEffect(() => {
    if (window.self !== window.top) {
      const canvasClient = new CanvasClient();

      const initializeCanvasClient = async () =>  {
        try {
          const response = await canvasClient.ready();
          if (response) {
            setUser(response.untrusted.user?.username ?? "");
          }
        } catch (error) {
          console.error('Error during Canvas client initialization:', error);
        }
      }

      initializeCanvasClient();
    } 
  }, [setUser]);

  return (
      <div className='flex flex-row justify-between p-3 m-5'>
        <div className='text-green-500 font-extrabold text-xs font-sans scale-x-120'>
          Hi, { user }
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
