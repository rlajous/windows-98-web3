"use client";
import React, { createContext, useContext, ReactNode } from "react";
import { useWindows } from "@/hooks/useWindows";
import { W98Window } from "@/components/Windows98/W98WindowComponent";

interface WindowsContextProps {
  activeWindows: W98Window[];
  focusedWindow: number | null;
  openWindow: (
    getWindowDetails: (
      id: number,
      onClose: (id: number) => void
    ) => { title: string; component: React.ReactNode }
  ) => void;
  closeWindow: (id: number) => void;
  startDrag: (e: React.MouseEvent, window: W98Window) => void;
  onDrag: (e: React.MouseEvent) => void;
  stopDrag: () => void;
  setFocusedWindow: (id: number | null) => void;
  focusWindow: (id: number) => void;
}

const WindowsContext = createContext<WindowsContextProps | undefined>(
  undefined
);

export const WindowsProvider = ({ children }: { children: ReactNode }) => {
  const windowsState = useWindows();

  return (
    <WindowsContext.Provider value={windowsState}>
      {children}
    </WindowsContext.Provider>
  );
};

export const useWindowsContext = () => {
  const context = useContext(WindowsContext);
  if (!context) {
    throw new Error("useWindowsContext must be used within a WindowsProvider");
  }
  return context;
};
