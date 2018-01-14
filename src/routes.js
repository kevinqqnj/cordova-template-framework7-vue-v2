export default [
  {
    path: '/',
    component: require('./pages/home.vue')
  },
  {
    path: '/about/',
    component: require('./pages/about.vue')
  },
  {
    path: '/form/',
    component: require('./pages/form.vue')
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: require('./pages/dynamic-route.vue')
  },
  {
    path: '/panel-left/',
    component: require('./pages/panel-left.vue')
  },
  {
    path: '/color-themes/',
    component: require('./pages/color-themes.vue')
  },
]
