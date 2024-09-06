"use client";
import { useFuul } from "@/providers/FuulProvider";
import { Desktop } from "./components/Desktop";
import BootScreen from "@/components/Windows98/BootScreen/BootScreen";

export default function Home() {
  const { isLoading } = useFuul();

  if (isLoading) {
    return <BootScreen />;
  }

  return <Desktop />;
}
