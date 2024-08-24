import { NFT } from '@/pages/api/NFTs';
import React, { createContext, useContext, useState } from 'react';

interface DaoContextProps {
    isSelected: boolean;
    setSelected: (selected: boolean) => void;
    nft: NFT | null;
    setNft: (nft: NFT | null) => void;
    created: boolean;
    setCreated: (selected: boolean) => void;
    picked: boolean;
    setPicked: (selected: boolean) => void;
  }

export const DaoContext = createContext<DaoContextProps>({
  isSelected: false,
  setSelected: () => {},
  nft: null,
  setNft: () => {},
  created: false,
  setCreated: () => {},
  picked: false,
  setPicked: () => {}
});

interface DaoProviderProps {
    children: React.ReactNode;
  }

export const DaoProvider: React.FC<DaoProviderProps> = ({ children }) => {
    const [isSelected, setSelected] = useState<boolean>(false);
    const [nft, setNft] = useState<NFT | null>(null);
    const [created, setCreated] = useState<boolean>(false);
    const [picked, setPicked] = useState<boolean>(false);
  
    return (
      <DaoContext.Provider value={{ 
          isSelected, setSelected, 
          nft, setNft, 
          created, setCreated, 
          picked, setPicked 
        }}
      >
        {children}
      </DaoContext.Provider>
    );
  }

export const useDAO = () => useContext(DaoContext);