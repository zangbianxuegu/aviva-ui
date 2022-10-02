import type { App, Plugin } from "vue";
export type SFCWithInstall<T> = T & Plugin;
export default <T>(comp: T) => {
  (comp as SFCWithInstall<T>).install = (app: App) => {
    app.component((comp as any).name, comp as SFCWithInstall<T>);
  };
  return comp as SFCWithInstall<T>;
};
