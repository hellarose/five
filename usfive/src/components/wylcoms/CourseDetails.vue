<template>
  <div class="wyl_big">
    <!-- header -->
    <wylcdH></wylcdH>
    <!-- main -->
    <wylcdM></wylcdM>
    <!-- footer -->
    <wylcdF :aaa="a"></wylcdF>
  </div>
</template>

<script>
import wylcdH from  './wylcdHeader'
import wylcdM from "./wylcdMiddle";
import wylcdF from "./wylcdFooter";
export default {
  name: "",
  data() {
    return {
      value: 2,
      a:'立即学习',
    };
  },
  props: {},
  components: {
    wylcdM,
    wylcdF,
    wylcdH
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped lang='less'>
.wyl_big {
  background: red;
  // header
 
  // footer
}
</style>