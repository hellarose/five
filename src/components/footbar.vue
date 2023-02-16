
<style scoped>
</style>


<template>
  <div>
    <van-tabbar route>
      <van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/mylesson">
        <img
          slot="icon"
          slot-scope="scope"
          width="16"
          :src="
            scope.active ? '/static/course-active.svg' : '/static/course.svg'
          "
        />
        <span>课程</span>
      </van-tabbar-item>
      <van-tabbar-item replace to="/mymoney">
        <img
          slot="icon"
          slot-scope="scope"
          width="16"
          :src="scope.active ? '/static/order-active.svg' : '/static/order.svg'"
        />
        <span>约课记录</span>
      </van-tabbar-item>
      <van-tabbar-item replace to="/feedback" icon="search">练习</van-tabbar-item>
      <van-tabbar-item replace to="/self" icon="friends">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>


<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  //props:{},//[]
  methods: {},
  computed: {},
  watch: {},
  filters: {},
  directives: {},
  components: {},
};
</script>