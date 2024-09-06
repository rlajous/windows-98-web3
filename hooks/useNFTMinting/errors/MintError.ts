import { Windows98Error } from "@/components/Windows98/Errors/Windows98Error";

export class MintError extends Windows98Error {
  constructor() {
    super("Mint error", "An error occurred while minting your NFT");
    this.name = "MintError";
  }
}
