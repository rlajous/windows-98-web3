"use client";
import { useEffect } from "react";
import { Connector, useConnect } from "wagmi";

import { Windows98Button } from "../Windows98/Windows98Button";

const ConnectWalletW98WindowComponent = ({
  onClose,
}: {
  onClose: () => void;
}) => {
  const { connect, connectors, isSuccess } = useConnect();

  useEffect(() => {
    if (isSuccess) {
      onClose();
    }
  }, [isSuccess, onClose]);

  return (
    <div className="flex flex-col justify-center mt-4">
      {connectors.map((connector: Connector) => (
        <Windows98Button
          key={connector.uid}
          onClick={() => connect({ connector })}
          className="mb-2"
        >
          {connector.name}
        </Windows98Button>
      ))}
    </div>
  );
};

export const ConnectWalletWindow = (
  id: number,
  onClose: (id: number) => void
) => ({
  title: "Connect to a wallet",
  component: <ConnectWalletW98WindowComponent onClose={() => onClose(id)} />,
});
