import { Windows98Button } from "@/components/Windows98/Windows98Button";
import { NFT } from "@/types/NFT";
import Image from "next/image";

export const NFTCard: React.FC<{
  nft: NFT;
  mintedCount: number;
  onMint: (nft: NFT) => void;
}> = ({ nft, mintedCount, onMint }) => (
  <div className="bg-[#c0c0c0] p-4 border-t-2 border-l-2 border-white border-b-2 border-r-2 hover:bg-[#dfdfdf]">
    <div className="flex items-center mb-2">
      <Image
        src={nft.icon}
        alt={nft.name}
        className=" h-10 w-10 mr-2"
        height={24}
        width={24}
      />
      <h2 className="text-lg font-bold">{nft.name}</h2>
    </div>
    <p className="text-sm mb-2">Type: {nft.category}</p>
    <p className="text-sm mb-2">Editions: {nft.editions}</p>
    <p className="text-sm mb-2">Minted: {mintedCount}</p>
    <Windows98Button onClick={() => onMint(nft)} className="w-full ">
      Mint NFT
    </Windows98Button>
  </div>
);
