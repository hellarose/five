<template>
 <div class="options">
    <van-nav-bar title="设置" left-text left-arrow @click-left="onClickLeft" />
    <p @click="toSet">
        <span>设置密码</span>
        <van-icon name="arrow" />
    </p>
    <div class="btn-box">
        <div class="btn">退出登录</div>
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
        onClickLeft() {
            this.$router.go(-1)
        },
        toSet() {
            this.$router.push('/set-new-pass')
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
*{
    margin: 0;
    padding: 0;
}
.options{
    background: #f0f2f5;
    height: 100%;
    >p{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 .3rem;
        margin-top: .2rem;
        background: #fff;
        font-size: .3rem;
        height: 1.5rem;
        color: #595959;
    }
    >.btn-box{
        overflow: hidden;
        height: 4rem;
        background: #fff;
        >.btn{
            background: #eb6100;
            color: #fff;
            width: 90%;
            height: .9rem;
            border-radius: .15rem;
            font-size: .38rem;
            text-align: center;
            line-height: .9rem;
            margin: 2rem auto;
        }
    }
}
</style>