<template>
  <div class="header">
      <div class="div1">
        <router-link to="/lianxi">
        <van-icon class="g1" name="arrow-left" />
        </router-link>
             <p>题库选择</p>
      </div>
      <div class="div2">
        <van-search class="aa"  placeholder="请输入搜索关键词" />
          <!-- <input type="text" placeholder="请输入题库名称关键词"> -->
      </div>
        <div class="div3">
           
            
          <div class="left">
               <div class="ding">
                    <p>求导题库</p>
            </div>
              <ul>
                  <li>极限题库</li>
                  <li>生物</li>
                  <li>化学</li>
                  <li>数学</li>
                  <li>物理</li>
                  <li>英语</li>
              </ul>
          </div>
          <div class="right">
              <p>洛必达法则</p>
          </div>
        </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  props: [],
  components: {},
  mounted() {},
  methods: {}
};
</script>

<style lang="scss">
.header {
  width: 100%;
  .div1{
      width: 100%;
      height: 3rem;
      display: flex;
    
      .g1{
          width: 1rem;
          height: 1.2rem;
        margin-top: .6rem;
        margin-left: 1rem;
      }
      p{
         font-size: 1.2rem;
         margin-left: 7rem;
         margin-top: .6rem;
      }
  }
  .div2{
      width: 100%;
      height: 4rem;
      border-bottom: 1px solid #d4d4d4;
      .aa{
          width: 21rem;
          height: 3.3rem;
          margin-left: 1rem;
          border-radius: 1.5rem;
          border: 0;
          background: #F7F8FA;
          line-height: 3rem;
          font-size: .76rem;
          padding-left: 1rem;
      }
  }
  .div3{
      display: flex;
      .ding{
          width: 7rem;
          height: 4.6rem;
            background: white;
              p{
              width: 3rem;
               margin-left: 1.5rem;
              padding-top: 1rem;
          }
      }
      .left{
          width: 6rem;
          height: 35rem;
          background: #FAFAFA;
        
          ul{
              width: 3rem;
              margin-left: 1.5rem;
              margin-top: 2rem;
              li{
                  margin-top: 2rem;
                    color: #595959;
              }
          }
      }
      .right{
          margin-left: 1.5rem;
          color: #595959;
          margin-top: 1.5rem;
          font-size: .8rem;
      }
  }
}
</style>