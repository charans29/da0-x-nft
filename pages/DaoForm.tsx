import Fields from '@/elements/Fields';
import Nft from '@/elements/Nft';
import React from 'react';
import DaoCreated from './DaoCreated';

function DaoForm({ Dao }: { Dao?: boolean }) {   
  return (
    Dao 
    ? <DaoCreated/>
    : <div className='flex flex-1 justify-between items-center w-10/12'>
        <Nft />
        <Fields />
      </div>
  );
}

export default DaoForm;
