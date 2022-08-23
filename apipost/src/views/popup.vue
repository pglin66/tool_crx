<!--
 * @Author: pglin66@126.com
 * @Date: 2022-08-19 14:37:42
 * @LastEditors: pglin66@126.com
 * @LastEditTime: 2022-08-19 16:10:57
 * @FilePath: /aa/root/apipost/src/views/popup.vue
 * @Description: 
-->
<template>
  <div class="popup-list">
    <el-button type="primary">接口调试</el-button>
    <el-button type="primary" @click="handleGetPageSvg()">提取svg图标</el-button>
  </div>
</template>
<script setup>
    //发送给background
    const handleGetPageSvg=()=>{
      chrome.runtime.sendMessage({ type: 'getPageSvg', to: 'browser',  });
    }
</script>
<style lang="scss">
.popup-list{
  padding: 10px;
  width: 500px;
  height: 300px;
}
</style>