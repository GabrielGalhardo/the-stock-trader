import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home'
import Portfolio from '../components/portfolio/Portfolio'
import Acoes from '../components/stocks/Acoes.vue'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/portfolio', component: Portfolio },
        { path: '/acoes', component: Acoes },
    ]
})

export default router