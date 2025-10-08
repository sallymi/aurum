# Aurum Education - Next.js 13 项目

基于 Next.js 13 构建的 Aurum Education 学术辅导网站。

## 技术栈

- Next.js 13 (App Router)
- React 18
- TypeScript
- Tailwind CSS

## 开发环境设置

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

## 构建与部署

```bash
# 构建生产版本
npm run build

# 本地预览生产版本
npm run start

# Vercel 部署
vercel

# 或直接部署到 Vercel
vercel --prod
```

## 项目结构

- `/app` - Next.js 13 App Router 页面
- `/components` - React 组件
- `/components/icons` - SVG 图标组件
- `/lib` - 工具函数和设计令牌
- `/public` - 静态资源

## 设计令牌

设计令牌存储在 `lib/design.ts` 中，包含颜色、字体、阴影等设计变量。

## 环境变量
# Mailchimp配置获取方法：
#    - API Key: Mailchimp账户 > Account > Extras > API keys
#    - Audience ID: Audience > Settings > Audience name and defaults
#    - Server Prefix: API Key中的最后部分（如：abc123def456-us1中的us1）
# 如果使用Gmail，需要启用"两步验证"并生成"应用密码"
# 1. SMTP_PASS应该使用应用密码，而不是普通密码

## 部署

该项目已配置为可以直接部署到 Vercel 平台：

1. 将代码推送到 GitHub 仓库
2. 在 Vercel 中导入该仓库
3. Vercel 会自动检测 Next.js 项目并应用最佳配置
4. 点击部署即可