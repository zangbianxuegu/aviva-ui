import button from "./button.vue";
import withInstall from "@simple/utils/withInstall";
const Button = withInstall(button);
export default Button;
export * from './types'

declare module 'vue' {
  export interface GlobalComponents {
    SButton: typeof Button
  }
}