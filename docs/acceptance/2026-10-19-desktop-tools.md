# 桌面工具入口上架

日期：2026-10-19。阶段：已提交、推送并发布首页v1.7.0，本地界面与线上资源验证完成。

## 范围和依据

用户要求在toolbox加入三个桌面工具，入口跳转到GitHub仓库；重复链接已向用户核对，第三个工具为md2word。只修改toolbox首页的目录、卡片展示与相应文档，不修改或发布三个桌面工具自身的源码、版本和产物。沿用本会话已经授权的提交、推送和首页发布流程。

目录说明依据各仓库README，保持专业、简洁，不抓取或展示工具版本：

- [VOFA+ 协议工作台](https://github.com/loogg/vofa-justfloat-engine-config)：可视化配置协议字段、校验和输出，生成并构建VOFA+数据引擎。
- [Modbus Debugger](https://github.com/loogg/modbus-debugger)：RTU/TCP扫描、寄存器读写、趋势、记录和回放。
- [MD2Word 文档生成器](https://github.com/loogg/md2word)：按Word模板和CSS将Markdown生成为DOCX，在本机处理文档。

## 方案

为三条新目录记录增加可选`platform: desktop`元数据。保留开发/效率功能分类；卡片显示“桌面端”标识，操作文字为“查看 GitHub”。既有Web工具沿用“立即使用”。链接严格使用用户提供的仓库首页，不指向下载文件、Release或其他站点。优先复用三个仓库现有的应用图标，资源随首页打包。

搜索范围包括桌面端标识，可用“桌面”“desktop”或“GitHub”查找三个桌面入口。应用图标的原文件和来源见[图标说明](../../public/tool-icons/README.md)。

## 基本验收标准

| 项目 | 方法与预期 | 结果 |
|---|---|---|
| 三个条目 | ID和URL各自唯一；名称、说明匹配README；无版本字段 | 通过：10个唯一ID和URL，恰好3个桌面条目，精确匹配用户地址，未添加version |
| 平台与操作 | 三张卡片显示桌面端和查看GitHub；原有七个Web入口保持原文字 | 通过：实际DOM为3个查看GitHub、7个立即使用；三个原应用图标已加载并观察 |
| 链接 | 三张卡片href逐一等于用户提供地址；全部目录链接HTTP可达 | 通过：三个实际卡片href逐一匹配；10个目录URL均HTTP 200 |
| 发现与布局 | 浏览器实际搜索三个工具、切换开发/效率分类；桌面与手机卡片不溢出、标识可读 | 通过：名称各命中1项；桌面/GitHub/desktop各命中3项；开发2项、效率1项；清空恢复10项；1440×1000和390×844已观察，手机scrollWidth=clientWidth=375 |
| 构建 | npm ci、lint、build通过；GitHub Pages base=/toolbox/正确 | 通过：干净安装、lint和生产build成功；图标URL均带/toolbox/且实际加载 |
| 发布 | 只提交本次变更；首页新minor版本及标签未被占用；推送与Pages部署成功 | 通过：功能提交3fddc89、发布提交9e35af7，v1.7.0已推送，CI与Pages均成功 |

## 未决事项

第三个工具已由用户补充为md2word，范围已明确。本次不安装、运行或验证桌面软件功能，也不更改其仓库。

## 本地证据

- [桌面入口与桌面端标识](desktop-tools-catalog.png)
- [手机布局](desktop-tools-mobile.png)
- 原应用图标按Git blob SHA核对，三个本地文件均与来源逐字节对应；图标来源见public/tool-icons/README.md。
- 入口使用原生a链接；本轮直接核对实际href与目标HTTP响应，不安装软件或通过自动化登录GitHub。

## 发布结果

- 功能提交：`3fddc89`；发布提交与v1.7.0标签：`9e35af7717fa5b03e3c6a2de2f0d9c67fa9bb61f`。
- [CI 39252436236](https://github.com/loogg/toolbox/actions/runs/39252436236)：成功。
- [Pages 39252436583](https://github.com/loogg/toolbox/actions/runs/39252436583)：成功。
- [工具箱首页](https://loogg.github.io/toolbox/)HTTP 200，线上JS/CSS与本地v1.7.0生产构建逐字节一致；线上JS包含三个精确仓库地址。
- 三个线上图标均HTTP 200，内容与本地原始图标逐字节一致。浏览器本地预览已实际观察全部图标、桌面端标识与查看GitHub文字。
- 本次只发布toolbox，不修改、构建、提交、打标签或发布三个桌面软件自身的仓库。
- 本轮在线站点核对使用实际HTTP响应和构建文件比对；没有将本地界面截图声称为线上截图。

发布后只追加验收记录和目录字段文档，不改变已发布程序或移动标签。
