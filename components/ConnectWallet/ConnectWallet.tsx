"use client";

import { ChevronDown } from "lucide-react";
import React from "react";
import { useAccount, useDisconnect, useEnsName } from "wagmi";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { truncateEthereumWallet } from "@/lib/utils";
import { useWindowsContext } from "@/providers/WindowsProvider";

import { ConnectWalletWindow } from "./ConnectWalletWindow";
import { Windows98Button } from "../Windows98/Windows98Button";


export const ConnectWallet = () => {
  const { address, isConnected } = useAccount();
  const { openWindow } = useWindowsContext();

  const { data: ensName } = useEnsName({ address });
  const { disconnect } = useDisconnect();

  return (
    <>
      {isConnected ? (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Windows98Button className="inline-flex items-center justify-between">
              {address && (
                <div>{ensName || truncateEthereumWallet(address, 5)}</div>
              )}
              <ChevronDown className="h-4 w-4 ml-2" />
            </Windows98Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-gray-300 border-2 border-t-white border-l-white border-r-gray-700 border-b-gray-700 rounded-none shadow-md p-1 w-full">
            <DropdownMenuItem
              onSelect={() => disconnect()}
              className="focus:bg-[#000080] focus:text-white rounded-none px-4 py-2 cursor-default"
            >
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Windows98Button
          onClick={() => {
            openWindow(ConnectWalletWindow);
          }}
        >
          Connect Wallet
        </Windows98Button>
      )}
    </>
  );
};
