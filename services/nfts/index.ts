import { NFT } from "@/types/NFT";

const nfts: NFT[] = [
  {
    id: 1,
    name: "My Computer",
    category: "System",
    editions: 100,
    minted: 0,
    icon: "/assets/computer-4.png",
  },
  {
    id: 2,
    name: "Recycle Bin",
    category: "System",
    editions: 500,
    minted: 0,
    icon: "/assets/recycle_bin_full-4.png",
  },
  {
    id: 3,
    name: "Internet Explorer",
    category: "Application",
    editions: 1000,
    minted: 0,
    icon: "/assets/internet_explorer.png",
  },
  {
    id: 4,
    name: "Notepad",
    category: "Application",
    editions: 200,
    minted: 0,
    icon: "/assets/notepad-2.png",
  },
  {
    id: 5,
    name: "Paint",
    category: "Application",
    editions: 50,
    minted: 0,
    icon: "/assets/mspaint.png",
  },
];

export const getNFTs = async () => {
  return new Promise<NFT[]>((resolve) => {
    setTimeout(() => {
      resolve(nfts);
    }, 1000);
  });
};
