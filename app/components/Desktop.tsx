"use client";

import React, { useEffect, useState } from "react";
import { Footer } from "./Footer";
import { StartMenu } from "./StartMenu";
import {
  W98Window,
  W98WindowComponent,
} from "@/components/Windows98/W98WindowComponent";
import { useWindowsContext } from "@/providers/WindowsProvider";

export function Desktop(): JSX.Element {
  const [showStartMenu, setShowStartMenu] = useState<boolean>(false);

  const {
    activeWindows,
    focusedWindow,
    openWindow,
    closeWindow,
    startDrag,
    onDrag,
    stopDrag,
    focusWindow,
  } = useWindowsContext();

  const handleGlobalClick = (): void => {
    setShowStartMenu(false);
  };

  useEffect(() => {
    console.log("Active windows:", activeWindows);
  }, [activeWindows]);

  return (
    <div
      className="min-h-screen bg-[#008080] text-black font-sans flex flex-col"
      onMouseMove={onDrag}
      onMouseUp={stopDrag}
      onClick={handleGlobalClick}
    >
      <div className="flex-grow p-4">
        {activeWindows.map((window: W98Window) => (
          <W98WindowComponent
            key={window.id}
            window={window}
            onClose={closeWindow}
            onFocus={focusWindow}
            onStartDrag={startDrag}
            isFocused={focusedWindow === window.id}
          />
        ))}
      </div>
      <Footer
        showStartMenu={showStartMenu}
        setShowStartMenu={setShowStartMenu}
      />
      {showStartMenu && <StartMenu onOpenWindow={openWindow} />}
    </div>
  );
}
