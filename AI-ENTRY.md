# AI 专用入口：先查架构，再读三仓

> 适用：外部编码、架构与验证 AI。这里是导航，不是开工授权，也不是游戏世界真值。
>
> 主人是 **Harness 工程师与架构师**，架构和 Harness 是强项。游戏源码已有大量实机运行内容，不是空项目；先读现有实现与证据，再提修改，不要从“什么都没有做”出发推倒重写。

## 1. 主入口：架构 MCP

优先使用公开版只读架构 MCP `rdd-architecture-public`。它位于 [rdd-docs-public/图谱](https://github.com/nuomi2422/rdd-docs-public/tree/main/图谱)，按目标、模块、关系、决策和来源展开设计。

```json
{
  "mcpServers": {
    "rdd-architecture-public": {
      "command": "node",
      "args": ["<rdd-docs-public 绝对路径>/图谱/mcp/server.mjs"]
    }
  }
}
```

没有 MCP 客户端时，在 `rdd-docs-public/图谱` 目录直接运行：

```bash
node cli.mjs arch_overview
node cli.mjs arch_search 任务链
node cli.mjs arch_focus taskchain
node cli.mjs arch_integrity
```

有私有文档权限时，内部 `rdd_architecture` 可作为增强入口；公开 AI 不需要私有权限也能完成第一轮架构定位。

**判断边界：** 图谱是索引，不是世界真值、部署证明或自动派工器。设计、源码、构建、安装/加载、实机行为、效果必须分别核；`arch_next` 只是候选，不是授权。

## 2. 三个实现仓都可以读

| 仓库 | 阅读分支 | 用来查什么 |
|---|---|---|
| [minecraft-numen](https://github.com/nuomi2422/minecraft-numen/tree/main) | `main` | 游戏领域实现、Minecraft 适配、AC、任务链、世界观测与测试 |
| [rdd-harness](https://github.com/nuomi2422/rdd-harness/tree/main) | `main` | 写码/构建/验证/记录/协作工具、注册表、上传纪律 |
| [restart-developmental-doer](https://github.com/nuomi2422/restart-developmental-doer/tree/master) | `master` | 项目门面、仓库地图、术语、状态与公开阅读顺序 |

公开架构正文来自 [rdd-docs-public](https://github.com/nuomi2422/rdd-docs-public/tree/main)；私有 `rdd-docs/master` 只在有权限时补充，不能要求公开读者先取得私有凭据。

## 3. 推荐阅读顺序

1. `arch_overview` 看总目标与项目地图。
2. `arch_search` / `arch_focus` 定位模块、父链、关系和证据。
3. 回三仓读真实源码、测试和注册入口，不把图谱摘要当实现。
4. 需要判断效果时，沿源码→测试→构建→安装/加载→真实调用→世界后态逐层取证。
5. 修改前写清文件边界、兼容约束、正反例和未覆盖项；修改后回填证据，不自行把“未验”改成“有效”。

## 4. 当前事实与操作边界

- 源码已有多轮实机运行和局部通过记录，但完整框架、全模组适配与长期稳定尚未整体验收。
- Harness 管工程可查证性，不拥有游戏世界事实或同伴身体；领域问题回源码，工具问题回 Harness，入口问题回门面。
- 不自动开启录像、操作游戏、部署或改共享状态；这类动作按当前授权和唯一责任人执行。
- 门面 `archive/` 只作历史检索，不是当前源码或安装教程。
