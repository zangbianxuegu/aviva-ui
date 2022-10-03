import { spawn } from "child_process";
export default async (command: string, path: string) => {
  // cmd 表示命令，args 代表参数，如 rm -rf  rm 就是命令，-rf 就为参数
  const [cmd, ...args] = command.split(" ");
  return new Promise((resolve, reject) => {
    const app = spawn(cmd, args, {
      cwd: path, // 执行命令的路径
      stdio: "inherit", // 输出共享给父进程
      shell: true, // mac 不需要开启，windows 下 git base 需要开启支持
    });
    // 执行完毕关闭并 resolve
    app.on("close", resolve);
  });
};
