"use client";

import React from "react";

type ButtonVariant = "standard" | "disabled";

interface Windows98ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
}

export const Windows98Button: React.FC<Windows98ButtonProps> = ({
  children,
  variant = "standard",
  className,
  ...props
}) => {
  const baseStyle = `bg-gray-300 border-2 border-t-white border-l-white border-r-gray-700 border-b-gray-700 px-4 py-2 text-black font-bold active:border-t-gray-700 active:border-l-gray-700 active:border-r-white active:border-b-white`;

  const variantStyles = {
    standard: "",
    disabled: "text-[#808080]",
  };

  return (
    <button
      className={`${baseStyle} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
