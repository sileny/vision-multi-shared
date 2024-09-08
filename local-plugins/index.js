// 常见用法文档：https://yuque.antfin-inc.com/cone/chuqrf/sg61m7

const path = require('path');
const fs = require('fs-extra');

module.exports = function ({ context, onHook }) {
  const { rootDir } = context;

  // 历史遗留打包问题
  // 之前是 babel 后的文件放到 build 文件夹的, 但是 build-scripts 打包后是放到 lib 的
  // 所以将 lib 拷贝到 build
  onHook('after.build.compile', async () => {
    await fs.copy(path.resolve(rootDir, 'dist'), path.resolve(rootDir, 'build'), {
      overwrite: true,
    });
  });
};
