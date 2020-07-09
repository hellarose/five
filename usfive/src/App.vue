<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">

@import './css/global.css';
@import './css/transcartoon.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html,body,#app{
  height: 100%;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>
/*rem布局事件操作函数*/
// function rem(){
//     let docel=document.documentElement
//     docel.style.fontSize=docel.clientWidth / 7.5 +'px'
// }
// rem()
// window.addEventListener('resize',rem,false)

export default {
  name: 'App',
  mounted(){

  },
}
</script>