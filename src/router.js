import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from './views/Home.vue'
import SearchResult from './views/SearchResult.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { component: HomeView, path: '/' },
    { component: SearchResult, path: '/:search' }
  ]
})
