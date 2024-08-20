"use client";
import React from 'react';
import NFTs from "./UI/NFTs";
import { ParallaxScroll } from "./UI/ParallaxScroll";

function ParallaxView() {
    return <ParallaxScroll nfts={NFTs}/>;
}

export default ParallaxView