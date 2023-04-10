import { createRouter, createWebHashHistory } from 'vue-router'

import BeerGenerator from './components/BeerGenerator.vue'
import BeerSelection from './components/BeerSelection.vue'
import CompanyProfile from './components/CompanyProfile.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { component: BeerSelection, path: '/' },
    { component: BeerGenerator, path: '/BeerGenerator' },
    { component: CompanyProfile, path: '/CompanyProfile' }
  ]
})
