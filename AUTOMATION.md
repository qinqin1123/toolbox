# 万能百宝箱 — WorkBuddy 自动化任务配置说明

## 项目文件结构

```
interest-resource-hub/
├── index.html              # 主页面（9大板块 + 搜索 + 工具箱 + 热榜）
├── css/style.css           # 样式表（全响应式）
├── js/script.js            # 页面交互（80+ 资源数据在此管理）
├── images/                 # 图片素材目录
├── resources.json          # 结构化资源数据（72条）
├── update_resources.js     # 资源自动更新配置
├── generate_social.js      # 社交文案生成配置
├── weekly_post.txt         # 生成的社交媒体文案（自动生成）
└── AUTOMATION.md           # 本文件
```

## 功能板块（9 大类）

| 板块 | 图标 | 说明 | 资源数 |
|------|------|------|--------|
| PPT模板 | 📊 | 模板下载、在线制作 | 12 |
| Word文档 | 📝 | 论文模板、协作文档 | 8 |
| Excel表格 | 📈 | 教程、数据分析工具 | 7 |
| 思维导图 | 🧠 | 在线导图、流程图 | 7 |
| 学术科研 | 🎓 | 文献检索、论文查重 | 9 |
| AI工具 | 🤖 | AI对话、AI绘画 | 8 |
| 简历求职 | 💼 | 简历制作、招聘平台 | 7 |
| 公考考编 | 📋 | 题库、备考资料 | 7 |
| 编程学习 | 💻 | 代码平台、教程 | 7 |

## 增强功能

- **全局搜索**：实时搜索资源名称、描述、分类
- **资源标签**：每个资源标注「免费 / 会员 / 学生优惠」
- **评分系统**：五星评分，卡片直接展示
- **本周热榜**：侧边栏按评分排序 Top 8
- **工具箱快入口**：8 个实用小工具快捷链接
- **友情链接**：页脚展示合作伙伴

---

## 自动化任务 1：每周自动抓取新资源

- **任务名称**: 百宝箱资源自动更新
- **执行频率**: 每周一 09:00
- **RRULE**: `FREQ=WEEKLY;BYDAY=MO;BYHOUR=9;BYMINUTE=0`
- **工作目录**: `d:/workbuddy/interest-resource-hub`
- **任务提示词**:

```
请执行万能百宝箱资源自动更新任务：

1. 读取 update_resources.js 中的 UPDATE_CONFIG 配置
2. 读取 resources.json 获取现有资源列表（用于去重）
3. 按配置中的 sources 列表依次访问信息源（优设网、少数派、知乎、GitHub）
4. 根据关键词筛选与效率工具相关的内容
5. 识别新资源网站，提取：名称、URL、描述
6. 根据 categoryRules 自动分类（9大板块），根据 typeRules 判断类型
7. 将新资源追加到 resources.json（id 递增）和 js/script.js
8. 同步更新两个文件，确保数据一致
9. 输出本次更新报告
```

---

## 自动化任务 2：每周生成社交媒体推荐文案

- **任务名称**: 百宝箱周报生成
- **执行频率**: 每周五 17:00
- **RRULE**: `FREQ=WEEKLY;BYDAY=FR;BYHOUR=17;BYMINUTE=0`
- **工作目录**: `d:/workbuddy/interest-resource-hub`
- **任务提示词**:

```
请执行万能百宝箱周报生成任务：

1. 读取 generate_social.js 中的 SOCIAL_CONFIG 配置
2. 读取 resources.json 获取资源列表
3. 从不同板块中各选取 1-2 个未推荐资源，确保板块多样性
4. 按小红书配置生成文案（6条推荐 + 话题标签 + 板块标签）
5. 按抖音配置生成文案（4条推荐 + 话题标签）
6. 写入 weekly_post.txt
7. 标记本次推荐的资源
```

---

## 手动操作指南

### 新增资源
编辑 `js/script.js`，在 `resources` 数组中追加：
```javascript
{ name:'网站名称', url:'https://example.com', desc:'简短描述', category:'ppt', type:'free', rating:4.5, icon:'X' },
```
同时更新 `resources.json` 中对应的数据。

### 新增板块
1. 在 `js/script.js` 的 `CATEGORIES` 数组中添加新板块定义
2. 在 `CAT_COLORS` 中添加对应颜色
3. 添加资源时使用新的 category ID

### 新增工具箱快入口
编辑 `js/script.js` 中的 `QUICK_TOOLS` 数组：
```javascript
{ name: '工具名', icon: '🔧', url: 'https://...', bg: 'linear-gradient(...)' },
```

### 新增友情链接
编辑 `js/script.js` 中的 `FRIEND_LINKS` 数组。

---

## 广告位说明

- **右侧边栏广告位**: 修改 `index.html` 中 `class="promo-placeholder"` 的区域
- **底部横幅广告位**: 修改 `index.html` 中 `class="banner-placeholder"` 的区域
