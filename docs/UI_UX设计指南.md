# 小手机 - UI/UX 设计指南

**版本**: v1.0  
**最后更新**: 2026年5月12日

---

## 1. 设计哲学

### 核心价值
- **简洁为王**: Apple风格，留白充足，不拥挤
- **沉浸体验**: 用户专注于聊天互动，UI不分散注意力
- **可透明玻璃态**: 去掉过多装饰，用透明、毛玻璃、渐变实现高级感
- **深色模式友好**: 支持深色模式，减少眼睛疲劳

### 设计原则
1. **可用性第一**: 功能清晰易用，减少学习成本
2. **视觉层级清晰**: 重要内容突出，次要内容弱化
3. **响应式优先**: 手机-平板-桌面都能流畅使用
4. **统一的设计语言**: 所有页面保持一致的视觉风格

---

## 2. 视觉设计规范

### 2.1 色彩系统

#### 亮色主题 (Light Mode)

| 用途 | 颜色 | Hex | RGB |
|------|------|-----|-----|
| 背景 | 白色 | #FFFFFF | 255, 255, 255 |
| 次级背景 | 浅灰 | #F5F5F7 | 245, 245, 247 |
| 卡片背景 | 细玻璃 | rgba(255,255,255,0.5) | - |
| 分割线 | 浅灰 | #E8E8EB | 232, 232, 235 |
| 主文本 | 深灰 | #1D1D1F | 29, 29, 31 |
| 次文本 | 中灰 | #86868B | 134, 134, 139 |
| 辅助文本 | 浅灰 | #A1A1A6 | 161, 161, 166 |
| 主色调 (互动) | **蓝色** | #0071E3 | 0, 113, 227 |
| 警告色 | **红色** | #FF3B30 | 255, 59, 48 |
| 成功色 | **绿色** | #34C759 | 52, 199, 89 |

#### 深色主题 (Dark Mode)

| 用途 | 颜色 | Hex | RGB |
|------|------|-----|-----|
| 背景 | 深黑 | #000000 | 0, 0, 0 |
| 次级背景 | 很深灰 | #1D1D1F | 29, 29, 31 |
| 卡片背景 | 细玻璃 | rgba(29,29,31,0.7) | - |
| 分割线 | 深灰 | #424245 | 66, 66, 69 |
| 主文本 | 白色 | #F5F5F7 | 245, 245, 247 |
| 次文本 | 浅灰 | #86868B | 134, 134, 139 |
| 辅助文本 | 中灰 | #63636A | 99, 99, 106 |
| 主色调 (互动) | **蓝色** | #0A84FF | 10, 132, 255 |
| 警告色 | **红色** | #FF453A | 255, 69, 58 |
| 成功色 | **绿色** | #30B0C0 | 48, 176, 192 |

### 2.2 字体系统

```css
/* 系统字体栈 (Apple风格) */
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif;

/* 字体大小和行高 */
:root {
  /* 标题 */
  --text-h1: 28px;      /* 行高: 32px */
  --text-h2: 22px;      /* 行高: 28px */
  --text-h3: 18px;      /* 行高: 24px */
  
  /* 正文 */
  --text-body-lg: 16px;  /* 行高: 24px */
  --text-body: 15px;     /* 行高: 22px */
  --text-body-sm: 13px;  /* 行高: 18px */
  
  /* 标签/辅助 */
  --text-label: 12px;    /* 行高: 16px */
  --text-caption: 11px;  /* 行高: 14px */
}
```

### 2.3 间距系统

```css
/* 间距单位 (8px 基数) */
:root {
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 12px;
  --spacing-lg: 16px;
  --spacing-xl: 24px;
  --spacing-2xl: 32px;
  --spacing-3xl: 48px;
}
```

### 2.4 圆角和阴影

```css
/* 圆角半径 */
:root {
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-full: 9999px;
}

/* 阴影 (毛玻璃效果) */
.glass {
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.5);  /* 亮色 */
  /* 深色: rgba(29, 29, 31, 0.7) */
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

/* 卡片阴影 */
.card {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
              0 1px 2px rgba(0, 0, 0, 0.24);
}

/* 浮动元素阴影 */
.elevated {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}
```

---

## 3. 核心页面设计

### 3.1 首页布局 (HomePage.vue)

```
┌─────────────────────────────────┐
│  📅 2026年5月12日               │ ← 日期模块 (左上)
│                                 │
├─────────────────────────────────┤
│                                 │
│  [空白区域，暗示滚动]            │
│                                 │
│  核心应用网格 (3x2 或 2x3)      │
│  ┌──────────┬──────────┐        │
│  │   API    │  人物    │        │
│  │         │ 捏捏      │        │
│  ├──────────┼──────────┤        │
│  │ 世界书  │  预设    │        │
│  │         │         │        │
│  ├──────────┼──────────┤        │
│  │ 查手机  │ 聊聊     │        │
│  │         │ (最大)   │        │
│  └──────────┴──────────┘        │
│                                 │
├─────────────────────────────────┤
│ [API] [人物] [世界] [预设] [查手] [聊聊] │ ← 底部导航栏
└─────────────────────────────────┘
```

**设计细节**:
- 日期模块: 静态文本，简洁风格，可选颜色 (#86868B 次文本色)
- App 卡片: 
  - 尺寸: 约 100px × 100px (手机上)
  - 背景: 毛玻璃效果 (glass class)
  - 圆角: 12px 或 16px
  - 图标: SF Symbols 或 Emojis (简洁)
  - 标签: 单行文字，居中，14px 字体

### 3.2 聊天页 (ChatView.vue)

```
┌─────────────────────────────────┐
│ < [人物名]                      │ ← Header (返回 + 人物名)
├─────────────────────────────────┤
│                                 │
│  [消息气泡区域 - 可滚动]        │
│                                 │
│  👤 AI:                         │
│  ┌─────────────────────────┐   │
│  │ 我最近很开心呢...     │   │ ← AI消息 (左侧, 浅灰背景)
│  └─────────────────────────┘   │
│  14:30                          │ ← 时间戳 (小字)
│                                 │
│                                 │ (间距)
│                                 │
│                      👤 You:    │
│         ┌──────────────────┐   │
│         │ 为什么呢？     │   │ ← 用户消息 (右侧, 蓝色背景)
│         └──────────────────┘   │
│                          14:31  │
│                                 │
│  [更多消息...]                  │
│                                 │
├─────────────────────────────────┤
│ ┌─────────────────────────────┐ │
│ │ 输入你的消息...            │ │ ← 输入框 (圆角，毛玻璃)
│ └─────────────────────────────┘ │
│                            [↑]   │ ← 发送按钮
└─────────────────────────────────┘
```

**消息气泡设计**:

```css
/* AI消息 (左侧) */
.message-assistant {
  background-color: var(--color-secondary-bg);  /* #F5F5F7 / #1D1D1F */
  border-radius: 20px 20px 20px 4px;
  padding: 12px 16px;
  max-width: 80%;
  margin-left: 0;
}

/* 用户消息 (右侧) */
.message-user {
  background-color: var(--color-primary);       /* #0071E3 */
  color: white;
  border-radius: 20px 20px 4px 20px;
  padding: 12px 16px;
  max-width: 80%;
  margin-left: auto;
}

/* 时间戳 */
.message-time {
  font-size: var(--text-label);
  color: var(--color-tertiary-text);
  margin-top: 4px;
}
```

**输入框设计**:

```css
.message-input {
  display: flex;
  gap: var(--spacing-sm);
  padding: var(--spacing-lg);
  align-items: flex-end;
}

.input-field {
  flex: 1;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(0, 0, 0, 0.08);  /* 浅灰分割线 */
  padding: 10px 12px;
  font-size: var(--text-body);
  background: rgba(255, 255, 255, 0.5);  /* 毛玻璃 */
  backdrop-filter: blur(10px);
  
  &:focus {
    border-color: var(--color-primary);
    outline: none;
  }
}

.send-button {
  width: 36px;
  height: 36px;
  border-radius: var(--radius-full);
  background: var(--color-primary);
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    opacity: 0.9;
  }
  
  &:active {
    transform: scale(0.95);
  }
}
```

### 3.3 人物卡列表页 (CharacterView.vue)

```
┌─────────────────────────────────┐
│ 人物捏捏                   [+]   │ ← Header + 新建按钮
├─────────────────────────────────┤
│                                 │
│ ┌─────────────────────────────┐ │
│ │  👤 李雨欣                  │ │
│ │  温柔体贴的女朋友🌸         │ │
│ │  最后更新: 2 天前           │ │
│ └─────────────────────────────┘ │
│                                 │
│ ┌─────────────────────────────┐ │
│ │  👤 小狐狸                  │ │
│ │  调皮可爱的精灵🦊           │ │
│ │  最后更新: 1 周前           │ │
│ └─────────────────────────────┘ │
│                                 │
│ [更多人物卡...]                 │
│                                 │
├─────────────────────────────────┤
│ [导入人物卡]                     │
└─────────────────────────────────┘
```

**人物卡片设计**:

```css
.character-card {
  background: rgba(255, 255, 255, 0.5);  /* 毛玻璃 */
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-md);
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.7);
    box-shadow: var(--shadow-md);
  }
  
  &:active {
    transform: scale(0.98);
  }
}

.character-name {
  font-size: var(--text-h3);
  font-weight: 600;
  color: var(--color-primary-text);
  margin-bottom: var(--spacing-sm);
}

.character-desc {
  font-size: var(--text-body-sm);
  color: var(--color-secondary-text);
}

.character-time {
  font-size: var(--text-caption);
  color: var(--color-tertiary-text);
  margin-top: var(--spacing-md);
}
```

### 3.4 API 配置页 (APIView.vue)

```
┌─────────────────────────────────┐
│ API 配置                        │
├─────────────────────────────────┤
│                                 │
│ 服务商                          │
│ ┌─────────────────────────────┐ │
│ │ 选择服务商 ▾                │ │
│ │ 当前: Claude                │ │
│ └─────────────────────────────┘ │
│                                 │
│ API 地址                        │
│ ┌─────────────────────────────┐ │
│ │ https://api.anthropic.com   │ │
│ └─────────────────────────────┘ │
│                                 │
│ API 密钥                        │
│ ┌─────────────────────────────┐ │
│ │ sk-ant-***••••••••••        │ │ ← 密钥隐藏
│ └─────────────────────────────┘ │
│                                 │
│ 模型选择                        │
│ ┌─────────────────────────────┐ │
│ │ claude-3-5-sonnet ▾         │ │
│ └─────────────────────────────┘ │
│                                 │
│ ─ 高级参数 ─                    │
│ Temperature: [●──────] 1.0      │
│ 时间感知: [On]                  │
│ 流式输出: [On]                  │
│                                 │
│ [测试连接] [保存配置]            │
│                                 │
├─────────────────────────────────┤
│ 备份与恢复                      │ ← 导出/导入
│ [导出全部数据] [导入数据]        │
└─────────────────────────────────┘
```

**表单设计**:

```css
.form-group {
  margin-bottom: var(--spacing-xl);
}

.form-label {
  display: block;
  font-size: var(--text-label);
  font-weight: 600;
  color: var(--color-primary-text);
  margin-bottom: var(--spacing-sm);
}

.form-input {
  width: 100%;
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
  padding: 10px 12px;
  font-size: var(--text-body);
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  
  &:focus {
    border-color: var(--color-primary);
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 113, 227, 0.1);
  }
}

.form-select {
  /* 同 .form-input */
  appearance: none;
  background-image: url("data:image/svg+xml,...");  /* 自定义下拉箭头 */
  background-repeat: no-repeat;
  background-position: right 10px center;
  padding-right: 30px;
}

.slider {
  width: 100%;
  height: 4px;
  border-radius: var(--radius-full);
  background: var(--color-secondary-bg);
  
  &::-webkit-slider-thumb {
    width: 20px;
    height: 20px;
    border-radius: var(--radius-full);
    background: var(--color-primary);
    cursor: pointer;
  }
}
```

### 3.5 世界书页 (WorldbookView.vue)

```
┌─────────────────────────────────┐
│ 世界书                     [+]   │
├─────────────────────────────────┤
│                                 │
│ 🌍 世界设定                     │
│ ┌─────────────────────────────┐ │
│ │ [学校背景]                  │ │
│ │ 李雨欣就读于...            │ │
│ │ 优先级: ★★★★☆             │ │
│ └─────────────────────────────┘ │
│                                 │
│ ┌─────────────────────────────┐ │
│ │ [家庭情况]                  │ │
│ │ 她有一个妹妹...            │ │
│ │ 优先级: ★★★☆☆             │ │
│ └─────────────────────────────┘ │
│                                 │
│ 👥 人物关系                     │
│ ┌─────────────────────────────┐ │
│ │ [闺蜜]                      │ │
│ │ 和小狐狸是好朋友...         │ │
│ │ 优先级: ★★☆☆☆             │ │
│ └─────────────────────────────┘ │
│                                 │
│ [更多条目...]                   │
│                                 │
└─────────────────────────────────┘
```

---

## 4. 组件设计

### 4.1 按钮组件

```css
/* 主按钮 (Primary) */
.btn-primary {
  background: var(--color-primary);
  color: white;
  border: none;
  border-radius: var(--radius-md);
  padding: 10px 20px;
  font-size: var(--text-body);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    opacity: 0.9;
    box-shadow: 0 4px 12px rgba(0, 113, 227, 0.3);
  }
  
  &:active {
    transform: scale(0.98);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}

/* 次级按钮 (Secondary) */
.btn-secondary {
  background: var(--color-secondary-bg);
  color: var(--color-primary-text);
  border: 1px solid var(--color-border);
  /* 其他样式同主按钮 */
}

/* 文字按钮 (Text) */
.btn-text {
  background: transparent;
  color: var(--color-primary);
  border: none;
  padding: 8px 12px;
  font-weight: 600;
  
  &:hover {
    background: rgba(0, 113, 227, 0.1);
  }
}
```

### 4.2 切换开关

```css
.toggle {
  display: inline-block;
  width: 48px;
  height: 28px;
  background: #CED5E0;  /* 灰色 */
  border-radius: var(--radius-full);
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &.active {
    background: var(--color-primary);  /* 蓝色 */
    
    .toggle-thumb {
      transform: translateX(20px);
    }
  }
}

.toggle-thumb {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 24px;
  height: 24px;
  background: white;
  border-radius: var(--radius-full);
  transition: transform 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
```

### 4.3 底部导航栏

```css
.nav-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-top: 1px solid var(--color-border);
}

.nav-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &.active {
    color: var(--color-primary);
    font-weight: 600;
    
    .nav-icon {
      transform: scale(1.1);
    }
  }
  
  &:hover {
    background: rgba(0, 0, 0, 0.03);
  }
}

.nav-icon {
  font-size: 24px;
}

.nav-label {
  font-size: var(--text-caption);
  margin-top: 2px;
}
```

---

## 5. 响应式设计

### 5.1 断点设置

```css
/* 移动设备 (默认) */
:root {
  --breakpoint-sm: 640px;   /* 小平板 */
  --breakpoint-md: 768px;   /* 平板 */
  --breakpoint-lg: 1024px;  /* 桌面 */
  --breakpoint-xl: 1280px;  /* 大桌面 */
}

/* 例子: 父容器根据宽度调整布局 */
@media (min-width: 640px) {
  .app-grid {
    grid-template-columns: repeat(3, 1fr);  /* 手机: 2列；平板+: 3列 */
  }
}

@media (min-width: 1024px) {
  .chat-message {
    max-width: 60%;  /* 手机: 80% → 桌面: 60% */
  }
}
```

### 5.2 手机优化

- **顶部安全区**: `padding-top: max(12px, env(safe-area-inset-top));`
- **底部安全区**: `padding-bottom: max(12px, env(safe-area-inset-bottom));`
- **左右安全区**: `padding-left: env(safe-area-inset-left);` / `padding-right: env(safe-area-inset-right);`

### 5.3 平板 & 桌面优化

- 增加面板宽度限制 (max-width: 600px for chat)
- 左右布局: 人物列表 + 聊天区域 (两列)
- 增强交互反馈 (hover效果)

---

## 6. 动画指南

### 6.1 过渡效果

```css
/* 标准过渡 */
:root {
  --transition-fast: 150ms ease-in-out;
  --transition-base: 200ms ease-in-out;
  --transition-slow: 300ms ease-in-out;
}

/* 页面切换 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity var(--transition-base);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 消息出现 */
.message-enter-active {
  animation: slideUp var(--transition-base);
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### 6.2 微交互

```css
/* 按钮按下时缩放 */
.btn:active {
  transform: scale(0.95);
  transition: all 100ms ease-in;
}

/* 卡片悬停 */
.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  transition: all 200ms ease-out;
}

/* 加载动画 */
.loading {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```

---

## 7. Accessibility (无障碍设计)

### 7.1 键盘导航
- 所有交互元素支持 Tab 键导航
- 明确的 focus 样式 (如 `outline` 或 `box-shadow`)

### 7.2 颜色对比
- 文字与背景的对比度 ≥ 4.5:1 (正常文本)
- 大文本 (18px+) 的对比度 ≥ 3:1

### 7.3 标签和提示
- 所有 input 都有关联的 `<label>`
- 使用 `aria-label` 或 `aria-describedby`

```html
<input 
  id="apiKey" 
  type="password" 
  aria-label="API密钥输入框"
>

<button aria-label="发送消息">
  ↑
</button>
```

---

## 8. 深色模式实现

### 8.1 CSS 变量方案

```css
:root {
  --color-bg: #FFFFFF;
  --color-secondary-bg: #F5F5F7;
  --color-primary-text: #1D1D1F;
  /* ... 其他亮色变量 */
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-bg: #000000;
    --color-secondary-bg: #1D1D1F;
    --color-primary-text: #F5F5F7;
    /* ... 其他深色变量 */
  }
}

/* 使用 */
body {
  background: var(--color-bg);
  color: var(--color-primary-text);
  transition: all 0.3s ease;
}
```

### 8.2 手动切换

```vue
<script>
export default {
  data() {
    return {
      isDarkMode: false
    }
  },
  methods: {
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode
      document.documentElement.dataset.theme = 
        this.isDarkMode ? 'dark' : 'light'
      localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light')
    }
  },
  mounted() {
    const saved = localStorage.getItem('theme')
    this.isDarkMode = saved === 'dark'
    document.documentElement.dataset.theme = 
      this.isDarkMode ? 'dark' : 'light'
  }
}
</script>

<template>
  <button @click="toggleTheme">
    {{ isDarkMode ? '☀️' : '🌙' }}
  </button>
</template>
```

---

## 9. 设计交接清单

- [ ] 完整的设计系统文档
- [ ] Figma / Sketch 原型文件
- [ ] 所有组件的高保真设计稿
- [ ] Dark Mode 设计稿
- [ ] 响应式布局稿 (手机/平板/桌面)
- [ ] 交互动画演示视频
- [ ] 色彩和字体的 CSS 变量表
- [ ] 开发者快速参考卡

---

## 10. 参考资源

- **Apple Design System**: https://developer.apple.com/design/
- **Material Design 3**: https://m3.material.io/
- **Figma Community**: 搜索 "iOS Design System"
- **Tailwind CSS Components**: https://tailwindui.com/

---

**文档完成日期**: 2026年5月12日  
**设计贡献者**: [待填写]
