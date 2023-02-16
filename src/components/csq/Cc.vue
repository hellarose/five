<template>
  <div class="tou">
      <div>
          <van-nav-bar title="仿真模考" >
           <template  #left>
    <router-link to="/lianxi"><van-icon name="arrow-left" /></router-link>
  </template>
      <template  #right>
    <van-icon name="search" size="18" color="#000" />
  </template>
</van-nav-bar>
      </div>
      <div class="d2">
        <van-dropdown-menu>
        <van-dropdown-item v-model="value1" title="考试类型"  />
        <van-dropdown-item v-model="value2" title="考试状态" />
        <van-dropdown-item v-model="value2" title="参考状态" />
        </van-dropdown-menu>
      </div>
       <div class="d3">
           <img src="@/assets/1.png" alt="">
          
       </div>
        <p>请稍后，套卷正在赶来的路上啦</p>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
          value1: 0,
          value2: 'a',
    };
  },
  props: [],
  components: {},
  mounted() {},
  methods: {}
};
</script>

<style lang="scss">

.tou{
    width: 100%;
   
    .d1{
      width: 100%;
      height: 3rem;
      display: flex;
     // background: pink;
      border-bottom: 1px solid #d4d4d4;
      .g1{
          width: 1.5rem;
          height: 1.7rem;
        margin-top: .6rem;
        margin-left: 1rem;
      }
      .g2{
          width: 2rem;
          height: 1.9rem;
        margin-top: .6rem;
        margin-left: 7rem;
      }
      p{
         color: #595959;
         font-size: 1.2rem;
         margin-left: 7rem;
         margin-top: .6rem;
      }
    }
    .d2{
         width: 100%;
        height: 3rem;
        border-bottom: 1px solid #d4d4d4;
    }
    .d3{
        width: 100%;
        height: 11.5rem;
        img{
            width: 10.6rem;
            margin-left: 7rem;
        }
       
    }
     p{
              color: #595959;
              margin-left: 5.5rem;
              margin-top: .4rem;
              font-size: .9rem;
              
        }
}
</style>