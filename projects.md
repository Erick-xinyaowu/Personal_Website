---
layout: doc
title: 项目展示
description: ErickWu 的项目作品集 — 涵盖人工智能、复杂系统架构与数据工程。
---

# 项目矩阵 (Project Matrix)

> 以下工程实践涵盖了从底层算法推导、数据管线搭建到高并发微服务落地的全链路开发闭环。项目排序以**系统复杂度**与**算法深度**为核心依据。

---

## 梯队一：高复杂度系统与算法融合 (Core Systems & AI)

<div class="projects-list">
  <ProjectCard 
    title="中文文本智能校对系统 (国家级大学生创新创业训练计划)" 
    desc="<strong>[Situation]</strong> 针对互联网 UGC 文本错误率高、传统规则校对在复杂语境下泛化能力差的痛点。<br><strong>[Task]</strong> 构建高精度、高鲁棒性的端到端智能校对闭环系统。<br><strong>[Action]</strong> 设计并实现了『规则基线 + MacBERT 语义检测 + Seq2Seq 生成式修复』混合架构。引入对抗训练 (Adversarial Training) 与数据增强处理高噪文本，并独立完成 FastAPI 模型推理接口与 Vue.js 前端高亮反馈系统的部署。<br><strong>[Result]</strong> 突破了传统『检测式校对』的局限，显著提升了多语义场景下的纠错成功率，形成了一套可复用的垂直领域 NLP 落地范式。"
    :tags="['Python', 'PyTorch', 'Transformer', 'NLP', 'FastAPI', 'Vue.js']"
    github="https://github.com/Erick-xinyaowu/Chinese_Text_Proofreading"
    updated="Mar 10, 2024"
  />

  <ProjectCard 
    title="成果创新评审系统 (混合检索架构)" 
    desc="<strong>[Situation]</strong> 面对学术评审中海量非结构化文献检索与质量评估逻辑极度复杂的挑战。<br><strong>[Task]</strong> 设计一套自动化的智能文献流线，降低人工评审的主观偏差与时间成本。<br><strong>[Action]</strong> 基于 Model Context Protocol (MCP) 与 LangGraph，设计并编排了包含检索、总结与对比等多个子智能体（Multi-agent）的混合工作流。实现了对复杂评估状态机的精准接管。<br><strong>[Result]</strong> 实现了高复杂逻辑流的完全自动化调度，单次评审周转效率获得数量级跃升。"
    :tags="['LangGraph', 'Agent', 'MCP', 'Python', 'LLM']"
    github="https://github.com/Erick-xinyaowu/Result_Innovation_Review"
    updated="Feb 20, 2024"
  />

  <ProjectCard 
    title="智能职业规划系统 (全栈微服务架构)" 
    desc="<strong>[Situation]</strong> 传统职业规划方案缺乏数据驱动与个性化的算法精准匹配支撑。<br><strong>[Task]</strong> 从零构建兼顾高吞吐量与算法调度的企业级全栈产品。<br><strong>[Action]</strong> 主导前后端分离架构设计（FastAPI 负责高算力逻辑引擎，Node.js 承接前端高频请求）。独立完成核心匹配算法逻辑的微服务化封装，并通过 Docker 实现全流程容器化部署。<br><strong>[Result]</strong> 成功交付全链路可稳定运行的工程化系统，保证了算法调度层与 Web 渲染层的高效解耦。"
    :tags="['Node.js', 'FastAPI', 'Microservices', 'System Design']"
    github="https://github.com/Erick-xinyaowu/Smart_Career_Planning"
    updated="Oct 20, 2023"
  />
</div>

## 梯队二：数据治理与可视化分析 (Data Engineering & Analytics)

<div class="projects-list">
  <ProjectCard 
    title="一带一路科技与文化互鉴 (大屏可视化系统)" 
    desc="<strong>[Situation]</strong> 跨国多维指标数据量庞大，传统图表难以直观揭示内在的时空演变规律，且大数据量下前端渲染极易卡顿。<br><strong>[Task]</strong> 开发支持实时多维过滤的高性能交互式数据洞察平台。<br><strong>[Action]</strong> 独立开发全套系统。采用 Vue.js 响应式内核搭配 ECharts 底层 API，针对千万级点阵应用 Canvas 局部重绘与数据降采样优化策略。<br><strong>[Result]</strong> 彻底解决渲染掉帧痛点，提供了极具视觉张力与数据洞察深度的产品体验。"
    :tags="['Vue.js', 'ECharts', 'Data Visualization', 'JavaScript']"
    demo="https://erick-xinyaowu.github.io/Visualization_of_BR/"
    updated="Dec 5, 2023"
  />

  <ProjectCard 
    title="CHARLS 宏观社会调查数据治理" 
    desc="<strong>[Situation]</strong> 《中国健康与养老追踪调查》原始数据存在极高比例的缺失值、异构标签与逻辑冲突。<br><strong>[Task]</strong> 构建高可靠度的数据清洗管线，为后续经济学计量模型提供高纯度数据。<br><strong>[Action]</strong> 依托 Python (Pandas/Numpy) 编写自动化异常值探针与清洗脚本，执行深度特征工程与多表级联校验，并使用 Jupyter 输出全程可复现的清洗日志。<br><strong>[Result]</strong> 清洗并输出了支撑顶刊级研究标准的核心离线数据集。"
    :tags="['Pandas', 'Data Cleaning', 'Python', 'Feature Engineering']"
    updated="Nov 12, 2023"
  />

  <ProjectCard 
    title="社交媒体文献计量分析模型" 
    desc="<strong>[Situation]</strong> 在社交媒体学术综述阶段，传统人工文献梳理极度低效，且极易遗漏隐性热点演进路径。<br><strong>[Task]</strong> 设计学术数据挖掘管线，实现由数据驱动的自动化研究范式。<br><strong>[Action]</strong> 建立自动化文本清洗流，运用共词分析算法与 NLP 技术，对数以万计的学术摘要进行多维度语义聚类与热点图谱绘制。<br><strong>[Result]</strong> 极大压缩了人工综述周期，并发现了传统方法难以捕捉的次级关联趋势。"
    :tags="['Python', 'NLP', 'Data Analysis']"
    github="https://github.com/Erick-xinyaowu/Bibliometric_of_SocialMedia"
    updated="Jan 15, 2024"
  />
</div>

## 梯队三：工程工具与自动化脚本 (Engineering Tools & DevOps)

<div class="projects-list">
  <ProjectCard 
    title="媒体跨平台高并发采集器" 
    desc="<strong>[Situation]</strong> 不同社交平台频繁变动的反爬策略导致业务数据断供。<br><strong>[Task]</strong> 开发具备极强鲁棒性的跨平台数据抓取与结构化工具流。<br><strong>[Action]</strong> 突破多层 Cookie 校验与风控拦截，设计分布式任务队列与自动重试机制，实现从原始 DOM 抓取到结构化 JSON/DB 落库的全自动链路。<br><strong>[Result]</strong> 每日稳定保障数以万计的多模态数据入库，系统可用性 > 99%。"
    :tags="['Python', 'Crawler', 'Automation']"
    github="https://github.com/Erick-xinyaowu/MediaCrawler_personalized"
    updated="Feb 28, 2024"
  />
  
  <ProjectCard 
    title="小米 MIMO 万亿 Token 创作生态设计" 
    desc="<strong>[Situation]</strong> 大模型内容生成生态缺乏有效的价值度量与激励闭环。<br><strong>[Task]</strong> 参与设计面向海量 AI 生成内容的 Token 化创作激励落地方案。<br><strong>[Action]</strong> 从信息系统视角梳理业务状态机，协助确立了高并发场景下生成物质量评估与激励下发的技术路线口径。<br><strong>[Result]</strong> 为后续大模型的端侧生态落地提供了扎实的逻辑框架支撑。"
    :tags="['System Architecture', 'Tokenomics', 'Product Design']"
    updated="Apr 10, 2024"
  />
</div>

<style>
.projects-list {
  display: flex;
  flex-direction: column;
  gap: 0;
  margin: 1.5rem 0 3rem;
  border-top: 1px solid var(--vp-c-divider);
}
</style>
