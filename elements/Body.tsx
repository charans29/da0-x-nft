import Button from '@/components/Button'
import Content from '@/elements/Content'
import DAO from '@/pages/DAO';
import DAOS from '@/pages/DAOS';
import React, { useState } from 'react'

function Body() {
    const [currentView, setCurrentView] = useState('content');

    const handleMakeDAO = () => {
        setCurrentView('dao');
    };
    const handlePickDAO = () => {
        setCurrentView('daos');
    };
    const HomeButton = () => (
        <Button 
            onClick={() => setCurrentView('content')} 
            className='px-14 border-blue-500'
            style={{
                backgroundImage: 'linear-gradient(90deg, rgba(212,0,83,1) -90%, rgba(0,12,15,1) 90%)'
            }}
        >
            Home
        </Button>
    );

    return (
        <div className='h-full flex flex-col justify-between p-16'>
           { currentView === 'dao' ? <DAO /> : currentView === 'daos' ? <DAOS /> : <Content /> }
            <div className='flex flex-row justify-center space-x-4'>
                { currentView === 'content' && (
                    <>
                        <Button 
                            onClick={handleMakeDAO} className='px-10 border-purple-500'
                            style={{
                                backgroundImage: 'linear-gradient(90deg, rgba(212,0,83,1) -90%, rgba(0,12,15,1) 90%)'
                            }}
                        >
                            Make A DAO
                        </Button>
                        <Button 
                            onClick={handlePickDAO} className='px-11 border-green-600'
                            style={{
                                backgroundImage: 'linear-gradient(270deg, rgba(212,0,83,1) -90%, rgba(0,12,15,1) 90%)'
                            }}
                        >
                            Pick A DAO
                        </Button>
                    </>
                )}
                { currentView === 'dao' && (
                    <>
                        <HomeButton/>
                        <Button 
                            onClick={handlePickDAO} className='px-11 border-green-600'
                            style={{
                                backgroundImage: 'linear-gradient(270deg, rgba(212,0,83,1) -90%, rgba(0,12,15,1) 90%)'
                            }}
                        >
                            Pick A DAO
                        </Button>
                    </>
                )}
                { currentView === 'daos' && (
                    <>
                        <HomeButton/>
                        <Button 
                            onClick={handleMakeDAO} className='px-10 border-purple-500'
                            style={{
                                backgroundImage: 'linear-gradient(90deg, rgba(212,0,83,1) -90%, rgba(0,12,15,1) 90%)'
                            }}
                        >
                            Make A DAO
                        </Button>
                    </>
                )}
            </div>
        </div>
      )
}

export default Body