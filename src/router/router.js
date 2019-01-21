import Vue from 'vue'
import Router from 'vue-router'
import home from '../views/home.vue'
import One from '../views/One.vue'
import login from '../views/login.vue'


Vue.use(Router)

export default new Router({
  routes: [
        {
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '/a/:id',
            name: 'One',
            component: One
        },
        {
            path: '/login',
            name: 'login',
            component: login
        }
    ],

})