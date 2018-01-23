import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import UnreadNews from '@/components/unreadNews/unreadNews'
import Newbie from '@/components/newbie/newbie'
import API from '@/components/API/API'
import About from '@/components/about/about'
import Settings from '@/components/settings/settings'
import Login from '@/components/login/login'
import themeDetails from '@/components/home/themeDetails'
import publishTheme from '@/components/publishTheme/publishTheme'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/topic/create',
      name: 'publishTheme',
      component: publishTheme
    },
    {
      path: '/topic/:id',
      name: 'themeDetails',
      component: themeDetails
    },
    {
      path: '/unreadNews',
      name: 'UnreadNews',
      component: UnreadNews
    },
    {
      path: '/newbie',
      name: 'Newbie',
      component: Newbie
    },
    {
      path: '/API',
      name: 'API',
      component: API
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
