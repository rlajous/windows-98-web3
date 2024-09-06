import { Windows98Error } from "@/components/Windows98/Errors/Windows98Error";

export class WalletConnectedRequiredError extends Windows98Error {
  constructor() {
    super(
      "Wallet connected required",
      "You need to connect your wallet to mint NFTs"
    );
    this.name = "WalletConnectedRequiredError";
  }
}
