import Image from "next/image";

export default function BootScreen() {
  return (
    <div className="relative w-screen h-screen bg-[#ADD8E6] flex flex-col justify-center items-center">
      <Image
        src="/assets/boot.webp"
        alt="Windows Boot Screen"
        layout="fill"
        objectFit="cover"
        className="hidden sm:block"
      />

      <Image
        src="/assets/mobile.webp"
        alt="Windows 98 Logo"
        layout="fill"
        objectFit="cover"
        className="block sm:hidden"
      />

      <div className="absolute bottom-0 w-full h-3 overflow-hidden z-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-300 to-transparent animate-loading"></div>
      </div>
    </div>
  );
}
