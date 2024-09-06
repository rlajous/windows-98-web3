"use client";

import { X, Minus, Square } from "lucide-react";

export interface W98Window {
  id: number;
  title: string;
  content: React.ReactNode;
  position: { x: number; y: number };
  zIndex: number;
}

interface W98WindowComponentProps {
  window: W98Window;
  onClose: (id: number) => void;
  onFocus: (id: number) => void;
  onStartDrag: (e: React.MouseEvent, window: W98Window) => void;
  isFocused: boolean;
}

export const W98WindowComponent: React.FC<W98WindowComponentProps> = ({
  window,
  onClose,
  onFocus,
  onStartDrag,
  isFocused,
}) => (
  <div
    className={`absolute bg-[#c0c0c0] border-t-2 border-l-2 border-white border-b-2 border-r-2 shadow-md ${
      isFocused ? "z-10" : "z-0"
    }`}
    style={{
      left: window.position.x,
      top: window.position.y,
      minWidth: "300px",
      width: "80%",
      zIndex: window.zIndex,
    }}
    onClick={() => onFocus(window.id)}
  >
    <div
      className="bg-gradient-to-r from-[#000080] to-[#1084d0] text-white p-1 font-bold flex justify-between items-center cursor-move"
      onMouseDown={(e) => {
        e.preventDefault();
        onFocus(window.id);
        onStartDrag(e, window);
      }}
    >
      <span className="text-sm">{window.title}</span>
      <div className="flex space-x-1">
        <button className="bg-[#c0c0c0] hover:bg-[#dfdfdf] active:bg-[#c0c0c0] text-black w-4 h-4 flex items-center justify-center border border-gray-400 text-xs">
          <Minus className="w-3 h-3" />
        </button>
        <button className="bg-[#c0c0c0] hover:bg-[#dfdfdf] active:bg-[#c0c0c0] text-black w-4 h-4 flex items-center justify-center border border-gray-400 text-xs">
          <Square className="w-3 h-3" />
        </button>
        <button
          className="bg-[#c0c0c0] hover:bg-[#dfdfdf] active:bg-[#c0c0c0] text-black w-4 h-4 flex items-center justify-center border border-gray-400 text-xs"
          onClick={() => onClose(window.id)}
        >
          <X className="w-3 h-3" />
        </button>
      </div>
    </div>
    <div className="p-4 bg-[#c0c0c0]">{window.content}</div>
  </div>
);
