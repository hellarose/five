<template>
  <div>
    <van-nav-bar title="消息通知" left-text left-arrow @click-left="onClickLeft" />
    <ul>
        <li @click="toMessageDetail('课程通知')">
            <img src="../assets/pic/Course-n.png" alt="">
            <div>
                <p>课程通知</p>
                <p>暂无通知</p>
            </div>
        </li>
        <li @click="toMessageDetail('系统通知')">
            <img src="../assets/pic/System-n.png" alt="">
            <div>
                <p>系统通知</p>
                <p>暂无通知</p>
            </div>
        </li>
        <li @click="toMessageDetail('订单通知')">
            <img src="../assets/pic/order-n.png" alt="">
            <div>
                <p>订单通知</p>
                <p>暂无通知</p>
            </div>
        </li>
        <li @click="toMessageDetail('约课通知')">
            <img src="../assets/pic/Course-n.png" alt="">
            <div>
                <p>约课通知</p>
                <p>暂无通知</p>
            </div>
        </li>
        <li @click="toMessageDetail('考试通知')">
            <img src="../assets/pic/test-n.png" alt="">
            <div>
                <p>考试通知</p>
                <p>暂无通知</p>
            </div>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: '',
  data() { 
    return {

    }
  },
  props: {

  },
    created() {

},
    mounted() {

},
    methods: {
onClickLeft() {
      this.$router.go(-1);
    },
    toMessageDetail(str) {
        console.log(str)
        this.$router.push('/message-detail?title='+str)
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

<style scoped lang="less">
img{
    vertical-align: middle;
}
*{
    margin: 0;
    padding: 0;
}
ul{
    padding: .15rem .45rem;
    li{
        display: flex;
        padding: .4rem 0;
        border-bottom: .01rem solid #ddd;
        >img{
            width: 1rem;
            height: 1rem;
        }
        >div{
            margin-left: .25rem;
            >p{
                color: #595959;
            }
            >p:nth-of-type(1) {
                font-size: .32rem;
                margin-bottom: .15rem;
            }
            >p:nth-of-type(2) {
                font-size: .3rem;
            }
        }
    }
}
</style>