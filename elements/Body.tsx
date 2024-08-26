// import Button from '@/components/Button'
// import { DaoProvider, useDAO } from '@/context/DaoContext';
// import Content from '@/elements/Content'
// import DAO from '@/pages/DAO';
// import DAOS from '@/pages/DAOS';
// import React, { useState } from 'react'

// function Body() {
//     const { view } = useDAO();
//     const [currentView, setCurrentView] = useState(view);

//     const handleMakeDAO = () => {
//         setCurrentView("dao");
//     };
//     const handlePickDAO = () => {
//         setCurrentView("daos");
//     };
//     const HomeButton = () => (
//         <Button 
//             onClick={() => setCurrentView("content")} 
//             className='px-14 border-blue-500 hover:scale-110 duration-300'
//             style={{
//                 backgroundImage: 'linear-gradient(90deg, rgba(212,0,83,1) -90%, rgba(0,12,15,1) 90%)'
//             }}
//         >
//             Home
//         </Button>
//     );
//     const DaoButton = () => (
//         <Button 
//             onClick={handleMakeDAO} 
//             className='px-10 border-purple-500 hover:scale-110 duration-300'
//             style={{
//                 backgroundImage: 'linear-gradient(90deg, rgba(212,0,83,1) -90%, rgba(0,12,15,1) 90%)'
//             }}
//         >
//             Make A DAO
//         </Button>
//     );
//     const DaosButton = () => (
//         <Button 
//             onClick={handlePickDAO} 
//             className='px-11 border-green-600 hover:scale-110 duration-300'
//             style={{
//                 backgroundImage: 'linear-gradient(270deg, rgba(212,0,83,1) -90%, rgba(0,12,15,1) 90%)'
//             }}
//         >
//             Pick A DAO
//         </Button>
//     );

//     return (
//         <div className='h-full flex flex-col justify-between items-center space-y-3 mb-2'>
//            { currentView === "dao" 
//            ? <DaoProvider><DAO/></DaoProvider>
//            : currentView === "daos" 
//            ? <DaoProvider><DAOS/></DaoProvider> 
//            : <Content /> }
//             <div className='flex flex-row justify-center space-x-4'>
//                 {   currentView === "dao" ? <><HomeButton/><DaosButton/></> 
//                     :
//                     currentView === "daos" ? <><DaoButton/><HomeButton/></>
//                     :
//                     <><DaoButton/><DaosButton/></>   
//                 }
//             </div>
//         </div>
//       )
// }

// export default Body


import Button from '@/components/Button';
import { useDAO } from '@/context/DaoContext';
import Content from '@/elements/Content';
import DAO from '@/pages/DAO';
import DAOS from '@/pages/DAOS';
import React, { useEffect } from 'react';

function Body() {
  const { view, setView } = useDAO();

  useEffect(() => {
  }, [view]);

  const handleMakeDAO = () => {
    setView("dao");
  };

  const handlePickDAO = () => {
    setView("daos");
  };

  const HomeButton = () => (
    <Button
      onClick={() => setView("content")}
      className='px-14 border-blue-500 hover:scale-110 duration-300'
      style={{
        backgroundImage: 'linear-gradient(90deg, rgba(212,0,83,1) -90%, rgba(0,12,15,1) 90%)'
      }}
    >
      Home
    </Button>
  );

  const DaoButton = () => (
    <Button
      onClick={handleMakeDAO}
      className='px-10 border-purple-500 hover:scale-110 duration-300'
      style={{
        backgroundImage: 'linear-gradient(90deg, rgba(212,0,83,1) -90%, rgba(0,12,15,1) 90%)'
      }}
    >
      Make A DAO
    </Button>
  );

  const DaosButton = () => (
    <Button
      onClick={handlePickDAO}
      className='px-11 border-green-600 hover:scale-110 duration-300'
      style={{
        backgroundImage: 'linear-gradient(270deg, rgba(212,0,83,1) -90%, rgba(0,12,15,1) 90%)'
      }}
    >
      Pick A DAO
    </Button>
  );

  return (
    <div className='h-full flex flex-col justify-between items-center space-y-3 mb-2'>
      {view === "dao" 
        ? <DAO/>
        : view === "daos"
        ? <DAOS/>
        : <Content />
      }
      <div className='flex flex-row justify-center space-x-4'>
        {view === "dao" 
          ? <><HomeButton /><DaosButton /></>
          : view === "daos"
          ? <><DaoButton /><HomeButton /></>
          : <><DaoButton /><DaosButton /></>
        }
      </div>
    </div>
  );
}

export default Body;