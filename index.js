// import fg from 'fast-glob';
// import { dirname, basename } from 'node:path';
// import { renameSync } from 'node:fs';
// const files = fg.sync(['markdown/**/[[:digit:]]#*'], { dot: true, onlyDirectories: true });
// files.reverse().forEach((file) => {
//     const basename2 = basename(file).replace('#', '-');
//     const dirname2 = dirname(file);
//     const file2 = `${dirname2}/${basename2}`;
//     renameSync(file, file2);
//     // console.log('🚀 ~ files.forEach ~ file2:', file2);
//     // fnMap(待办)这是我将来要做的事情
// });
// import { build } from 'vitepress';
// build();
