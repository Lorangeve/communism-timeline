# 历史的经纬

Svelte 5 + TypeScript + Canvas 动态历史星河，精选展示 1818—2000 年间 12 位人物、23 部文献与 13 个事件。

## 开发

需要 Node.js 22.12 或更新版本。

```sh
npm install
npm run dev
```

打开 http://127.0.0.1:4173 。开发服务支持热更新。

```sh
npm run check   # Svelte 与 TypeScript 检查
npm test        # 历史数据、作者关系、轨迹交汇测试
npm run build   # 生成 dist 静态站点
npm run preview # 本地预览构建结果
```

## 使用

- 自动播放星河，支持暂停、1× / 3× / 8× 速度和拖动时间滑块。
- 人物轨迹从左向右展开，共同写作与明确共同参与关系在星点交汇。
- 点击星点、人物按钮、文献卡片查看详情；目录支持按书名与作者搜索。
- 70 年跟随视野与 1818—2000 全景切换；支持世界背景与中国脉络筛选。
- 人物生卒与事件起止年表可展开；系统减少动态效果时不自动播放。

## 结构

- `src/App.svelte`：时间、选择项和筛选状态，以及动画生命周期。
- `src/components/Player.svelte`：播放、速度和时间控制。
- `src/components/Detail.svelte`：人物、事件和文献详情及过渡。
- `src/components/Library.svelte`：文献检索和卡片。
- `src/history.ts`：历史条目类型与显示辅助函数。
- `galaxy.js`：独立 Canvas 绘图模块与轨迹计算。逐帧绘图直接读取状态，退出组件时释放观察器和星点按钮。
- `data.js`：人物、事件、文献及明确参与关系。日期为公历，保留年/月/日精度。文献通常以写作完成时间定位，首次发表单列；交汇不表示实际会面或思想完全一致。

此图谱为精选内容，非完整通史。来源和有争议的分期在条目中注明。

新增人物包括斯大林、托洛茨基、布哈林、葛兰西，均附生卒日期、代表文献和来源。人物轨道按总人数自适应分配高度，颜色可扩展。

## 在线站点

https://lorangeve.github.io/communism-timeline/

源码保存在 `main`，构建产物通过 `gh-pages` 分支发布。发布构建使用 `npm run build -- --base /communism-timeline/`，本地开发仍使用根路径。当前 gh 凭据不含 workflow 权限，因此采用分支发布，而非 GitHub Actions。
