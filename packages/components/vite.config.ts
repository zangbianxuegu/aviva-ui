import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import { resolve } from "path";
export default defineConfig({
  build: {
    target: "modules",
    // 打包文件目录
    outDir: "es",
    // 压缩
    minify: false,
    // css 分离
    // cssCodeSplit: true,
    rollupOptions: {
      // 忽略打包 vue 文件
      external: ["vue", /\.sass/, "@simple/utils"],
      input: ["index.ts"],
      output: [
        {
          format: "es",
          // 不用打包成.es.js,这里我们想把它打包成.js
          entryFileNames: "[name].js",
          // 让打包目录和我们目录对应
          preserveModules: true,
          // 配置打包根目录
          dir: resolve(__dirname, "./dist/es"),
          exports: "named",
        },
        {
          format: "cjs",
          entryFileNames: "[name].js",
          // 让打包目录和我们目录对应
          preserveModules: true,
          // 配置打包根目录
          dir: resolve(__dirname, "./dist/lib"),
          exports: "named",
        },
      ],
    },
    lib: {
      entry: "./index.ts",
      name: "simple",
    },
  },
  plugins: [
    vue(),
    dts({
      entryRoot: "src",
      outputDir: [
        resolve(__dirname, "./dist/es/src"),
        resolve(__dirname, "./dist/lib/src"),
      ],
      // 指定使用的 tsconfig.json 为我们整个项目根目录，如果不配置，你也可以在 components 下新建 tsconfig.json
      tsConfigFilePath: "../../tsconfig.json",
    }),

    {
      name: "style",
      generateBundle(config, bundle) {
        // 这里可以获取打包后的文件目录以及代码 code
        const keys = Object.keys(bundle);
        for (const key of keys) {
          const bundler: any = bundle[key as any];
          // rollup 内置方法，将所有输出文件 code 中的 .less 换成 .css，因为我们当时没有打包 less 文件
          this.emitFile({
            type: "asset",
            fileName: key, // 文件名名不变
            source: bundler.code.replace(/\.scss/g, ".css"),
          });
        }
      },
    },
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
