<template>
  <div class="exchange">
    <van-nav-bar title="学习卡兑换" left-text left-arrow @click-left="onClickLeft" />

    <ul>
      <li>
        <div class="van-cell van-field">
          <div class="van-cell__title van-field__label">
            <span>卡号：</span>
          </div>
          <div class="van-cell__value">
            <div class="van-field__body">
              <input type="text" placeholder="请输入学习卡号" class="van-field__control" />
            </div>
          </div>
        </div>
      </li>
      <li>
        <div class="van-cell van-field">
          <div class="van-cell__title van-field__label">
            <span>密码：</span>
          </div>
          <div class="van-cell__value">
            <div class="van-field__body">
              <input type="text" placeholder="请输入学习卡密码" rows="1" class="van-field__control" />
            </div>
          </div>
        </div>
      </li>
    </ul>

    <div class="bottom-box">
      <div class="btn">立即兑换</div>
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
          this.$router.go(-1)
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
.van-cell {
  line-height: 1.2rem;
  font-size: 0.3rem;
}
.exchange {
  height: 100%;
  background: #f0f2f5;
  > ul {
    margin-top: 0.15rem;
    padding: 0 0.2rem;
    background: #fff;
  }
  .bottom-box{
      height: 2rem;
      background: #fff;
      overflow: hidden;
      .btn{
          background: #eb6100;
          color: #fff;
          width: 6.5rem;
          height: .9rem;
          line-height: .9rem;
          border-radius: .15rem;
          font-size: .3rem;
          margin: .7rem auto;
      }
  }
}
</style>