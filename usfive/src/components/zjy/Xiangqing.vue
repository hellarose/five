<template>
  <div id="app">
    <div class="zjy_d1">
      <div>
        <van-icon name="arrow-left" />
      </div>
      <div>讲师详情</div>
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
      <div>关注</div>
    </div>
    <div class="zjy_w1">
      <ul>
        <li>讲师介绍</li>
        <li>主讲课程</li>
        <li>学员评价</li>
      </ul>
    </div>
    <div class="zjy_box">
      <div class="zjy_left">
        <ul>
          <li>教学年龄</li>
          <li>授课价格</li>
          <li>老师简介</li>
        </ul>
      </div>
      <div class="zjy_right">
        <ul>
          <li>30年</li>
          <li>400学习币</li>
          <li>
            杨老师,特级教师.多次被中国数学会评为全国高中数学竞联赛优秀教练员。长期从事名校理科班的数学教学和数学竞赛辅导工作。辅导学生参加全国高中数学联赛有数百人次获全国高中数学联赛一、二、三等奖，数十人被免试保送到清华大学、北京大学等名牌大学学习。十多人获CMO获一、二、三等奖，一人获IMO金牌。
            特别是近年来大学试行自主招生，有很多同学通过上他的竞赛辅导课进入清华大学、北京大学、上海交通大学等。
          </li>
        </ul>
      </div>
    </div>
    <div class="zjy_yy">立即预约</div>
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
  top: 0.8rem;
  left: 0.38rem;
  border-radius: 0.1rem;

  //   background: red;
}
.zjy_3 > div:nth-of-type(2) {
  width: 60%;
}
.zjy_3 > div:nth-of-type(3) {
  color: #eb6100;
  border: 0.02rem solid #ebeefe;
  border-radius: 0.45rem;
  font-size: 0.24rem;
  padding: 0.05rem 0.28rem;
  background: #ebeefe;
}
.zjy_3 img {
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 0.5rem;
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
.zjy_fon {
  color: #b7b7b7;
  font-size: 0.19rem;
  margin-top: 0.15rem;
}
.zjy_w1 {
  width: 100%;
  // height: 1.5rem;
  margin-top: 0.3rem;
  border-bottom:0.04rem solid #F4F4F4;
  ul {
    // height: 1.5rem;
    display: flex;
    justify-content: space-around;

    li {
      height: 0.5rem;
      margin-top: 0.2rem;
      color: #7d7e80;
      font-size: 0.3rem;
      font-size: 0.26rem;
    }
  }
}
.zjy_w1 > ul > li:nth-of-type(1) {
  color: #eb6100;
  border-bottom: 0.03rem solid #eb6100;
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
.zjy_box {
  display: flex;
  justify-content: space-around;
  .zjy_left {
    flex: 1;
    ul {
      margin-left: 0.2rem;
      li {
        font-size: 0.25rem;
        margin-top: 0.6rem;
        color: #a1a1a1;
      }
    }
  }
  .zjy_right {
    flex: 3;
    ul {
      li {
        font-size: 0.25rem;
        margin-top: 0.6rem;
        color: #a1a1a1;
      }
    }
  }
}

</style>
