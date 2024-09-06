import { W98Window } from "@/components/Windows98/W98WindowComponent";
import { useState } from "react";

export const useWindows = () => {
  const [zIndexCounter, setZIndexCounter] = useState(1);
  const [activeWindows, setActiveWindows] = useState<W98Window[]>([]);
  const [focusedWindow, setFocusedWindow] = useState<number | null>(null);
  const [draggedWindow, setDraggedWindow] = useState<W98Window | null>(null);
  const [dragOffset, setDragOffset] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const openWindow = (
    getWindowDetails: (
      id: number,
      onClose: (id: number) => void
    ) => { title: string; component: React.ReactNode }
  ): void => {
    const id = Date.now();
    const { title, component: content } = getWindowDetails(id, closeWindow);
    const newWindow: W98Window = {
      id: id,
      title,
      content,
      position: {
        x: 50 + activeWindows.length * 20,
        y: 50 + activeWindows.length * 20,
      },
      zIndex: zIndexCounter,
    };
    setZIndexCounter((prev) => prev + 1);
    setActiveWindows([...activeWindows, newWindow]);
    setFocusedWindow(newWindow.id);
  };

  const closeWindow = (id: number): void => {
    setActiveWindows(activeWindows.filter((window) => window.id !== id));
    if (focusedWindow === id) {
      setFocusedWindow(null);
    }
  };

  const startDrag = (e: React.MouseEvent, window: W98Window): void => {
    setDraggedWindow(window);
    setDragOffset({
      x: e.clientX - window.position.x,
      y: e.clientY - window.position.y,
    });
  };

  const onDrag = (e: React.MouseEvent): void => {
    if (draggedWindow) {
      const newPosition = {
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y,
      };
      setActiveWindows(
        activeWindows.map((w) =>
          w.id === draggedWindow.id ? { ...w, position: newPosition } : w
        )
      );
    }
  };

  const stopDrag = (): void => {
    setDraggedWindow(null);
  };

  const focusWindow = (id: number) => {
    setFocusedWindow(id);
    setActiveWindows((windows) =>
      windows.map((window) =>
        window.id === id ? { ...window, zIndex: zIndexCounter } : window
      )
    );
    setZIndexCounter((prev) => prev + 1);
  };

  return {
    activeWindows,
    focusedWindow,
    openWindow,
    closeWindow,
    startDrag,
    onDrag,
    stopDrag,
    setFocusedWindow,
    focusWindow,
  };
};
