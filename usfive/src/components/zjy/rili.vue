<template>
  <div class="zjy_box">
    <router-view />
  

    <div class="zjy_top">
      <div>
        <van-icon size="0.7rem" name="arrow-left" />
      </div>
      <div>学习日历</div>
      <div></div>
    </div>
    <!-- <router-link to='/ins'>ins页面直通车</router-link> -->
    <div>
    <van-calendar  color="#EF7E2F" :show-title="false" :show-subtitle="false" :poppable="false" :show-confirm="false" :style="{ height: '500px' }" />

    </div>
    <div class="zjy_bt">
      6月30日
      <span>当天0节课</span>
    </div>
  </div>
</template>

<script>
export default {
  // name: 'HelloWorld',
  // props: {
  //   msg: String
  // }
  data() {
    return {


    };
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.zjy_top{
  width: 100%;
  height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
}
.zjy_top>div:nth-of-type(1){
  color:#6F6F6F;

}
.zjy_top>div:nth-of-type(2){
  font-size: 0.45rem;
  color:#6F6F6F;
}
.zjy_bt{
  color:#EF7E2F;
  font-size: 0.3rem;
  margin-left: 0.3rem;
  margin-top: 0.3rem;



  span{
  color:#ACACAC;
  margin-left: 0.2rem;
  font-size: 0.23rem;


  }
}

</style>
