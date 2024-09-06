"use client";

import * as React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { config } from "@/config/wagmi";
import { WindowsProvider } from "@/providers/WindowsProvider";
import { FuulProvider } from "./FuulProvider";

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WindowsProvider>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <FuulProvider>{children}</FuulProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </WindowsProvider>
  );
}
