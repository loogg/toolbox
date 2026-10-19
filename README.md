# Toolbox

工具箱首页，发布地址为 <https://loogg.github.io/toolbox/>。

## 本地开发

```powershell
npm ci
npm run dev
```

提交前运行：

```powershell
npm run lint
npm run build
```

## 工具目录

工具入口维护在 `src/tools-config.json`。这里只保存名称、说明、分类、图标和稳定 URL，不保存工具版本。工具自身升级时不需要修改本仓库。

桌面工具增加可选的 `platform: "desktop"`，卡片显示“桌面端”和“查看 GitHub”，URL指向仓库首页；未指定platform的Web工具保留“立即使用”。搜索支持名称、说明及“桌面 / desktop / GitHub”标识。

`iconImage`可引用`public/`下的本地图标路径，随站点部署；未指定时使用`icon`对应的组件。桌面工具现有应用图标的来源见[图标说明](public/tool-icons/README.md)。

## 发布

普通 `main` 提交只运行 CI。正式发布使用独立的 toolbox 版本：

```powershell
npm version patch -m "chore(release): v%s"
git push origin main --follow-tags
```

只有 `v*.*.*` 标签会部署 GitHub Pages。
