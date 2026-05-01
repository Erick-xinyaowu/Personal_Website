// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'

import SkillBadge from './components/SkillBadge.vue'
import Timeline from './components/Timeline.vue'
import TimelineItem from './components/TimelineItem.vue'
import ProjectCard from './components/ProjectCard.vue'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app }) {
    app.component('SkillBadge', SkillBadge)
    app.component('Timeline', Timeline)
    app.component('TimelineItem', TimelineItem)
    app.component('ProjectCard', ProjectCard)
  }
}
