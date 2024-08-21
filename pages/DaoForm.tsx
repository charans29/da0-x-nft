import Fields from '@/elements/Fields';
import Nft from '@/elements/Nft';
import React from 'react'

function DaoForm() {
    
  return (
    <div className='flex flex-1 justify-between items-center w-10/12'>
        <Nft/>
        <Fields/>
    </div>
  )
}

export default DaoForm