import icon from "./icon.vue";
import withInstall from "@simple/utils/withInstall";
const Icon = withInstall(icon);
export default Icon;
export * from './types'

declare module 'vue' {
  export interface GlobalComponents {
    SIcon: typeof Icon
  }
}