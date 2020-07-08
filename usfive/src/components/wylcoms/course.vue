<template>
  <div class="nkl_box">
    <!-- 头部 -->
    <div class="nkl_header">
        <van-nav-bar title="特色课">
            <template #right>
              <router-link to="/seacher"><van-icon name="search" size="0.45rem" color="#7e7e7e"/></router-link>  
            </template>
        </van-nav-bar>
        <!-- 分类 -->
        <van-dropdown-menu active-color="#EE8032">
            <van-dropdown-item title="分类">
              <div class="nkl_option1">
                <div>
                  <p>年级</p>
                  <div><span v-for="(item,index) in option1.nianji" :key="index">{{ item }}</span></div>
                </div>
                <div>
                  <p>课程</p>
                  <div><span v-for="(item,index) in option1.xueke" :key="index">{{ item }}</span></div>
                </div>
                <div><button>重置</button><button>确定</button></div>
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
    </div>
    <!-- 列表 -->
    <div class="nkl_content">
        <div class="nkl_list" v-for="(item,index) in list" :key="index" @click="kexiang()">
          <p>{{item.title}}</p>
          <p><van-icon name="underway-o"/> <span> 03月16日 18:30 ~ 03月22日 15:00 | 共8课时</span></p>
          <div><img src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg" alt=""><span>李青</span></div>
          <div><span>{{item.sales_num}}人已报名</span><span>免费</span></div>
        </div>
    </div>
    <div class="nkl_center"><van-loading size="24px" v-show="loading" color="#0088dd">加载中...</van-loading></div>
  </div>
</template>

<script>
import '../../assets/rem';
export default {
  name: "",
  data() {
    return {
        option1: {
          nianji:["初一","初二","初三","高一","高二"],
          xueke:["语文","数学","英语","物理","化学"]
        },
        option2: ['综合排序','最新','最热','价格从低到高','价格从高到低'],
        option3: ["全部","大班课","小班课","公开课","点播课","面授课","音频课","系统课","图文课","会员课"],
        page:1,
        list:[],
        loading:false,
    };
  },
  props: {},
  components: {},
  mounted() {
    this.courseList()
  },
  methods: {
    //获取特色课列表数据 
    courseList(){
        this.$axios(`https://www.365msmk.com/api/app/courseBasis?page=${this.page}&limit=10`).then((res)=>{
          console.log(res.data.data)
          this.list=res.data.data.list
      })
    },
    // 跳转课详
    kexiang(){
      this.$router.push({
        path:'/kexiang'
      })
    }
  }
};
</script>
<style lang="scss" scoped>
.nkl_box{
  font-size: 0.16rem;
}
.nkl_header{
  position: fixed;
  width: 7.4rem;
  height: 1.73rem;
  z-index: 100;
  // 分类1
  .nkl_option1{
    height: 6.66rem;
    >div{
      margin-left: 0.28rem;
      padding: 0.3rem 0 0.34rem 0;
      border-bottom: 0.02rem solid #f7f7f7;
      box-sizing: border-box;
      height: 2.6rem;
      p{
        font-size: 0.22rem;
        color:#737373;
      }
      div{
        span{
          display:inline-block;
          width: 1.36rem;
          height: 0.66rem;
          background: #f5f5f5;
          color:#898989;
          font-size: 0.24rem;
          margin-right: 0.42rem;
          text-align: center;
          line-height: 0.66rem;
          border-radius: 6px;
          margin-top: 0.16rem;
        }
      }
    }
    div:nth-of-type(3){
      padding: 0.29rem 0 0.46rem 0;
      box-sizing: border-box;
      height: 1.46rem;
      button:nth-of-type(1){
        width: 3.34rem;
        height: 0.66rem;
        border:0.02rem solid #d8d8d8;
        font-size: 0.22rem;
        background: #fff;
        border-radius: 0.08rem;
        margin-right: 0.19rem;
        color:#6f6f6f;
        font-size: 0.25rem;
      }
      button:nth-of-type(2){
        width: 3.34rem;
        height: 0.66rem;
        background: #eb6100;
        border-radius: 0.08rem;
        border:0.02rem solid #eb6100;
        color:#fff;
        font-size: 0.25rem;
      }
    }
  }
  //分类2
  .nkl_option2{
    height: 5.05rem;
    p{
      height: 0.98rem;
      font-size: 0.27rem;
      line-height: 0.98rem;
      color:#434343;
      text-align: center;
      border:0.015rem solid #f9f9f9;
    }
  }
  //分类3
  .nkl_option3{
    padding: 0.2rem 0 0 0.3rem;
    box-sizing: border-box;
    height: 3.06rem;
    span{
      display:inline-block;
      width: 1.35rem;
      height: 0.66rem;
      background: #f5f5f5;
      color:#646464;
      font-size: 0.26rem;
      margin-right: 0.42rem;
      text-align: center;
      line-height: 0.66rem;
      border-radius: 6px;
      margin-top: 0.14rem;
    } 
  }
}
.nkl_content{
  background: #f0f2f5;
  width: 7.4rem;
  height: 100%;
  padding-top: 1.73rem;
  padding-bottom: 60px;
  .nkl_list{
    margin: 0 auto;
    width: 6.86rem;
    min-height: 3.38rem;
    padding: 0.3rem 0.3rem 0.26rem 0.47rem;
    box-sizing: border-box;
    background: #ffffff;
    border-radius: 0.08rem;
    margin-top: 0.3rem;
    p:nth-of-type(1){
      font-size: 0.32rem;
      color:#3c3c3c;
    }
    p:nth-of-type(2){
      margin-top: 0.16rem;
      font-size: 0.26rem;
      color:#838383;
    }
    div:nth-of-type(1){
      margin-top: 0.55rem;
      height: 0.56rem;
      display: flex;
      img{
        width: 0.54rem;
        height: 0.56rem;
        margin-right: 0.18rem;
      }
      span{
        color:#8d8d8d;
        font-size: 0.24rem;
        line-height: 0.56rem;
      }
    }
    div:nth-of-type(2){
      display: flex;
      justify-content: space-between;
      margin-top: 0.4rem;
      span:nth-of-type(1){
        color: #a2a2a2;
        font-size: 0.24rem;
      }
      span:nth-of-type(2){
        color:#62b248;
        font-size: 0.32rem;
      }
    }
  }
}
.nkl_center{
  position: fixed;
  top: 45%;
  left: 45%;
  z-index: 200;
  width: 50px;
  height: 50px;
}

/* /course 特色课*/
.nkl_header{
.van-nav-bar{
width: 7.4rem;
height: 0.93rem; 
.van-ellipsis{
font-size: 0.34rem;
}
}
.van-dropdown-menu__bar{
height: 0.8rem;
}
.van-dropdown-menu__title{
color:#212122;
line-height: 0.4rem;
.van-ellipsis{
font-size: 0.3rem;
}
}
.van-dropdown-menu__title::after{
border-color: transparent transparent #5a5a5b #5a5a5b;
}
}
</style>