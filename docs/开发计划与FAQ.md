# 小手机 - 开发计划与常见问题

**版本**: v1.0  
**最后更新**: 2026年5月12日

---

## 1. Phase 1 (MVP v1.0) 开发计划

### 1.1 里程碑总览

```
Week 1-2: 基础搭建
  ├─ Vue 3 + Vite 项目初始化
  ├─ Pinia 状态管理配置
  ├─ IndexedDB 初始化
  └─ UI 组件库搭建

Week 3-4: 核心功能
  ├─ API 配置模块
  ├─ 人物卡管理
  ├─ 聊天主功能
  └─ LLM API 适配

Week 5-6: 进阶功能
  ├─ 世界书 + RAG 检索
  ├─ CoT 预设管理
  ├─ 导出/导入模块
  └─ UI 优化和响应式调整

Week 7: 测试与部署
  ├─ 单元测试和集成测试
  ├─ 性能优化
  ├─ PWA 配置
  └─ 部署到 GitHub Pages
```

### 1.2 详细任务列表

#### Week 1-2: 基础搭建

| 任务 | 优先级 | 估时 | 负责人 |
|------|--------|------|--------|
| 创建 Vue 3 + Vite 项目 | P0 | 1h | - |
| 配置 Pinia 状态管理 | P0 | 2h | - |
| 设计 IndexedDB Schema | P0 | 2h | - |
| 实现 DBService (CRUD) | P0 | 4h | - |
| 设计 UI 组件库 | P0 | 4h | - |
| 实现 NavBar 导航栏 | P0 | 2h | - |
| 实现 HomePage 布局 | P0 | 2h | - |
| **小计** | | **17h** | |

#### Week 3-4: 核心功能

| 任务 | 优先级 | 估时 | 负责人 |
|------|--------|------|--------|
| 实现 APIView (配置页) | P0 | 4h | - |
| 实现 LLMService (API调用) | P0 | 6h | - |
| 测试 API 连接 (多个提供商) | P0 | 3h | - |
| 实现 CharacterStore (状态) | P0 | 2h | - |
| 实现 CharacterView (人物卡) | P0 | 4h | - |
| 实现人物卡导入 (JSON/PNG) | P0 | 3h | - |
| 实现 ChatView (聊天页) | P0 | 5h | - |
| 实现消息保存逻辑 | P0 | 2h | - |
| **小计** | | **29h** | |

#### Week 5-6: 进阶功能

| 任务 | 优先级 | 估时 | 负责人 |
|------|--------|------|--------|
| 实现 WorldbookStore | P0 | 2h | - |
| 实现 WorldbookView | P0 | 4h | - |
| 实现世界书导入 (JSON/TXT) | P0 | 3h | - |
| 实现 RAGService (关键词提取) | P0 | 4h | - |
| 实现相似度计算 (简易版) | P0 | 3h | - |
| 实现 PresetStore | P0 | 2h | - |
| 实现 PresetView | P0 | 3h | - |
| 实现 PromptService (提示词构建) | P0 | 3h | - |
| 实现导出功能 | P1 | 2h | - |
| 实现导入功能 | P1 | 2h | - |
| UI 样式优化 (Apple Design) | P0 | 8h | - |
| 响应式布局调整 | P0 | 4h | - |
| **小计** | | **40h** | |

#### Week 7: 测试与部署

| 任务 | 优先级 | 估时 | 负责人 |
|------|--------|------|--------|
| 单元测试 (DBService) | P1 | 3h | - |
| 集成测试 (聊天流程) | P1 | 4h | - |
| 性能优化 (虚拟滚动等) | P1 | 3h | - |
| PWA 配置 | P1 | 2h | - |
| 部署到 GitHub Pages | P1 | 2h | - |
| bug 修复和调整 | P1 | 4h | - |
| **小计** | | **18h** | |

**总计**: ~104小时 (约13-15个工作日，取决于团队人数)

---

## 2. 技术栈推荐版本

```json
{
  "dependencies": {
    "vue": "^3.4.0",
    "vue-router": "^4.2.0",
    "pinia": "^2.1.0",
    "axios": "^1.6.0",
    "tailwindcss": "^3.3.0"
  },
  "devDependencies": {
    "vite": "^5.0.0",
    "@vitejs/plugin-vue": "^4.5.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0"
  },
  "optional": {
    "compromise": "^14.x",
    "ml.js": "latest",
    "idb": "^8.0.0"
  }
}
```

---

## 3. 常见问题 (FAQ)

### 3.1 产品功能

**Q1: 为什么 Version 1 不支持"查手机"功能？**

A: 查手机是一个复杂的功能，需要：
1. 一整套虚拟手机的UI系统
2. 多个模拟App (消息、日历、相册、笔记等)
3. 模型能理解char查看这些内容的含义
4. 与聊天的深层互动逻辑

这会大幅延长开发周期。建议 MVP 先验证"聊天 + 人物设定准确性"这个核心价值，后续再加这个高度互动的功能。

---

**Q2: "自动备份"为什么不在 Version 1？**

A: MVP 阶段的用户规模很小，且先验证产品-市场匹配度。自动备份涉及：
- 云端服务器部署
- 账号管理系统
- 数据同步协议
- 用户认证

建议 v1.0 用本地导出/导入解决，用户可手动备份到本地或其他云盘。等用户数增长、有明确需求后再做自动备份。

---

**Q3: 为什么叫"聊聊"，不是"微信"或"QQ"？**

A: 
- **微信**: 过于正式，通常指真实的社交软件
- **QQ**: 用户期望与真实QQ功能相同，容易混淆
- **聊聊**: 简洁、亲切，表达出"随性聊天"的感觉，定位清晰

---

**Q4: 人物卡可以设置成"多人互动"吗？**

A: Version 1 只支持 1v1 聊天。多人互动涉及：
- 多个 Agent 之间的协调
- 复杂的对话逻辑管理
- 群聊 UI 设计

建议 v1.0 验证单人陪伴的核心价值，v2.0+ 再探索多人互动。

---

### 3.2 技术实现

**Q5: 为什么用 IndexedDB，不用 LocalStorage？**

A: 
- **LocalStorage**: 5-10MB 限制，只能存文本，不支持复杂查询
- **IndexedDB**: 容量大 (几GB)，支持二进制数据、索引查询、事务

聊天记录会不断积累，需要 IndexedDB 来有效管理。

---

**Q6: RAG 检索时，如果关键词很多，会不会超过 token 限制？**

A: 好问题！简单的解决方案：
1. **初版**: 不设限制，根据模型自身context window调整。用户可自己感受什么时候开始生成质量下降。
2. **优化版**: 实现 "智能截断" 逻辑
   ```
   相关条目按优先级排序
     ↓
   逐条注入，直到接近 context 上限
     ↓
   停止注入，发送请求
   ```
3. **高级版**: 使用 token 计数库 (如 `js-tiktoken`)
   ```
   // 估算 token 数
   const tokenCount = tokenizer.encode(prompt).length
   if (tokenCount > contextLimit * 0.8) {
     // 截断
   }
   ```

---

**Q7: 语义相似度计算应该怎么实现？**

A: 分阶段实现：

**v1.0 (初版)** - 简单关键词匹配:
```javascript
// 直接字符串包含
const isRelevant = (keywords, entry) => {
  return keywords.some(kw => 
    entry.content.includes(kw) || 
    entry.keywords.includes(kw)
  )
}
```

**v1.1 (优化)** - 基于中文分词:
```javascript
// 使用 compromise.js 或 jieba.js 分词
const words = tokenizer.tokenize(userMessage)
const entryWords = tokenizer.tokenize(entry.content)
const intersect = words.filter(w => entryWords.includes(w))
const similarity = intersect.length / Math.max(words.length, entryWords.length)
```

**v2.0+ (高级)** - 词向量 embedding:
```javascript
// 使用预训练的词向量 (如 Fasttext 中文)
// 或调用 API (如 OpenAI Embedding)
const userEmbedding = await model.embed(userMessage)
const entryEmbedding = await model.embed(entry.content)
const similarity = cosineSimilarity(userEmbedding, entryEmbedding)
```

**建议**: v1.0 用简单方案，快速上线。后续根据用户反馈优化。

---

**Q8: 导入人物卡时，如何解析 SillyTavern 的 PNG 格式？**

A: SillyTavern 的人物卡 PNG 是标准PNG文件，但嵌入了JSON元数据：

```javascript
async function extractCharacterFromPNG(file) {
  const reader = new FileReader()
  
  reader.onload = (e) => {
    const bytes = new Uint8Array(e.target.result)
    
    // 查找 PNG 的 tEXt chunk (通常包含元数据)
    // 或直接搜索 JSON 文本
    const text = new TextDecoder().decode(bytes)
    const jsonMatch = text.match(/\{[\s\S]*\}/)
    
    if (jsonMatch) {
      const charData = JSON.parse(jsonMatch[0])
      return charData
    }
  }
  
  reader.readAsArrayBuffer(file)
}
```

另一个方案是使用现成的库 (如 `png-metadata-reader`)。

---

**Q9: 如何处理 LLM 流式输出的中断（网络中断、用户取消）？**

A: 使用 `AbortController`:

```javascript
const controller = new AbortController()

// 发起请求
const response = await fetch(url, {
  signal: controller.signal,
  body: JSON.stringify(payload)
})

const reader = response.body.getReader()

// 用户点击"停止"按钮时
stopButton.onclick = () => {
  controller.abort()  // 中断请求
  reader.cancel()     // 停止读取
}

// 处理中断
try {
  while (true) {
    const { done, value } = await reader.read()
    if (done) break
    // 处理数据
  }
} catch (error) {
  if (error.name === 'AbortError') {
    console.log('用户中止了请求')
    // 处理中断逻辑
  }
}
```

---

**Q10: 如何优化长聊天记录的加载性能？**

A: 使用虚拟滚动 (Virtual Scrolling):

```javascript
// 使用 vue-virtual-scroller 库
import { DynamicScroller } from 'vue-virtual-scroller'

// 在模板中
<DynamicScroller
  :items="messages"
  :item-size="60"
  key-field="id"
>
  <template v-slot="{ item }">
    <ChatMessage :message="item" />
  </template>
</DynamicScroller>
```

只渲染视口内的消息，大幅减少 DOM 节点和内存占用。

---

### 3.3 部署与发布

**Q11: 如何部署到 GitHub Pages？**

A: 步骤：

```bash
# 1. 在 vite.config.js 中配置路径
export default {
  base: '/my-phone/'  // 替换为你的仓库名
}

# 2. 打包
npm run build

# 3. 上传 dist 文件夹到 GitHub
git add dist/
git commit -m "Deploy v1.0"
git push

# 4. 在 GitHub Settings → Pages → Source 中选择 dist 文件夹

# 5. 访问 https://yourusername.github.io/my-phone/
```

---

**Q12: 怎样把 Web App 装到手机桌面？**

A: PWA 方式：

1. **在 manifest.json 中配置**:
   ```json
   {
     "name": "小手机",
     "short_name": "小手机",
     "start_url": "/my-phone/",
     "display": "standalone"
   }
   ```

2. **在 index.html 中引入**:
   ```html
   <link rel="manifest" href="/manifest.json">
   <link rel="shortcut icon" href="/icons/icon-192.png">
   <meta name="theme-color" content="#ffffff">
   ```

3. **用户操作**:
   - **iPhone**: Safari → 分享 → "添加到主屏"
   - **Android**: Chrome → 菜单 → "安装应用"

---

**Q13: 支持离线访问吗？**

A: 可以，通过 Service Worker:

```javascript
// public/sw.js - Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/styles.css',
        '/app.js'
      ])
    })
  )
})

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
      .catch(() => caches.match('/index.html'))
  )
})
```

用户首次访问后，App 会缓存到本地，后续可以离线访问（需要事先加载过 LLM API）。

---

### 3.4 用户体验

**Q14: 人物OOC了怎么办？**

A: 用户可以调整以下参数：

1. **Temperature 参数** (API页)
   - 降低温度 (0.3-0.7): 模型更一致，更难OOC
   - 提高温度 (1.2+): 模型更创意，可能OOC

2. **更新人物设定** (人物捏捏页)
   - 在"聊天建模"页面，重新编辑人物设定
   - 添加更多细节约束

3. **使用CoT预设** (预设页)
   - 选择更严格的思维链预设
   - 比如："在回复前，必须确认你的性格设定"

4. **添加世界书背景** (世界书页)
   - 提供更多背景故事细节
   - 让模型更了解人物的行为逻辑

8. **切换模型**
   - 某些模型 (如 Claude) 对角色一致性把握更好
   - 某些模型 (如 Deepseek) 更便宜但可能不够精准

---

**Q15: 聊天记录会一直保留吗？占用多少空间？**

A: 是的，聊天记录会无限期保留在 IndexedDB 中。

**空间占用估算**:
- 平均消息大小: ~500字 = ~2KB
- 每天100条消息 = 200KB
- 一年约73MB
- IndexedDB 容量: 通常几GB，足矣

**清理选项** (后续版本):
- 手动删除对话
- 自动清理一定期限外的消息 (如90天前)
- 导出后清空本地

---

## 4. 下一阶段 (v1.1+) 规划

### Phase 2: 用户体验优化 (v1.1)
- [ ] 深色模式
- [ ] 消息搜索功能
- [ ] 人物卡分组
- [ ] 聊天记录按日期分类
- [ ] UI 细节磨光

### Phase 3: 功能扩展 (v1.2)
- [ ] 图片导入 (用户生成的头像)
- [ ] 对话导出为 Markdown/PDF
- [ ] 批量导入多个人物卡
- [ ] 更多世界书条目类型

### Phase 4: 社交功能 (v2.0)
- [ ] 查手机功能
- [ ] 第二页应用 (出行计划、情侣空间等)
- [ ] AI 生成人物卡
- [ ] 社区人物卡分享

---

## 5. 参考资源

### 库和工具
- **Vue 3**: https://vuejs.org/
- **Pinia**: https://pinia.vuejs.org/
- **IndexedDB**: https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API
- **Tailwind CSS**: https://tailwindcss.com/
- **js-tiktoken**: 计算 OpenAI token 数量

### API 提供商
- **Claude (Anthropic)**: https://console.anthropic.com/
- **Deepseek**: https://platform.deepseek.com/
- **Gemini (Google)**: https://ai.google.dev/
- **OpenAI**: https://platform.openai.com/

### 设计参考
- **Apple Human Interface Guidelines**: https://developer.apple.com/design/human-interface-guidelines/
- **Material Design 3**: https://m3.material.io/

---

**文档完成日期**: 2026年5月12日  
**文档维护者**: [待填写]
