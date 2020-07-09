<template>
  <div id="concem">
    <!-- 我的（模态框）*+12* 页面+个人信息+设置+余额明细  -->
    <van-nav-bar :title=this.$route.query.id left-text left-arrow @click-left="onClickLeft" />

    <van-tabs v-model="active">
      <van-tab title="全部订单">
        <div class="empty">
          <img src="../assets/pic/nothing-heart.png" alt />
          <p>暂无订单</p>
        </div>
      </van-tab>
      <van-tab title="待支付">
          <div class="empty">
          <img src="../assets/pic/nothing-heart.png" alt />
          <p>暂无订单</p>
        </div>
      </van-tab>
      <van-tab title="已完成">
          <div class="empty">
          <img src="../assets/pic/nothing-heart.png" alt />
          <p>暂无订单</p>
        </div>
      </van-tab>
      <van-tab title="已取消">
          <div class="empty">
          <img src="../assets/pic/nothing-heart.png" alt />
          <p>暂无订单</p>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      active: 0
    };
  },
  props: {},
  created() {
      console.log(this.$route.query.id)
  },
  mounted() {},
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  },
  computed: {},
  watch: {},
  filters: {},
  directives: {},
  components: {}
};
</script>

<style scoped lang="less">
#concem {
  height: 100%;
  background: #f0f2f5;
}
.empty {
  margin-bottom: 0.5rem;
  > img {
    width: 4.5rem;
    height: 4.5rem;
  }
  > p {
    font-size: 0.3rem;
    color: #8c8c8c;
    margin-top: 0.2rem;
  }
}
</style>