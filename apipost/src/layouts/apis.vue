<!--
 * @Author: pglin66@126.com
 * @Date: 2022-04-25 20:54:22
 * @LastEditors: pglin66@126.com
 * @LastEditTime: 2022-04-27 20:30:31
 * @FilePath: \mps_merchante:\2022年\electron-egg\frontend\src\layouts\apis.vue
 * @Description: 
-->
<template>
  <div class="apis">
    <div class="apis-header"> </div>
    <div class="main">
      <div class="toolbars">
        <div class="list">
          <div class="button">
            <span>
              <div class="icon"></div>
              <div class="name">最近</div>
            </span>
          </div>
          <div class="button">
            <span>
              <div class="icon"></div>
              <div class="name">apis</div>
            </span>
          </div>
          <div class="button">
            <span>
              <div class="icon"></div>
              <div class="name">分享</div>
            </span>
          </div>
          <div class="button">
            <span>
              <div class="icon"></div>
              <div class="name">测试</div>
            </span>
          </div>
          <div class="button">
            <span>
              <div class="icon"></div>
              <div class="name">项目</div>
            </span>
          </div>
          <div class="button">
            <span>
              <div class="icon"></div>
              <div class="name">团队</div>
            </span>
          </div>
        </div>
        <div class="toolbars_footers">

        </div>
      </div>
      <router-view></router-view>
     
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
  } from '@element-plus/icons-vue'

  const isCollapse = ref(true)
  const handleOpen = (key, keyPath) => {
    console.log(key, keyPath)
  }
  const handleClose = (key, keyPath) => {
    console.log(key, keyPath)
  }
</script>

<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
<style lang="scss" scoped>
  .apis {
    height: 100%;
    background-color: var(--bg1);
    display: flex;
    flex-direction: column;
    &>.main {
      margin-right: 8px;
      flex: 1 1;
      display: flex;
      flex-direction: row;
      height: calc(100% - 88px);
      padding-bottom: 8px;

      &>.toolbars {
        width: 48px;
        margin-left: 8px;

        &>.list {
          .button {
            width: 48px;
            height: 57px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: var(--fn1);
            span {

              width: 48px;
              text-align: center;
            }
            }
          }
        }

      }
    }



    .apis-header {
      height: 50px;
      display: flex;
      padding: 0 16px 0 10px;
      align-items: center;
      justify-content: space-between;
      font-size: 12px;
    }
</style>