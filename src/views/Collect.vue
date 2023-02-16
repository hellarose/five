<template>
 <div id="concem">
 <!-- 我的（模态框）*+12* 页面+个人信息+设置+余额明细  -->
 <van-nav-bar
  title="我的收藏"
  left-text=""
  left-arrow
  @click-left="onClickLeft"
/>

<div class="empty">
    <img src="../assets/pic/nothing-heart.png" alt="">
    <p>暂无收藏</p>
</div>
 </div>
</template>

<script>
export  default  {
 name:  '',
 data()  {  
  return  {

  }
 },
 props:  {

 },
    created() {

},
    mounted() {

},
    methods: {
onClickLeft(){
    this.$router.go(-1)
}
},
    computed: {

},
    watch: {

},
    filters: {

},
    directives: {

},
    components: {

},
};
</script>

<style  scoped lang="less">
#concem{
    height: 100%;
    background: #f0f2f5;
}
.empty{
    margin-bottom: .5rem;
    >img{
        width: 4.5rem;
        height: 4.5rem;
    }
    >p{
        font-size: 0.3rem;
        color: #8c8c8c;
        margin-top: .2rem;
    }
}
</style>