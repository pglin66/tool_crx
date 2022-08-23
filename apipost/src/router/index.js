/*
 * @Author: pglin66@126.com
 * @Date: 2022-04-25 20:31:14
 * @LastEditors: pglin66@126.com
 * @LastEditTime: 2022-08-22 20:55:04
 * @FilePath: /aa/root/apipost/src/router/index.js
 * @Description: 
 */
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

import apis from '@/layouts/apis'
import popup from '@/views/popup'
const routes = [
  {
    path: '/pic',
    name: 'pic',
    component: () => import('@/views/pic'),

  },
  {
    path: '/popup',
    name: 'popup',
    component: () => import('@/views/popup'),

  },
  {
    path: '/svgList',
    name: 'svgList',
    component: () => import('@/views/svgList'),

  },
  {
    path: '/api',
    name: 'apis',
    component: apis,
    children: [
      {
        path: '/api/',
        name: 'apisHome',
        component: () => import('@/views/home'),
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'NotFound',
    meta: {
      hidden: true,
    },
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

// const router = createRouter({
//   history: isHashRouterMode
//     ? createWebHashHistory(publicPath)
//     : createWebHistory(publicPath),
//   routes: constantRoutes,
// })
export default router
