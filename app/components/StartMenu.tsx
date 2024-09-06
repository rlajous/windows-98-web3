import { ChevronRight } from "lucide-react";
import { NFTMinter } from "./windows/NFTMinter";

const items = [
  {
    title: "NFT Minter - Windows 98 Edition",
    content: <NFTMinter />,
  },
];

export const StartMenu: React.FC<{
  onOpenWindow: (
    getWindowDetails: (
      id: number,
      onClose: (id: number) => void
    ) => { title: string; component: React.ReactNode }
  ) => void;
}> = ({ onOpenWindow }) => (
  <div className="fixed bottom-8 left-0 bg-[#c0c0c0] border-2 border-gray-800 w-72 p-1 z-50">
    <div className="bg-gradient-to-b from-[#000080] to-[#1084d0] text-white p-2 font-bold text-2xl mb-2">
      Windows<span className="text-sm align-top">98</span>
    </div>
    {items.map((item) => (
      <button
        key={item.title}
        className="w-full text-left hover:bg-[#000080] hover:text-white p-1 flex items-center"
        onClick={() =>
          onOpenWindow((id, onClose) => ({
            title: item.title,
            component: item.content,
          }))
        }
      >
        <ChevronRight className="mr-2" size={16} /> {item.title}
      </button>
    ))}
  </div>
);
