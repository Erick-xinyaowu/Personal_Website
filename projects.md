---
layout: doc
title: 项目展示
description: ErickWu 的项目作品集 — 数据可视化、信息系统分析、全栈开发
---

# 项目展示

以下是我在学习和研究过程中完成的部分项目。

---

## 精选项目

<div class="projects-list">
  <ProjectCard 
    title="信息系统分析与设计" 
    desc="主导全栈架构设计。采用 Python 重构核心数据流，解耦业务模块以应对高并发场景，实现查询响应效率提升 30%。"
    :tags="['Python', 'System Design']"
    github="https://github.com/Erick-xinyaowu/Information_System_Analysis"
    updated="Oct 20, 2023"
  />

  <ProjectCard 
    title="一带一路科技与文化互鉴" 
    desc="独立开发可视化大屏系统。结合 Vue.js 与 ECharts 处理跨国海量指标数据，解决多维数据过滤与渲染卡顿痛点，为数据调研提供直观洞察。"
    :tags="['Vue.js', 'ECharts', 'JavaScript']"
    github="https://github.com/Erick-xinyaowu/Visualization_of_BR"
    demo="https://erick-xinyaowu.github.io/Visualization_of_BR/"
    updated="Dec 5, 2023"
  />

  <ProjectCard 
    title="社交媒体文献计量分析" 
    desc="负责学术数据挖掘流线。利用 Python 建立文献自动化清洗与共词分析模型，输出研究热点演进图谱，极大缩短人工综述周期。"
    :tags="['Python', 'Data Analysis', 'HTML']"
    github="https://github.com/Erick-xinyaowu/Bibliometric_of_SocialMedia"
    updated="Jan 15, 2024"
  />
</div>

## 其他项目

<div class="projects-list">
  <ProjectCard 
    title="宠物食品数据分析" 
    desc="基于千万级离线数据集构建分析流。利用 Pandas/Jupyter 执行深度清洗与特征工程，输出支撑商业决策的核心可视化洞察报告。"
    :tags="['Jupyter Notebook', 'Python', 'Pandas']"
    github="https://github.com/Erick-xinyaowu/Data_Analysis_of_PetFood"
    updated="Nov 12, 2023"
  />

  <ProjectCard 
    title="媒体爬虫定制工具" 
    desc="定制开发跨平台高并发采集器。突破多层反爬策略，实现数据采集与结构化清洗全链路，保障每日数据入库量稳定。"
    :tags="['Python', 'Crawler']"
    github="https://github.com/Erick-xinyaowu/MediaCrawler_personalized"
    updated="Feb 28, 2024"
  />

  <ProjectCard 
    title="Java 系统开发" 
    desc="Java 语言系统开发课程项目，涵盖面向对象设计与系统架构。"
    :tags="['Java', 'OOP']"
    github="https://github.com/Erick-xinyaowu/Java_System"
    updated="May 10, 2023"
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
