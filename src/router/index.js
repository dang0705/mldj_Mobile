import Vue from 'vue'
import Router from 'vue-router'
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
          path: '/activities',
          name: 'activities',
          component: resolve => require([ '@/views/pages/activities/activities' ], resolve),

        },
        // 活动详情
        {
          path: '/details/:id',
          name: 'details',
          component: resolve => require([ '@/views/pages/activities/component/activityDetails' ], resolve)
        },
        {
          path: '/message',
          name: 'message',
          component: resolve => require([ '@/views/pages/message/message' ], resolve)
        },
        {
          path: '/my',
          name: 'my',
          component: resolve => require([ '@/views/pages/my/my' ], resolve)
        },
      ]
    }
  ]
})
