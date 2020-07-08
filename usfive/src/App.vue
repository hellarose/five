<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
/*rem布局事件操作函数*/
function rem(){
    let docel=document.documentElement
    docel.style.fontSize=docel.clientWidth / 7.5 +'px'
}
rem()
window.addEventListener('resize',rem,false)

export default {
  name: 'App',
  mounted(){

  },
}
</script>

<style>
@import './css/global.css';
@import './css/transcartoon.css';
/* 可以直接使用sass和less，下载好即可 */
</style>
