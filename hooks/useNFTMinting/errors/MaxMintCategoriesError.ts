import { Windows98Error } from "@/components/Windows98/Errors/Windows98Error";

export class MaxMintCategoriesError extends Windows98Error {
  constructor(category: string) {
    super(
      "Max mint per categories error",
      `You can't mint more than 2 NFTs from the ${category} category`
    );
    this.name = "MaxMintCategoriesError";
  }
}
