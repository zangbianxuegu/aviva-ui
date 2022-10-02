import { src, dest } from "gulp";
import { componentPath } from "../utils/paths";
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);
import autoprefixer from "gulp-autoprefixer";
import run from "../utils/run";

// 删除 dist
export const removeDist = () => {
  return run(`rm -rf ${componentPath}/dist`, componentPath);
};

// 处理样式
export const buildStyle = () => {
  return src(`../${componentPath}/theme-chalk/src/**/mixins/**.scss`)
    .pipe(sass.sync())
    .pipe(autoprefixer())
    .pipe(dest(`${componentPath}/dist/lib/src`))
    .pipe(dest(`${componentPath}/dist/es/src`));
};

// 打包组件
export const buildComponent = async () => {  
  run("pnpm run build", componentPath);
};
