<template>
  <div class="wyl_big">
    <!-- header -->
    <header>
      <!---->
      <h3>特色课</h3>
      <div class="right">
        <img
          src="data:image/png;base64,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"
          alt
          class="search"
        />
      </div>
    </header>
    <!-- nav -->

    <!-- <nav class="nav">
      <div>
        <p>分类</p>
        <p>排序</p>
        <p>删选</p>
      </div>
    </nav>-->

    <!--wyl_nav -->
    <van-dropdown-menu class="wyl_nav" active-color="#EE8032">
      <van-dropdown-item title="分类">
        <div class="nkl_option1">
          <div>
            <p>年级</p>
            <div>
              <span v-for="(item,index) in option1.nianji" :key="index">{{ item }}</span>
            </div>
          </div>
          <div>
            <p>课程</p>
            <div>
              <span v-for="(item,index) in option1.xueke" :key="index">{{ item }}</span>
            </div>
          </div>
          <div>
            <button>重置</button>
            <button>确定</button>
          </div>
        </div>
      </van-dropdown-item>
      <van-dropdown-item title="排序">
        <div class="nkl_option2">
          <p v-for="(item,index) in option2" :key="index">{{item}}</p>
        </div>
      </van-dropdown-item>
      <van-dropdown-item title="筛选">
        <div class="nkl_option3">
          <span v-for="(item,index) in option3" :key="index">{{item}}</span>
        </div>
      </van-dropdown-item>
    </van-dropdown-menu>
    <!-- main -->

    <div class="list">
      <div class="context">
        <div class="item">
          <div data-v-5955fa02 class="ii-item">
            <p data-v-5955fa02 class="ii-title">
              <font data-v-5955fa02>李老师16号到22号地理大课堂开课啦</font>
            </p>
            <div data-v-5955fa02 class="ii-time">
              <p data-v-5955fa02 class="after-icon">03月16日 18:30 ~ 03月22日 15:00</p>
              <p data-v-5955fa02>共8课时</p>
            </div>
            <div data-v-5955fa02 class="ii-teacher">
              <div data-v-5955fa02 class="teacher-item">
                <img
                  data-v-5955fa02
                  src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg"
                  alt
                />
                <font data-v-5955fa02>李青</font>
              </div>
            </div>
            <p data-v-5955fa02 class="ii-info">
              <span data-v-5955fa02 class="person">35人已报名</span>
              <font data-v-5955fa02 class="free">免费</font>
            </p>
          </div>
        </div>

        <div class="item">
          <div data-v-5955fa02 class="ii-item">
            <p data-v-5955fa02 class="ii-title">
              <!---->
              <font data-v-5955fa02>李老师9号地理大课堂开课啦</font>
            </p>
            <div data-v-5955fa02 class="ii-time">
              <!---->
              <p data-v-5955fa02>共7课时</p>
            </div>
            <div data-v-5955fa02 class="ii-teacher">
              <div data-v-5955fa02 class="teacher-item">
                <img
                  data-v-5955fa02
                  src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg"
                  alt
                />
                <font data-v-5955fa02>李青</font>
              </div>
            </div>
            <p data-v-5955fa02 class="ii-info">
              <span data-v-5955fa02 class="person">20人已报名</span>
              <!---->
              <font data-v-5955fa02 class="free">免费</font>
            </p>
            <i data-v-5955fa02 class="has-buy">已报名的icon</i>
            <!---->
          </div>
        </div>

        <div class="item">
          <div data-v-5955fa02 class="ii-item">
            <p data-v-5955fa02 class="ii-title">
              <!---->
              <font data-v-5955fa02>李老师9号地理大课堂开课啦</font>
            </p>
            <div data-v-5955fa02 class="ii-time">
              <!---->
              <p data-v-5955fa02>共7课时</p>
            </div>
            <div data-v-5955fa02 class="ii-teacher">
              <div data-v-5955fa02 class="teacher-item">
                <img
                  data-v-5955fa02
                  src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg"
                  alt
                />
                <font data-v-5955fa02>李青</font>
              </div>
            </div>
            <p data-v-5955fa02 class="ii-info">
              <span data-v-5955fa02 class="person">20人已报名</span>
              <!---->
              <font data-v-5955fa02 class="free">免费</font>
            </p>
            <i data-v-5955fa02 class="has-buy">已报名的icon</i>
            <!---->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      option1: {
        nianji: ["初一", "初二", "初三", "高一", "高二"],
        xueke: ["语文", "数学", "英语", "物理", "化学"]
      },
      option2: ["综合排序", "最新", "最热", "价格从低到高", "价格从高到低"],
      option3: [
        "全部",
        "大班课",
        "小班课",
        "公开课",
        "点播课",
        "面授课",
        "音频课",
        "系统课",
        "图文课",
        "会员课"
      ],
      page: 1,
      list: [],
      loading: false
    };
  },
  props: {},
  components: {},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang='less'>
.wyl_big {
  background: #f0f2f5;
  height: 100%;
  font-size: 0.315rem;
  width: 100%;
  // header
  header {
    position: fixed;
    z-index: 2;
    width: 100%;
    height: 0.9rem;
    background: #fff;
    h3 {
      font-size: 0.36rem;
      color: #595959;
      position: absolute;
      left: 50%;
      top: 25%;
      transform: translateX(-50%);
      font-weight: normal;
    }
    .right {
      position: absolute;
      right: -45%;
      top: 25%;
      height: 100%;
      float: right;
      font-size: 0.4rem;
      color: #595959;

      .search {
        width: 0.45rem;
        height: 0.45rem;
      }
    }
  }
  .wyl_nav {
    width: 100%;
    height: 0.9rem;
    position: fixed;
    top: 0.89rem;
    background: #fff;
    line-height: 0.9rem;
    left: 0%;
    z-index: 6;
    overflow: hidden;


    // 分类1
    .nkl_option1 {
      height: 6.66rem;
      > div {
        margin-left: 0.28rem;
        padding: 0.3rem 0 0.34rem 0;
        border-bottom: 0.02rem solid #f7f7f7;
        box-sizing: border-box;
        height: 2.6rem;
        p {
          font-size: 0.3rem;
          color: #737373;
        }
        div {
          span {
            display: inline-block;
            width: 1.36rem;
            height: 0.66rem;
            background: #f5f5f5;
            color: #898989;
            font-size: 0.3rem;
            margin-right: 0.42rem;
            text-align: center;
            line-height: 0.66rem;
            border-radius: 0.06rem;
            margin-top: 0.16rem;
          }
        }
      }
      div:nth-of-type(3) {
        padding: 0.29rem 0 0.46rem 0;
        box-sizing: border-box;
        height: 1.46rem;
        button:nth-of-type(1) {
          width: 3.34rem;
          height: 0.66rem;
          border: 0.02rem solid #d8d8d8;
          font-size: 0.3rem;
          background: #fff;
          border-radius: 0.08rem;
          margin-right: 0.19rem;
          color: #6f6f6f;
        }
        button:nth-of-type(2) {
          width: 3.34rem;
          height: 0.66rem;
          background: #eb6100;
          border-radius: 0.08rem;
          border: 0.02rem solid #eb6100;
          color: #fff;
          font-size: 0.3rem;
        }
      }
    }
    //分类2
    .nkl_option2 {
      height: 5.05rem;
      p {
        height: 0.98rem;
        font-size: 0.27rem;
        line-height: 0.98rem;
        color: #434343;
        text-align: center;
        border: 0.015rem solid #f9f9f9;
      }
    }
    //分类3
    .nkl_option3 {
      padding: 0.2rem 0 0 0.3rem;
      box-sizing: border-box;
      height: 3.06rem;
      span {
        display: inline-block;
        width: 1.35rem;
        height: 0.66rem;
        background: #f5f5f5;
        color: #646464;
        font-size: 0.3rem;
        margin-right: 0.42rem;
        text-align: center;
        line-height: 0.66rem;
        border-radius: 0.06rem;
        margin-top: 0.14rem;
      }
    }
  }
  // nav
  .nav {
    width: 100%;
    height: 0.9rem;
    position: fixed;
    top: 0.89rem;
    background: #fff;
    line-height: 0.9rem;
    left: 0%;
    z-index: 4;
    overflow: hidden;
    div {
      display: flex;
      align-items: center;
      justify-content: space-around;
      background: #fff;
      p {
        width: 33%;
        text-align: center;
        height: 0.5rem;
        line-height: 0.5rem;
      }
    }
  }

  // main

  .list {
    width: 100%;
    margin: 2rem 0 0;
    background: #f0f2f5;
    .context {
      width: 94%;
      margin: 1rem auto 0;
      .item {
        background: #fff;
        border-radius: 0.1333rem;
        padding: 0 0.37rem;
        margin-bottom: 0.4rem;
        margin-top: 0.2rem;

        .ii-item {
          position: relative;
          .ii-title {
            text-align: left;
            padding-top: 0.4rem;
            font {
              font-size: 0.32rem;
              color: #333;
            }
          }
          div.ii-time {
            width: 100%;
            display: flex;
            align-items: center;
            p {
              flex: 1;
              text-align: left;
              height: 0.8rem;
              line-height: 0.8rem;
              font-size: 0.28rem;
              font-weight: normal;
              color: #666;
            }
            p.after-icon {
              flex: 3;
            }
          }

          div.ii-teacher {
            height: 1.7rem;
            display: flex;
            div.teacher-item {
              display: flex;
              height: 100%;
              align-items: center;
              img {
                width: 0.72rem;
                height: 0.72rem;
                border-radius: 50%;
              }

              font {
                text-align: left;
                font-size: 0.28rem;
                color: rgba(0, 0, 0, 0.45);
                margin-left: 0.22rem;
                margin-right: 0.46rem;
              }
            }
          }
          p.ii-info {
            border-top: 0.01rem solid #f5f5f5;
            height: 1.17rem;
            line-height: 1.17rem;
            display: flex;
            font-size: 0.34rem;
            span.person {
              flex: 1;
              text-align: left;
              font-size: 0.28rem;
              color: rgba(0, 0, 0, 0.45);
            }
            font {
              text-align: right;
              padding-right: 0.2rem;
              flex: 1;
              font-size: 0.34rem;
              color: #44a667;
            }
          }
          i {
            position: absolute;
            right: 0.4rem;
            top: 1.73333rem;
            background-size: 100% 100%;
            width: 1.57333rem;
            height: 1.28rem;
          }
        }
      }
    }
  }
}
</style>