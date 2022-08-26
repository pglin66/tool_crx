/*
 * @Author: pglin66@126.com
 * @Date: 2022-04-25 20:31:14
 * @LastEditors: pglin66@126.com
 * @LastEditTime: 2022-04-26 09:51:06
 * @FilePath: \mps_merchante:\2022年\electron-egg\frontend\src\main.js
 * @Description: 
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
createApp(App).use(ElementPlus).use(store).use(router).mount('#app')

