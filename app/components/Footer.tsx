"use client";
import { Windows98Button } from "@/components/Windows98/Windows98Button";
import Image from "next/image";
import { Volume2 } from "lucide-react";

interface FooterProps {
  showStartMenu: boolean;
  setShowStartMenu: (show: boolean) => void;
}

export const Footer = ({ showStartMenu, setShowStartMenu }: FooterProps) => {
  const currentTime = new Date();

  return (
    <div className="bg-[#c0c0c0] border-t-2 border-white flex justify-between items-center p-1 h-8">
      <Windows98Button
        onClick={(e) => {
          e.stopPropagation(); // Stop global click event
          setShowStartMenu(!showStartMenu);
        }}
        className="flex items-center h-full px-[6px]"
      >
        <Image
          src="/assets/windows-0.png"
          alt="Windows logo"
          className="mr-2 h-5"
          height={24}
          width={24}
        />
        Start
      </Windows98Button>
      <div className="flex items-center">
        <Volume2 className="w-4 h-4 mr-1" />
        <div className="bg-[#ffffff] border-2 border-[#808080] border-r-[#ffffff] border-b-[#ffffff] px-2 py-0.5 text-sm">
          {currentTime.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
      </div>
    </div>
  );
};
