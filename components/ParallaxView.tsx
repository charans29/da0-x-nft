"use client";
import React from 'react';
import NFTs from "./UI/NFTs";
import { ParallaxScroll } from "./UI/ParallaxScroll";

function ParallaxView() {
    const images = NFTs.map(nft => nft.image);
    return <ParallaxScroll nfts={images} className='pl-28'/>;
}

export default ParallaxView