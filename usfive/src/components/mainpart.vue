<template>
  <div class="hello">
    <router-view />
    <dragball></dragball>
    <footbar></footbar>
  </div>
</template>

<script>
import Vue from 'vue'
import footbar from '@/components/footbar'
import dragball from '@/components/dragball'
Vue.component('footbar',footbar)
Vue.component('dragball',dragball)
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
