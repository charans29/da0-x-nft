"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const ParallaxScroll = ({
  nfts,
  className,
}: {
  nfts: string[];
  className?: string;
}) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef, // remove this if your container is not fixed height
    offset: ["start start", "end start"], // remove this if your container is not fixed height
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -1]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -1]);

  const third = Math.ceil(nfts.length / 3);

  const firstPart = nfts.slice(0, third);
  const secondPart = nfts.slice(third, 2 * third);
  const thirdPart = nfts.slice(2 * third);

  return (
    <div
      className={cn("h-[15rem] items-center overflow-y-auto w-full ml-24", className)}
      ref={gridRef}
    >
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center py-14 px-5 ml-2"
        ref={gridRef}
      >
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div
              style={{ y: translateFirst }}
              key={"grid-1" + idx}
            >
              <img 
                src={el}
                className="h-24 w-24 object-cover object-left-top rounded-lg !m-0 !p-0 cursor-pointer"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
              <img
                src={el}
                className="h-24 w-24 object-cover object-left-top rounded-lg !m-0 !p-0 cursor-pointer"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
              <img
                src={el}
                className="h-24 w-24 object-cover object-left-top rounded-lg !m-0 !p-0 cursor-pointer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};