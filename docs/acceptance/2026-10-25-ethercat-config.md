# EtherCAT 配置查阅入口上架

日期：2026-10-25。阶段：本地验收通过，准备发布工具箱入口。

## 范围与依据

用户在工具已独立发布后指出没有放进toolbox，要求补齐工具箱入口。首次可用属于目录可用性变化，符合工作区允许更新`src/tools-config.json`的条件。本次只修改和发布toolbox；EtherCAT工具源码、版本和站点保持独立。

## 实施前标准

- 新增“EtherCAT 配置查阅”，归入开发分类，说明包含SSC Tool、应用对象字典与ESI XML，稳定URL指向`https://loogg.github.io/tool-ethercat-config/`。
- 复用工具现有应用图标，登记来源；不在目录中存储或读取工具版本。
- 校验唯一ID/URL及全部配置工具链接；执行npm ci、lint、生产构建。
- 实际浏览器验证卡片、名称/功能搜索、开发分类、入口href与窄屏布局；核对跳转目标。
- 按toolbox既有流程提交目录变更，使用npm version minor生成toolbox自身的v1.8.0标签（沿用上架新工具增加minor的项目惯例），正常推送并等待CI/Pages通过。
- 发布后核对线上资源和新工具入口。临时预览、日志不提交，实际执行结果在本文件补齐。

## 执行结果

- 目录新增唯一的`ethercat-config`记录，归入开发分类，默认Web入口显示“立即使用”；其余10条工具和站点文案逐项比对没有变化，目录未增加version字段。
- `ethercat-config.svg`与工具仓库原favicon的SHA256一致，页面实际加载成功；来源登记在`public/tool-icons/README.md`。
- 全部11个工具URL均HTTP 200；新增工具稳定URL正确。
- `npm ci`、lint、`/toolbox/`基路径生产构建通过。沿用原锁文件，无依赖变更。审计发现既有开发依赖14项告警（10 high、2 moderate、2 low），lock中对应节点均为dev依赖；本次目录上架不扩大为工具链升级，未将audit计为通过。
- 本地实际浏览器：搜索EtherCAT命中两个相关工具；搜索应用对象字典定位新入口；开发分类可见、效率分类隐藏；返回工具箱后恢复全部11个入口。控制台无warning/error。
- 新卡片实际点击后进入`https://loogg.github.io/tool-ethercat-config/`，标题为“EtherCAT Atlas · 配置查阅工作台”。本次只验收入口跳转，不重复工具内部功能验收。
- 默认桌面视口和390×844窄屏观察通过；窄屏页面宽375、视口390，卡片边界16–359，无横向溢出，结束后恢复默认视口。
- [本地卡片截图](ethercat-config-catalog.png)：展示配置查阅与SSC图标转换两个独立入口，发布后另核对公开资源。

## 远程发布

提交后补齐CI、Pages、线上资源和入口核验结果。
