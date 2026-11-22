# 快速开始：第一次来怎么读、怎么核对

[回首页](README.md) · [术语](GLOSSARY.md) · [状态](STATUS.md)

## 不装游戏，五分钟看懂（不需要密钥）

1. 读[首页](README.md)第一段，确认这是基于 Numen 的 RDD 研发项目，不是官方 Numen，也不是完成的安装包。
2. 不懂的词看[十词表](GLOSSARY.md)，再看[状态页](STATUS.md)区分已有部分与待验。
3. 打开[四包准备范围](https://github.com/nuomi2422/rdd-docs-public/blob/main/施工/055-四包并行准备.md)，看到的是计划及接口，不是已运行全部功能的证明。
4. 想核实现，进入[源码 main](https://github.com/nuomi2422/minecraft-numen/tree/main)：rdd-core 管任务/资产，world-state-core 管观测，plugins 做游戏适配；api/core/ai 是底座与接缝。不要从本门面的归档复制代码。

可选：本地只下载本门面并检查入门文件（不编译、不联网调用模型、不启动游戏）。需要 Git，文件夹名可自选：


```powershell
git clone --branch master --single-branch https://github.com/nuomi2422/restart-developmental-doer.git rdd-overview
Set-Location rdd-overview
Get-Item README.md, GLOSSARY.md, STATUS.md, QUICKSTART.md, docs/README.md | Select-Object Name
```


期望：四个文件和新 docs/README 存在，根目录没有 src/ 或 patches/。如果装有 Node.js 18 或更高版本，可再执行 `node tools/check-entry.cjs`，期望 `issues: []`、退出码0；它只检查本地阅读入口，不启动游戏、模型或服务。归档位置在 archive/；这只证明你拿到了正确的阅读入口，不证明游戏能力。

## 开发者想看实现

公开代码路径是 [minecraft-numen/main](https://github.com/nuomi2422/minecraft-numen/tree/main)，不是旧 redline-1，也不是本仓旧源码副本。源码当前配置可查 [gradle.properties](https://github.com/nuomi2422/minecraft-numen/blob/main/gradle.properties)：Minecraft 1.21.1、Java 21、NeoForge 21.1.233；这些是源码配置，不是新机安装已验声明。

构建、运行环境和工具依赖先按源码仓及[Harness首页](https://github.com/nuomi2422/rdd-harness/tree/main)实际版本核对。本次门面修复没有在干净新机器重新编译/安装，因此不把任何构建命令标为“一条命令就跑通”。不要混不同提交的核心和插件，不在已有重要存档上试未知组合，不提交自己的密钥。

## 玩家想直接体验

**完整RDD的可复现玩家安装包和首次效果教程尚未在此入口验收。** 你可以看原作者 [Numen](https://github.com/Dwinovo/minecraft-numen) 的官方说明，但那是另一个发行来源；原版能运行不等于RDD的任务/学习闭环都已具备。

未来合格的体验教程至少要列准确版本和下载来源、依赖及权限、模型费用、隔离测试世界、一个明确目标、在哪看到实际结果、失败如何停止/回退。本页不把第三方模型额度当无限免费，也不分发无权发布的游戏资源。

## 怎么判断一次效果

当有对应获验版本可运行时，记录起点和目标、准确制品、实际调用、产出/世界后态与未覆盖条件。例如采集目标应看实际物品进入背包，而非动画或工具一句成功。现在可以读[通用验证经验](https://github.com/nuomi2422/rdd-docs-public/blob/main/经验/001-测试与实际生效.md)理解判据；它不是一次新实验的原始回执。
