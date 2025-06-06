import { Ora } from "ora";

export default interface IModule {
  name: string;
  dependencies?: string[];
  initialize(spinner: Ora): Promise<void>;
  remove(spinner: Ora): Promise<void>;
}
