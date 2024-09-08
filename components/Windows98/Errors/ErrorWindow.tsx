import Image from "next/image";

import { Windows98Button } from "@/components/Windows98/Windows98Button";

export const ErrorWindow =
  (title: string, errorMessage: string) =>
  (id: number, onClose: (id: number) => void) => ({
    title,
    component: (
      <ErrorWindowComponent
        onClose={() => onClose(id)}
        errorMessage={errorMessage}
      />
    ),
  });

const ErrorWindowComponent = ({
  onClose,
  errorMessage,
}: {
  onClose: () => void;
  errorMessage: string;
}) => (
  <div className="flex flex-col justify-center mt-4">
    <div className="flex items-center mb-2">
      <Image
        src={"/assets/msg_error-0.png"}
        alt={"Error"}
        className="h-10 w-10 mr-2"
        height={24}
        width={24}
      />
      <h2 className="text-lg font-bold">{errorMessage}</h2>
    </div>
    <Windows98Button onClick={onClose} className="mt-2">
      OK
    </Windows98Button>
  </div>
);
