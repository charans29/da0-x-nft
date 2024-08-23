"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { NFT } from "../../pages/api/NFTs";
import { useDAO } from "@/context/DaoContext";

export const ParallaxScroll = ({
  nfts,
  className,
}: {
  nfts: NFT[];
  className?: string;
}) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef, 
    offset: ["start start", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [-20, -1]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [-20, -1]);

  const third = Math.ceil(nfts.length / 3);

  const firstPart = nfts.slice(0, third);
  const secondPart = nfts.slice(third, 2 * third);
  const thirdPart = nfts.slice(2 * third);

  const { setSelected, setNft } = useDAO();

  const handleClick = (NFT: any) => {
    setNft(NFT);
    console.log(NFT);
    setSelected(true);
};

  return (
    <div
      className={cn("h-[15rem] items-center overflow-y-auto w-full", className)}
      ref={gridRef}
      style={{
        scrollbarWidth: 'none'
      }}
    >
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center py-14 px-5"
        ref={gridRef}
      >
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div
              style={{ y: translateFirst }}
              key={"grid-1" + idx}
              className="flex flex-col items-center"
            >
              <img 
                src={el.image}
                className="h-24 w-24 object-cover object-left-top rounded-lg !m-0 !p-0 cursor-pointer"
                onClick={()=>{handleClick(el)}}
              />
              <text className='text-xs font-mono text-white/40 mt-1.5'>
                Art by:
              </text>
              <p className="text-xs font-mono break-words text-center w-24 text-gray-300">
                {el.symbol}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div 
              style={{ y: translateSecond }} 
              key={"grid-2" + idx}
              className="flex flex-col items-center"
            >
              <img
                src={el.image}
                className="h-24 w-24 object-cover object-left-top rounded-lg !m-0 !p-0 cursor-pointer"
                onClick={()=>{handleClick(el)}}
              />
              <text className='text-xs font-mono text-white/40 mt-1.5'>
                Art by:
              </text>
              <p className="text-xs font-mono break-words text-center w-24 text-gray-300">
                {el.symbol}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div 
              style={{ y: translateThird }}
              key={"grid-3" + idx}
              className="flex flex-col items-center"
            >
              <img
                src={el.image}
                className="h-24 w-24 object-cover object-left-top rounded-lg !m-0 !p-0 cursor-pointer"
                onClick={()=>{handleClick(el)}}
              />
              <text className='text-xs font-mono text-white/40 mt-1.5'>
                Art by:
              </text>
              <p className="text-xs font-mono break-words text-center w-24 text-gray-300">
                {el.symbol}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};