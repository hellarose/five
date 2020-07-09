<template>
  <div>
    <div class="zjy_d1">
      <div>
        <van-icon name="arrow-left" />
      </div>
      <div>预约课程</div>
      <div></div>
    </div>
    <div class="zjy_3">
      <div>
        <img
          class="zjy_img"
          src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png"
          alt
        />
      </div>
      <div>
        <p>杨德胜</p>
        <p class="zjy_fon">
          男
          <span>30年教龄</span>
        </p>
      </div>
      <div>查看详情</div>
    </div>

    <div class="zjy_aa">
      <div class="zjy_s">
        <span></span>
        <p>
          选择时间
          <span>(北京时间)</span>
        </p>
      </div>
      <div class="zjy_zhou">
        <ul>
          <li>
            <p>周一</p>
            <p>06/29</p>
          </li>
          <li>
            <p>周二</p>
            <p>06/30</p>
          </li>
          <li>
            <p>周三</p>
            <p>07/01</p>
          </li>
          <li>
            <p>周四</p>
            <p>07/02</p>
          </li>
          <li>
            <p>周五</p>
            <p>07/03</p>
          </li>
          <li>
            <p>周六</p>
            <p>07/04</p>
          </li>
        </ul>
      </div>
      <div class="zjy_xf">
        <div class="zjy_xx">
          <img src="pic/nothing-heart.png" alt />
          <p>暂无信息</p>
        </div>
      </div>

      <div class="zjy_yy">立即预约</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
.zjy_d1 {
  height: 2rem;
  background: #5da7f7;
  display: flex;
  justify-content: space-between;

  div {
    font-size: 0.34rem;
    color: #fff;
    margin-top: 0.2rem;
  }
}
.zjy_s > span {
  width: 0.07rem;
  height: 0.4rem;
  background: #eb6100;
  margin-top: 0.3rem;
}
.zjy_s {
  display: flex;
  margin-left: 0.4rem;

  p {
    font-size: 0.3rem;
    margin-top: 0.3rem;
    margin-left: 0.2rem;
  }
}
.zjy_aa {
  height: 100%;
  background: #f0f2f5;
}
.zjy_zhou {
  width: 90%;
  height: 1.5rem;
  background: #fff;
  margin: 0 auto;
  margin-top: 0.1rem;
  border-radius: 0.1rem;

  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    li {
      text-align: center;
      color: #cfcfcf;
      font-size: 0.3rem;
      margin-top: 0.27rem;
      font-weight: 500;
    }
  }
}
.zjy_zhou > ul > li:nth-of-type(6) {
  color: orange;
  border-bottom: 0.07rem solid #4169ff;
}
.zjy_xx {
  position: fixed;
  left: 30%;
  top: 40%;
  img {
    width: 3rem;
    height: 3rem;
  }
  p {
    font-size: 0.35rem;
    text-align: center;
  }
}
.zjy_yy {
  width: 100%;
  height: 0.8rem;
  background: #eb6100;
  color: #fff;
  text-align: center;
  font-size: 0.4rem;
  line-height: 0.8rem;
  position: fixed;
  bottom: 0;
  left: 0;
}
.zjy_b {
  width: 90%;
  height: 1.5rem;
  background: #fff;
  position: fixed;
  top: 0.7rem;
  left: 0.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 0.7rem;
    height: 0.7rem;
  }
  p {
    font-size: 0.2rem;
  }
}

.zjy_3 {
  height: 100%;
  font-size: 0.3rem;
  background: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  width: 90%;
  height: 1.5rem;
  top: 0.7rem;
  left: 0.38rem;
  border-radius: 0.1rem;

  //   background: red;
}
.zjy_3 > div:nth-of-type(2) {
  width: 60%;
}
.zjy_3 > div:nth-of-type(3) {
  color: #eb6100;
  border: 0.02rem solid #eb6100;
  border-radius: 0.5rem;
  font-size: 0.24rem;
  padding: 0.1rem 0.14rem;
}
.zjy_3 img {
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 0.5rem;
}
.zjy_fon {
  color: #b7b7b7;
  font-size: 0.19rem;
  margin-top: 0.15rem;
}
.zjy_3 > ul > li > div:nth-of-type(2) {
  width: 60%;
}
.zjy_3 > ul > li > div:nth-of-type(3) {
  margin-right: 0.2rem;
}
.zjy_3 > ul > li:nth-of-type(1) {
  margin-top: 0.2rem;
}
.zjy_xf {
  width: 100%;
  height: 100%;

  background: #f0f2f5;
}
</style>
