# EtherCAT 配置查阅入口上架

日期：2026-10-25。阶段：入口已提交、推送并随工具箱v1.8.0发布；线上资源与搜索卡片已验证。

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

- 目录功能提交：`3f36913`；工具箱发布提交和v1.8.0标签：`37ff89222ba3554743ee4e85a4d75039cf08bfa6`。
- [CI 40168625887](https://github.com/loogg/toolbox/actions/runs/40168625887)成功；[Pages 40168625626](https://github.com/loogg/toolbox/actions/runs/40168625626)成功，均对应发布提交。
- [工具箱首页](https://loogg.github.io/toolbox/)及全部9个部署文件HTTP可达；JS、CSS、新工具图标和其他二进制资源逐字节对应本地生产构建。index.html和既有logo.svg只存在Windows/Linux行尾差异，统一行尾后内容一致。
- 线上JavaScript包含精确的工具稳定URL和“EtherCAT 配置查阅”名称；新增图标内容与源工具图标相同。
- 线上实际输入EtherCAT后显示配置查阅、SSC图标转换两个卡片，见[线上卡片截图](ethercat-config-online.png)。初次可访问性读取超时后改用同一浏览器的输入动作和截图验证，没有将超时读取计为通过。
- v1.8.0重新构建的9个文件与发布前浏览器验收的构建一致。只发布toolbox入口，不改变EtherCAT工具的源码、版本或站点；后续只追加本验收记录与截图，不移动发布标签。
