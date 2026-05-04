---
layout: doc
title: 关于我
description: 具备人工智能算法与全栈开发的系统级工程能力
---

# 关于我

<div class="about-hero">
  <img src="/photo.png" alt="ErickWu" class="about-avatar" />
</div>

## 核心定位

> **“具备人工智能算法与全栈开发的系统级工程能力，能够独立完成从海量数据挖掘、多智能体（Multi-agent）编排到复杂 Web 系统落地的全链路闭环。”**

我是 **武汉大学** 信息管理与信息系统专业本科生，同时修读计算机科学与技术双学位。我对解决复杂的工程与算法挑战充满热情，致力于将前沿的 AI 模型与全栈架构深度结合。

## 技术能力矩阵 (Technical Stack)

<div class="tech-matrix">
  <div class="matrix-item">
    <h3>🤖 人工智能与算法工程</h3>
    <div class="tags">
      <SkillBadge type="brand">Multi-agent</SkillBadge>
      <SkillBadge type="brand">LangGraph</SkillBadge>
      <SkillBadge>Transformer</SkillBadge>
      <SkillBadge>NLP</SkillBadge>
      <SkillBadge>经典机器学习</SkillBadge>
    </div>
    <p><strong>实践验证</strong>：深入研究 OpenClaw 与 Model Context Protocol (MCP)；熟练应用 LangGraph 编排复杂的多智能体工作流；具备从底层实现 HMM、AdaBoost、K-means 等经典算法的数学与工程落地能力。</p>
  </div>

  <div class="matrix-item">
    <h3>⚙️ 系统架构与后端开发</h3>
    <div class="tags">
      <SkillBadge type="brand">Python</SkillBadge>
      <SkillBadge type="brand">FastAPI</SkillBadge>
      <SkillBadge>Node.js</SkillBadge>
      <SkillBadge>C++ / Java</SkillBadge>
    </div>
    <p><strong>实践验证</strong>：在“智能职业规划系统”中独立设计并完成前后端分离架构落地；精通 Python 高并发数据流处理及复杂微服务解耦；具备扎实的底层系统级编程基础。</p>
  </div>

  <div class="matrix-item">
    <h3>💾 数据工程与基础中间件</h3>
    <div class="tags">
      <SkillBadge type="brand">MySQL</SkillBadge>
      <SkillBadge>Docker</SkillBadge>
      <SkillBadge>Pandas</SkillBadge>
    </div>
    <p><strong>实践验证</strong>：主导 CHARLS（中国健康与养老追踪调查）千万级社会调查数据的清洗与特征工程流线；熟练运用 Docker 容器化技术隔离部署生产级算法环境。</p>
  </div>

  <div class="matrix-item">
    <h3>🎨 前端交互与信息可视化</h3>
    <div class="tags">
      <SkillBadge type="brand">Vue.js</SkillBadge>
      <SkillBadge>Tableau</SkillBadge>
      <SkillBadge>ECharts</SkillBadge>
    </div>
    <p><strong>实践验证</strong>：擅长将高度抽象的算法输出转化为可交互的可视化大屏（Dashboard）；主导跨平台应用 UI/UX 融合，深度探索数据逻辑与现代交互美学的平衡。</p>
  </div>
</div>

## 学术与工程素养 (Engineering Qualities)

- **系统设计能力 (System Design)**：在“成果创新评审系统”中，通过 LangGraph 设计混合检索架构，展现了处理海量非结构化数据与复杂逻辑流状态调度的架构思维。
- **算法与理论底蕴 (Algorithm Rigor)**：在“中文智能校对系统”研发中，深度融合了规则驱动与 Transformer 生成式模型（Seq2Seq），证明了扎实的理论推导与转化能力。
- **工程规范与鲁棒性意识 (Engineering Best Practices)**：引入对抗训练 (Adversarial Training) 与数据增强处理高噪文本；极度推崇模块化代码规范，熟练运用 Git / Docker / Overleaf 工业级工具链，保障代码极高的可维护性。

## 教育经历

<Timeline>
  <TimelineItem date="2023 - 至今" title="武汉大学 — 本科">
    <strong>主修</strong>：信息管理与信息系统<br>
    <strong>双学位</strong>：计算机科学与技术
  </TimelineItem>
</Timeline>

## 在线链接

- Email: [wuerick2023@gmail.com](mailto:wuerick2023@gmail.com)
- GitHub: [Erick-xinyaowu](https://github.com/Erick-xinyaowu)
- ORCID: [0009-0004-1609-538X](https://orcid.org/0009-0004-1609-538X)

<style>
.about-hero {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}
.about-avatar {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid var(--vp-c-brand-1);
  box-shadow: 0 8px 32px rgba(99, 102, 241, 0.2);
}

.tech-matrix {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.matrix-item {
  background: var(--vp-c-bg-soft);
  padding: 1.5rem;
  border-radius: var(--ew-radius-lg);
  border: 1px solid var(--vp-c-divider);
  transition: transform 0.3s var(--ew-spring-bouncy);
}

.matrix-item:hover {
  transform: translateY(-4px);
  border-color: var(--vp-c-brand-1);
}

.matrix-item h3 {
  margin-top: 0 !important;
  font-size: 1.1rem;
  border-bottom: none !important;
  padding-bottom: 0 !important;
  color: var(--vp-c-text-1);
}

.matrix-item .tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0;
}

.matrix-item p {
  margin: 0;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  line-height: 1.6;
}

.matrix-item strong {
  color: var(--vp-c-text-1);
}
</style>
