import { createRouter, createWebHashHistory } from "vue-router";


const routes = [
  { path: '/', component: () => import('./pages/Login.vue') },
  { path: '/home', component: () => import('./pages/Home.vue') },
  { path: '/details', component: () => import('./pages/details.vue') },
  { path: '/new', component: () => import('./pages/newIssue.vue')}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/') { 
    console.log("//////////");
  }
  next()
})

export default router


