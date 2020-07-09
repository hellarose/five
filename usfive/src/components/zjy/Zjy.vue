
<style scoped lang="scss">



.zjy_1 {
  width: 97%;

  height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.4rem;
  color: #6f6f6f;
}
.zjy_2 {
  width: 97%;

  height: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 0.35rem;
  color: #a1a1a1;
}
.zjy_3 {
  width: 100%;
  height: 100%;
  font-size: 0.3rem;
  background: #F0F2F5;
//   background: red;


  ul {
    width: 100%;
  background: #F0F2F5;

    li {
      background: #fff;
      height: 2rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-top: 0.2rem;
      
    }
  }
}

.zjy_3>ul>li>div:nth-of-type(3){
    width: 1.4rem;
    height: 0.7rem;
    text-align: center;
    line-height: 0.7rem;
    border-radius: 0.26rem;
    background: #EBEEFE;
    color:#EB6100;
}
.zjy_d3>ul>li>div>p:nth-of-type(2){
//   color:#C8C8C8;
  color:red;
  
}
.zjy_img {
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
.zjy_3 >ul>li:nth-of-type(1){
    margin-top: 0.2rem;
}
.zjy_fon{
  color:#b7b7b7;
  font-size: 0.19rem;
  margin-top: 0.15rem;
}
</style>


<template>
  <div id="app">
    <router-view />

    <!-- <router-link to='/'>回到首页</router-link> -->
    <div class="zjy_1">
      <div>
        <van-icon name="arrow-left" />
      </div>
      <div>一对一辅导</div>
      <div>
        <van-icon name="search" />
      </div>
    </div>
    <div class="zjy_2">
      <p>
        选择上课时间
        <van-icon name="arrow-down" />
      </p>
      <p>
        选择老师条件
        <van-icon name="arrow-down" />
      </p>
    </div>
    <div class="zjy_3">
      <ul>
        <li>
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
          <div>预约</div>
        </li>
         <li>
          <div>
            <img
              class="zjy_img"
              src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20199pIxx6OzV51566615814.jpg"
            />
          </div>
          <div>
            <p>李凡</p>
            <p  class="zjy_fon">
              男
              <span>30年教龄</span>
            </p>
          </div>
          <div>预约</div>
        </li>
         <li>
          <div>
            <img
              class="zjy_img"
              src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png"
              alt
            />
          </div>
          <div>
            <p>齐钰</p>
            <p class="zjy_fon">
              男
              <span>30年教龄</span>
            </p>
          </div>
          <div>预约</div>
        </li>
      </ul>
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
  //props:{},//[]
  methods: {},
  computed: {},
  watch: {},
  filters: {},
  directives: {},
  components: {}
};
</script>