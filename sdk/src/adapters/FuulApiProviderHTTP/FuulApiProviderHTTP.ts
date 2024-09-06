import { FuulApiProvider } from "../../providers/FuulApiProvider/FuulApiProvider";
import { ProjectInfo } from "../../types/ProjectInfo";

export class FuulApiProviderHTTP implements FuulApiProvider {
  async getProjectInfo(apiKey: string): Promise<ProjectInfo> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          name: "Fuul Project",
          publicApiKey: apiKey,
          referralReward: 10,
          tokenSymbol: "FUUL",
        });
      }, 1000);
    });
  }
}
