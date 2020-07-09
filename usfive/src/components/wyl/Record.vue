<template>
  <div class="wylAppointment">
    <div class="wylheader">
      <span>约课记录</span>
    </div>

    <ul class="wylnav">
      <li>待上课</li>
      <li>已上课</li>
      <li>已取消</li>
    </ul>
    <div class="wylcontent">
      <img src="../../assets/record.png" alt />
      <p>请登录后查看相关内容</p>
      <button>登录注册</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  props: {},
  components: {},
  mounted() {},
  methods: {
    goback() {
      this.$router.go(-1);
    }
  }
};
</script>
<style scoped lang="less">
.wylAppointment {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .wyltop {
    width: 7.5rem;
    height: 0.3rem;
    > img {
      width: 7.5rem;
      height: 0.3rem;
    }
  }
  .wylheader {
    font-size: 0.48rem;
    height: 0.9rem;
    line-height: 0.9rem;
    color: #595959;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
  }
  .wylnav {
    margin-top: 1rem;
    width: 100%;
    height: 0.68rem;
    color: #7d7e80;
    font-size: 0.2rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    li {
      color: #7d7e80;
      height: 0.68rem;
      line-height: 0.68rem;
      font-size: 0.26rem;
    }
  }
  .wylcontent {
    width: 7.5rem;
    position: absolute;
    bottom: 0rem;
    top: 1.58rem;
    background: #f0f2f5;
    text-align: center;
    > img {
      width: 2.48rem;
      height: 1.78rem;
      margin-top: 2rem;
    }
    > p {
      color: #b7b7b7;
      font-size: 0.16rem;
    }
    > button {
      width: 1rem;
      height: 0.36rem;
      color: white;
      font-size: 0.18rem;
      background: #eb6100;
      text-align: center;
      line-height: 0.36rem;
      border: none;
      border-radius: 0.04rem;
      margin-top: 0.4rem;
    }
  }
}
</style>