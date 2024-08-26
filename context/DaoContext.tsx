import { NFT } from '@/pages/api/NFTs';
import React, { createContext, useContext, useState } from 'react';

interface DaoContextProps {
    isSelected: boolean;
    setSelected: (selected: boolean) => void;
    nft: NFT | null;
    setNft: (nft: NFT | null) => void;
    created: boolean;
    setCreated: (created: boolean) => void;
    picked: boolean;
    setPicked: (picked: boolean) => void;
    asset: string;
    setAsset: (asset: string | "") => void;
    view: string;
    setView: (view: string | "") => void;
  }

export const DaoContext = createContext<DaoContextProps>({
  isSelected: false,
  setSelected: () => {},
  nft: null,
  setNft: () => {},
  created: false,
  setCreated: () => {},
  picked: false,
  setPicked: () => {},
  asset: "NFTimage",
  setAsset: () => {},
  view: "content",
  setView: () => {}
});

interface DaoProviderProps {
    children: React.ReactNode;
  }

export const DaoProvider: React.FC<DaoProviderProps> = ({ children }) => {
    const [isSelected, setSelected] = useState<boolean>(false);
    const [nft, setNft] = useState<NFT | null>(null);
    const [created, setCreated] = useState<boolean>(false);
    const [picked, setPicked] = useState<boolean>(false);
    const [asset, setAsset] = useState<string>("NFTimage");
    const [view, setView] = useState<string>("content");
  
    return (
      <DaoContext.Provider value={{ 
          isSelected, setSelected, 
          nft, setNft, 
          created, setCreated, 
          picked, setPicked,
          asset, setAsset,
          view, setView
        }}
      >
        {children}
      </DaoContext.Provider>
    );
  }

export const useDAO = () => useContext(DaoContext);