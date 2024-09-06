import { ProjectInfo } from "../../types/ProjectInfo";

export interface FuulApiProvider {
  getProjectInfo(apiKey: string): Promise<ProjectInfo>;
}
