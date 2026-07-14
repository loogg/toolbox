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

## 发布

普通 `main` 提交只运行 CI。正式发布使用独立的 toolbox 版本：

```powershell
npm version patch -m "chore(release): v%s"
git push origin main --follow-tags
```

只有 `v*.*.*` 标签会部署 GitHub Pages。
