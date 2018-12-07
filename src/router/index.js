import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/views/login'
import pages from '@/views/pages/pages'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'pages',
      component: pages,
      children: [
        {
          path: '/pages',
          name: 'pages',
          component: resolve => require([ '@/views/pages/pages' ], resolve)
        }
      ]
    }
  ]
})
