import Image from "next/image";

export default function BootScreen() {
  return (
    <div className="relative w-screen h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-between">
      <Image
        src="/assets/boot.webp"
        alt="Windows Boot Screen"
        height={337}
        width={640}
        className="w-full h-full"
      />
      <div className="relative w-full h-3 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-300 to-transparent animate-loading"></div>
      </div>
    </div>
  );
}
