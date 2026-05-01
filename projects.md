---
layout: doc
title: 项目展示
description: ErickWu 的项目作品集 — 数据可视化、信息系统分析、全栈开发
---

# 项目展示

以下是我在学习和研究过程中完成的部分项目。

---

## 精选项目

<div class="projects-grid">
  <ProjectCard 
    title="信息系统分析与设计" 
    desc="基于 Python 的信息系统分析与设计综合项目，涵盖需求分析、系统建模与实现。"
    :tags="['Python', 'System Design']"
    github="https://github.com/Erick-xinyaowu/Information_System_Analysis"
  />

  <ProjectCard 
    title="一带一路科技与文化互鉴" 
    desc="通过丰富的可视化图表展示一带一路沿线国家的科技与文化交流数据，交互式 Web 应用。"
    :tags="['Vue.js', 'ECharts', 'JavaScript']"
    github="https://github.com/Erick-xinyaowu/Visualization_of_BR"
    demo="https://erick-xinyaowu.github.io/Visualization_of_BR/"
  />

  <ProjectCard 
    title="社交媒体文献计量分析" 
    desc="对社交媒体领域的学术文献进行计量分析，探索研究热点与发展趋势。"
    :tags="['Python', '数据分析', 'HTML']"
    github="https://github.com/Erick-xinyaowu/Bibliometric_of_SocialMedia"
  />
</div>

## 其他项目

<div class="projects-grid">
  <ProjectCard 
    title="宠物食品数据分析" 
    desc="数据驱动的市场分析项目，使用 Jupyter Notebook 进行数据清洗、可视化与洞察提取。"
    :tags="['Python', 'Jupyter', 'Pandas']"
    github="https://github.com/Erick-xinyaowu/Data_Analysis_of_PetFood"
  />

  <ProjectCard 
    title="媒体爬虫定制工具" 
    desc="基于开源项目定制的社交媒体数据采集工具，支持多平台数据抓取。"
    :tags="['Python', 'Crawler']"
    github="https://github.com/Erick-xinyaowu/MediaCrawler_personalized"
  />

  <ProjectCard 
    title="Java 系统开发" 
    desc="Java 语言系统开发课程项目，涵盖面向对象设计与系统架构。"
    :tags="['Java', 'OOP']"
    github="https://github.com/Erick-xinyaowu/Java_System"
  />
</div>

<style>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0 3rem;
}
</style>
