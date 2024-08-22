import { NFT } from '@/pages/api/NFTs';
import React, { createContext, useContext, useState } from 'react';

interface DaoContextProps {
    isSelected: boolean;
    setSelected: (selected: boolean) => void;
    nft: NFT | null;
    setNft: (nft: NFT | null) => void;
  }

export const DaoContext = createContext<DaoContextProps>({
  isSelected: false,
  setSelected: () => {},
  nft: null,
  setNft: () => {}
});

interface DaoProviderProps {
    children: React.ReactNode;
  }

export const DaoProvider: React.FC<DaoProviderProps> = ({ children }) => {
    const [isSelected, setSelected] = useState<boolean>(false);
    const [nft, setNft] = useState<NFT | null>(null);
  
    return (
      <DaoContext.Provider value={{ isSelected, setSelected, nft, setNft }}>
        {children}
      </DaoContext.Provider>
    );
  }

export const useDAO = () => useContext(DaoContext);