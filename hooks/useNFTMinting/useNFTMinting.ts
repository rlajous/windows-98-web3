import { useState } from "react";
import { useAccount, useSignMessage } from "wagmi";

import { NFT } from "@/types/NFT";

import { MaxMintCategoriesError } from "./errors/MaxMintCategoriesError";
import { MintError } from "./errors/MintError";
import { WalletConnectedRequiredError } from "./errors/WalletConnectedRequiredError";

export interface MintedNFTs {
  [key: number]: NFT;
}

export const useNFTMinting = () => {
  const [mintedNFTs, setMintedNFTs] = useState<MintedNFTs>({});
  const [showReferralModal, setShowReferralModal] = useState<boolean>(false);
  const { address, isConnected } = useAccount();
  const { signMessageAsync } = useSignMessage();

  const mintNFT = async (nft: NFT): Promise<void> => {
    if (!isConnected) {
      throw new WalletConnectedRequiredError();
    }

    const categoryMints = Object.values(mintedNFTs).filter(
      (mintedNFT) => mintedNFT.category === nft.category
    ).length;

    if (categoryMints >= 2) {
      throw new MaxMintCategoriesError(nft.category);
    }

    try {
      const message = `Minting ${nft.name}`;
      await signMessageAsync({ message });

      setMintedNFTs((prev) => ({
        ...prev,
        [nft.id]: { ...nft, minted: (prev[nft.id]?.minted || nft.minted) + 1 },
      }));
      setShowReferralModal(true);
    } catch (error) {
      throw new MintError();
    }
  };

  return {
    mintedNFTs,
    showReferralModal,
    address,
    isConnected,
    mintNFT,
    setShowReferralModal,
  };
};
