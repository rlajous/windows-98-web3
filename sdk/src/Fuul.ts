import { ProjectInfo } from "./types/ProjectInfo";

import { FuulApiProvider } from "./providers/FuulApiProvider/FuulApiProvider";
import { FuulApiProviderHTTP } from "./adapters/FuulApiProviderHTTP/FuulApiProviderHTTP";

export class Fuul {
  projectInfo: ProjectInfo | null;
  private fuulApiProvider: FuulApiProvider;

  constructor() {
    this.projectInfo = null;
    this.fuulApiProvider = new FuulApiProviderHTTP();
  }

  async init(apiKey: string): Promise<void> {
    try {
      this.projectInfo = await this.fuulApiProvider.getProjectInfo(apiKey);
      console.log("Project initialized:", this.projectInfo);
    } catch (error) {
      console.error("Error initializing project:", error);
      throw error;
    }
  }
}
