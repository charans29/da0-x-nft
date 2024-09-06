import NFTs from "@/pages/api/NFTs";
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const findNftByIdx = (imageUrl: string) : number => {
  return NFTs.findIndex(nft => nft.image === imageUrl);
};