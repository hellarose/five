<template>
  <div class="mine">
    <div class="top-box">
      <div class="tab">
        <div class="info">
          <section class="login">
            <div class="avatar">
              <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/avatar.jpg" />
              <!---->
              <img src="../assets/pic/queen.png" class="vip-logo" />
            </div>
            <div class="extra">
              <p class="name">
                <span>176****4379</span>
              </p>
              <img src="../assets/pic/header-edit.png" alt />
            </div>
          </section>
        </div>
        <div class="mine">
          <div class="mine-item my-study" v-for="(item,index) of header" :key="index">
            <p class="count">{{ item.count }}</p>
            <p class="name">{{ item.name }}</p>
            <p class="note">-{{ item.note }}-</p>
          </div>
        </div>
        <div class="to-set"></div>
      </div>
    </div>
    <div class="to-share">
      <div class="box">
        <img src="../assets/pic/message.png" alt />
        <div>
          <p>邀请好友注册APP，享多重好礼</p>
          <p>限时特惠，多邀多得</p>
        </div>
        <span>
          <van-icon name="arrow" id="icon" />
        </span>
      </div>
    </div>
    <div class="menu-box">
      <ul>
        <li>
          <p>课程相关</p>
          <ul>
            <li @click="toConcem">
              <img src="../assets/pic/heart-teacher.png" alt />
              <p>关注的老师</p>
            </li>
            <li @click="toCollect">
              <img src="../assets/pic/start.png" alt />
              <p>我的收藏</p>
            </li>
          </ul>
        </li>
        <li>
          <p>订单相关</p>
          <ul>
            <li @click="toOrder('课程订单')">
              <img src="../assets/pic/order.png" alt />
              <p>课程订单</p>
            </li>
            <li @click="toOrder('会员订单')">
              <img src="../assets/pic/order.png" alt />
              <p>会员订单</p>
            </li>
            <li @click="toOrder('约课订单')">
              <img src="../assets/pic/order.png" alt />
              <p>约课订单</p>
            </li>
          </ul>
        </li>
        <li>
          <p>我的账户</p>
          <ul>
            <li @click="toCoupon">
              <img src="../assets/pic/money.png" alt="">
              <p>优惠券</p>
            </li>
            <li @click="toCart">
              <img src="../assets/pic/study-cart.png" alt="">
              <p>学习卡</p>
            </li>
            <li @click="toVip">
              <img src="../assets/pic/VIP.png" alt="">
              <p>会员</p>
            </li>
          </ul>
        </li>
        <li>
          <p>自助服务</p>
          <ul>
            <li @click="toMessage">
              <img src="../assets/pic/my-message.png" alt="">
              <p>我的消息</p>
            </li>
            <li @click="toFeedback">
              <img src="../assets/pic/feedback.png" alt="">
              <p>意见反馈</p>
            </li>
            <li>
              <img src="../assets/pic/service.png" alt="">
              <p>在线客服</p>
            </li>
            <li @click="toOptions">
              <img src="../assets/pic/setting.png" alt="">
              <p>设置</p>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      header: [
        {
          count: 0,
          name: "我的特色课",
          note: "已购特色课程的学习"
        },
        {
          count: 0,
          name: "一对一辅导",
          note: "我的一对一老师辅导"
        },
        {
          count: 0,
          name: "剩余学习币",
          note: "查看剩余学习币"
        }
      ]
    };
  },
  props: {},
  created() {},
  mounted() {},
  methods: {
    toConcem() {
      this.$router.push('/concem')
    },
    toCollect() {
      this.$router.push('/collect')
    },
    toOrder(str) {
      console.log(str)
      this.$router.push('/order?id='+str)
    },
    toCoupon() {
      this.$router.push('/coupon')
    },
    toCart() {
      this.$router.push('/cart')
    },
    toVip() {
      this.$router.push('/vip')
    },
    toFeedback() {
      this.$router.push('/feedback')
    },
    toOptions() {
      this.$router.push('/options')
    },
    toMessage() {
      this.$router.push('/message')
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
.van-icon {
          font-size: 0.7rem;
          color: #fff;
        }
.mine {
  * {
    margin: 0;
    padding: 0;
    img {
      vertical-align: middle;
    }
  }
  .top-box {
    height: 4.69rem;
    background: url(../assets/pic/header-bg.png) no-repeat top;
    background-size: 100%;
    background-color: #fff;
    position: relative;
    padding: 0 0.3rem;
    .tab {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 6.9rem;
      background-color: #fff;
      box-shadow: 0 0 0.32rem 0 rgba(0, 0, 0, 0.05);
      border-radius: 0.15rem;
      height: 3.43rem;
      .info {
        overflow: hidden;
        .login {
          overflow: hidden;
          margin: 0.3rem 0 0 0.3rem;
          position: relative;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          .avatar {
            position: relative;
            margin-right: 0.4rem;
            img:nth-of-type(1) {
              width: 1.12rem;
              height: 1.12rem;
            }
            .vip-logo {
              position: absolute;
              width: 0.44rem;
              height: 0.44rem;
              top: 0;
              right: -0.2rem;
            }
          }
          .extra {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            > p {
              font-size: 0.36rem;
              color: #333;
            }
            > img {
              width: 0.32rem;
              margin-left: 0.2rem;
            }
          }
        }
      }
      .mine {
        display: flex;
        justify-content: space-between;
        width: 100%;
        .mine-item {
          width: 35%;
          height: 1.3rem;
          margin-top: 0.44rem;
          .count {
            color: #ee5800;
            font-size: 0.42rem;
          }
          .name {
            font-size: 0.28rem;
            line-height: 0.5rem;
          }
          .note {
            color: #9b9b9b;
            font-size: 0.22rem;
          }
        }
      }
    }
  }
  .to-share {
    width: 100%;
    padding: 0.4rem 0.4rem 0;
    background-color: #fff;
    box-sizing: border-box;
    > .box {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: linear-gradient(-90deg, #f2995a, #eb6100);
      border-radius: 1rem;
      padding: 0 0.34rem;
      > img {
        width: 0.44rem;
        height: 0.44rem;
      }
      > div {
        color: #fff;
        margin-left: 0.2rem;
        flex: 1;
        p {
          font-size: 0.24rem;
          text-align: left;
        }
        
      }
    }
  }
  .menu-box{
    width: 100%;
    padding: 0 0.4rem ;
    background-color: #fff;
    box-sizing: border-box;
    >ul{
      width: 100%;
      >li{
        padding: .3rem 0;
        border-bottom: .01rem solid #ddd;
        >p{
          font-size: 0.3rem;
          color: #333;
          text-align: left;
          line-height: .56rem;
        }
        >ul{
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          >li{
            // margin-right: .8rem;
            width: 25%;
            >img{
              width: 0.5rem;
              height: .45rem;
            }
            >p{
              font-size: .26rem;
              color: #656565;
              line-height: 0.46rem;
            }
          }
        }
      }
    }
  }
}
</style>