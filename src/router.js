import { createRouter, createWebHashHistory } from 'vue-router'

import BeerGenerator from './components/BeerGenerator.vue'
import BeerSelection from './components/BeerSelection.vue'
import CompanyProfile from './components/CompanyProfile.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { component: BeerGenerator, path: '/BeerGenerator' },
    { component: BeerSelection, path: '/' },
    { component: CompanyProfile, path: '/CompanyProfile' }
  ]
})
