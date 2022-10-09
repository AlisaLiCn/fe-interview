
### npm、yarn与pnpm的区别

npm V1-V2

npm V3 & yarn

pnpm

> 内容寻址：通过文件内容生成内容地址（通常是通过hash算法生成），再通过内容地址找到文件。

- 子依赖不会被提升，不会产生幽灵依赖。
- 节省空间：在全局store里存储依赖
- 安装速度快
- 支持monorepo
- 安全性高



