import { src, dest } from "gulp";
import { componentPath } from "../utils/paths";
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import gulpCleanCss from "gulp-clean-css";
import autoPrefixer from "gulp-autoprefixer";
import run from "../utils/run";

// 删除 dist
export const removeDist = () => {
  return run(`rm -rf ${componentPath}/dist`, componentPath);
};

// 处理样式
export const buildStyle = () => {
  const sass = gulpSass(dartSass);
  return src(`../../../theme-chalk/src/**.scss`)
    .pipe(sass.sync())
    .pipe(autoPrefixer())
    .pipe(gulpCleanCss())
    .pipe(dest(`${componentPath}/dist/lib/src`))
    .pipe(dest(`${componentPath}/dist/es/src`));
};

// 打包组件
export const buildComponent = async () => {  
  run("pnpm run build", componentPath);
};
