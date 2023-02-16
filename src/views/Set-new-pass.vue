<template>
  <div>
    <van-nav-bar title="设置密码" left-text left-arrow @click-left="onClickLeft" />
    <div class="box">
      <div class="int_num">
        <input type="tel" placeholder="请输入手机号" maxlength="11" />
        <div class="getCAPTCHA">获取验证码</div>
        <!---->
      </div>
      <div class="int_num">
        <input type="text" placeholder="请输入验证码" />
      </div>
      <div class="int_num">
        <input type="password" placeholder="请输入密码" />
      </div>
    </div>
    <div class="login">
        <span>确定</span>
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
  created() {},
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

<style  scoped lang="less">
.box {
  background: #fff;
  padding: 0 0.2rem;
  margin-top: 0.15rem;
  .int_num {
    height: 1.2rem;
    border-bottom: 1px solid #f1f1f1;
    background: #fff;
    input {
      box-sizing: border-box;
      padding: 0.3rem 0;
      border: 0;
      height: 100%;
      font-size: 0.28rem;
      font-weight: 400;
      line-height: 0.5rem;
      float: left;
      outline: none;
    }
    .getCAPTCHA{
        color: #eb6100;
        font-size: .26rem;
        float: right;
        margin: .4rem .2rem;
    }
  }
}
.login{
    background: url(../assets/pic/set-pass-bg.png);
    background-size: 100% 100%;
    width: 80%;
    height: .9rem;
    line-height: .9rem;
    margin: 1.6rem auto 0;
    font-size: .3rem;
    text-align: center;
    color: #fff;
}
</style>