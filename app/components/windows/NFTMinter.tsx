"use client";

import { useEffect, useState } from "react";
import { useAccount } from "wagmi";

import { ConnectWallet } from "@/components/ConnectWallet/ConnectWallet";
import { ErrorWindow } from "@/components/Windows98/Errors/ErrorWindow";
import { Windows98Error } from "@/components/Windows98/Errors/Windows98Error";
import { useNFTMinting } from "@/hooks/useNFTMinting/useNFTMinting";
import { useFuul } from "@/providers/FuulProvider";
import { useWindowsContext } from "@/providers/WindowsProvider";
import { getNFTs } from "@/services/nfts";
import { NFT } from "@/types/NFT";

import { ReferralWindow } from "./ReferalWindow";
import { NFTCard } from "../NftCard";

export const NFTMinter = () => {
  const { openWindow } = useWindowsContext();
  const { address } = useAccount();

  const { projectInfo } = useFuul();

  const [nfts, setNfts] = useState<NFT[]>([]);

  const { mintedNFTs, mintNFT } = useNFTMinting();

  useEffect(() => {
    const fetchNfts = async () => {
      const nftsResponse = await getNFTs();
      setNfts(nftsResponse);
    };
    fetchNfts();
  }, []);

  const handleMint = async (nft: NFT) => {
    if (projectInfo) {
      const trackingLink = `https://${window.location.host}/?referrer=${address}`;
      try {
        await mintNFT(nft);
        openWindow(ReferralWindow(trackingLink, projectInfo));
      } catch (error: unknown) {
        if (error instanceof Windows98Error) {
          openWindow(ErrorWindow(error.title, error.message));
        }
      }
    }
  };

  return (
    <div className="flex flex-col h-[80vh] bg-[#c0c0c0] p-4">
      <div className="flex flex-col md:flex-row md:justify-between mb-4">
        <h1 className="text-xl md:text-2xl font-bold text-left md:text-center">
          Windows 98 NFT Collection
        </h1>
        <div className="mt-2 md:mt-0 flex justify-center md:justify-end">
          <ConnectWallet />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {nfts.map((nft: NFT) => (
            <NFTCard
              key={nft.id}
              nft={nft}
              mintedCount={mintedNFTs[nft.id]?.minted || nft.minted}
              onMint={() => handleMint(nft)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
