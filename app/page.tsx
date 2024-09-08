"use client";
import BootScreen from "@/components/Windows98/BootScreen/BootScreen";
import { useFuul } from "@/providers/FuulProvider";

import { Desktop } from "./components/Desktop";

export default function Home() {
  const { isLoading } = useFuul();

  if (isLoading) {
    return <BootScreen />;
  }

  return <Desktop />;
}
