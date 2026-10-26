# EtherCAT 工具名称同步

2026-10-26。用户确认产品更名为“EtherCAT 配置查阅工具”，本仓库只同步`ethercat-config`的显示名称。沿用稳定URL、分类、说明和图标，不添加工具版本字段；其他工具记录保留。

验收：目录差异仅该名称；npm ci、lint、build；所有配置URL；实际搜索及卡片显示。发布按toolbox独立规则执行。

本地结果：仅ethercat-config的name改变，URL/分类/图标/说明及其他10条工具记录逐项比对不变，没有添加工具版本字段。npm ci与build通过；默认lint被既有未跟踪temp/内的构建文件干扰，显式排除Git已忽略的temp后npm run lint通过，源代码检查范围保留。依赖锁未改变；npm ci报告既有14项开发依赖告警，本次不进行依赖升级。

全部11个配置工具URL的HTTP检查均200。实际界面搜索“配置查阅工具”命中唯一正确卡片，稳定URL正确；390×844窄屏名称完整显示。准备按toolbox独立发布规则发布目录名称。


发布结果：目录提交a824fc7；toolbox自身发布提交1b3d4e1、标签v1.8.1。[CI 40262557752](https://github.com/loogg/toolbox/actions/runs/40262557752)与[Pages 40262557580](https://github.com/loogg/toolbox/actions/runs/40262557580)均成功。线上9个资源已核对，7个逐字节一致，既有index.html/logo.svg仅CR换行不同；新JavaScript与本地生产构建一致，包含准确新名称与稳定URL。

状态：名称同步、目录验证及独立发布完成。
