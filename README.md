# RDD · Restart Developmental Doer

**这里是项目总门面，不是 Numen 原作者仓，也不是当前游戏源码仓。默认看 master。**

RDD 以真实 Minecraft 检验长程自主任务、可复用能力和持续改进；基于 [Dwinovo/Numen](https://github.com/Dwinovo/minecraft-numen) 的底座继续开发，不宣称上游代码、名称和资源为我们原创。已有部分能力，完整轮回准备框架仍需接线与组合验证，不是即用成品。

## 先选对仓库

| 仓库 | 负责什么 | 阅读分支 |
|---|---|---|
| [restart-developmental-doer](https://github.com/nuomi2422/restart-developmental-doer/tree/master) | 唯一总门面、项目地图与阅读顺序 | master |
| [minecraft-numen](https://github.com/nuomi2422/minecraft-numen/tree/main) | 基于 Dwinovo/Numen 的 RDD 游戏源码 fork | main |
| [rdd-harness](https://github.com/nuomi2422/rdd-harness/tree/main) | 外部 AI 的工程工具、验证和协作入口 | main |
| [rdd-docs-public](https://github.com/nuomi2422/rdd-docs-public/tree/main) | 经审查脱敏的现行知识库发布版，不含旧历史 | main |
| [rdd-docs](https://github.com/nuomi2422/rdd-docs/tree/master) | 私有维护主库、内部历史与敏感原证；需权限 | master |

公开阅读顺序：**本门面了解全貌 → 公开文档了解设计 → 源码核实现 → Harness 查工程办法**。原作者上游只拉不推；本地 origin/backup 只是别名，不决定哪个仓是真源。

## 四条线与共同数据底座

- **运行时保证**：主/支/日常并行待办，执行者按优先级、原因及当前事实选择；监督只接断链，重要损失按备用、回收条件和路线影响重评。
- **学习**：外置学习者从真实输入、选择、动作和世界后态查重写改，机器检查后试用，再核采用与效果；内部框架内组合是后续增强。
- **外部编程**：修自有框架和原子工具，保留版本、测试、发布及回退。
- **沉淀资产**：长期保存有用途的基地、设施、资源及探索地图；历史见过不冒当前可用。

共同链路是：**世界增量获取 → 原始观测存储 → 公共有界计算 → 派生缓存与失效 → 精确读取/语义检索 → 任务、AC、环境和规划/执行实际消费 → 世界结果与学习反馈**。各领域保原写权，不另造全知世界库。

AC 直接读有类型世界参数，支持变量、计算、条件、有界循环、参数积木、临时组合与子 AC；多个 AC 能并行观察、计算和等待，身体冲突由唯一宿主裁决。抢占保断点，恢复先重看现场，工具自查真实进展并有限自救。经验、AC、任务/环境模板和设施方法可独立使用，也可按版本引用组成 skills；各自生命周期不强并。

## 当前阶段与怎么看源码

准备工程四包并行：任务/监督、AC/执行、世界/环境/资产、学习/组装/实验工具，由主工联调。安家过夜只是首例，不代签完整准备；后续供食、交易、采矿遇险和损失恢复用于验证通用性，再进入正式通关轮回。设计、源码、离线、安装/加载、实际调用和世界效果分别记账。

从源码仓 main 的 rdd-core/、world-state-core/、experience-core/、settlement-core/ 看领域逻辑，plugins/ 看游戏适配，api/、core/、ai/ 看底座与运行接缝。完整路径说明在[源码首页](https://github.com/nuomi2422/minecraft-numen/tree/main)。不要按本仓旧 src/ 或 patches/ 副本重装；它们仅为历史资料，不是另一套活跃源码。

## 许可、贡献与费用

现有材料按本仓MIT及各自适用声明保留，不因门面身份改成LGPL。新贡献遵循[贡献说明](CONTRIBUTING.md)及[DCO 1.1](DCO)，不要求版权转让。Harness的新原创核心接收政策见其[许可范围](https://github.com/nuomi2422/rdd-harness/blob/main/LICENSING.md)，不是现有代码已整仓AGPL的承诺。项目开源代码不收软件许可费，但用户自备模型/API、计算、游戏账号及服务器等第三方费用；不承诺无限免费算力。

## 来源、许可与历史资料

保留本仓既有视觉资产和历史资料，不把旧看板数字或旧实验当作当前状态。上游 Numen 源码、公共 API、美术资源分别遵循其 LICENSE、LICENSE-API、LICENSE-ASSETS；本仓自有内容按本仓[许可证](LICENSE)，不覆盖上游许可。

原 rdd-restart-doer 为重复入口，停止发布并在核备份/迁移后处理；不是第二门面。私有主库不删除、不改公开权限，公开文档只是审查后的投影，不带私有 Git 历史、凭据、原始聊天或未审附件。公开文档的链接在首发完成后可用，不能由仓名推定发布已经成功。
