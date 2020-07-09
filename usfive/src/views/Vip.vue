<template>
  <div class="vip">
    <van-nav-bar title="开通会员" left-text left-arrow @click-left="onClickLeft" />
    <div class="box-novip">
        <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/avatar.jpg" alt="">
        <div>
            <p>176****4598</p>
            <p>开通会员免费学习</p>
        </div>
    </div>
    <div class="bottom">
        <p>
            <span>购买会员</span>
            <span>购买会员可免费观看会员课程</span>
        </p>
        <div class="vip-item">
            <div>
                <p>季度会员</p>
                <p>
                    <img src="../assets/pic/gold.png" alt="">
                    <span>40.00</span>
                </p>
            </div>
             <div>
                <p>半年会员</p>
                <p>
                    <img src="../assets/pic/gold.png" alt="">
                    <span>75.00</span>
                </p>
            </div>
            <div>
                <p>月会员</p>
                <p>
                    <img src="../assets/pic/gold.png" alt="">
                    <span>15.00</span>
                </p>
            </div>
        </div>
    </div>
    <div class="btn">立即支付</div>
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

<style scoped lang="less">
.vip{
    background: #f0f2f5;
    height: 100%;
}
.box-novip{
    padding: .3rem .3rem;
    background: #fff;
    display: flex;
    align-items: center;
    >img{
        width: 1.1rem;
        height: 1.1rem;
    }
    >div{
        margin-left: .15rem;
        text-align: left;
        p{
            margin: 0;
        }
        >p:nth-of-type(1){
            font-size: .3rem;
            color: #595959;
        }
        >p:nth-of-type(2){
            font-size: .26rem;
            color: #8c8c8c;
        }
    }
}
.bottom{
    padding: .8rem .4rem;
    >p{
        margin: 0;
        padding: 0;
        text-align: left;
        display: flex;
        align-items: center;
        >span:nth-of-type(1) {
            color: #595959;
            font-size: .4rem;
            font-weight: 500;
        }
        >span:nth-of-type(2) {
            margin-left: .2rem;
            color: #8c8c8c;
            font-size: .3rem;
        }
    }
    .vip-item{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding-top: .3rem;
        >div{
            background: #fff;
            width: 1.9rem;
            height: 2.2rem;
            border: .01rem solid #d9d9d9;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            border-radius: .25rem;
            >p{
                margin: 0;
            }
            >p:nth-of-type(1){
                font-size: .28rem;
                color: #595959;
                margin-bottom: .26rem;
                font-weight: 550;
            }
            >p:nth-of-type(2) {
                color: #d5a322;
                font-size: .45rem;
                >img{
                    width: .26rem;
                }
            }
        }
    }
}
.btn{
    width: 90%;
    height: .9rem;
    line-height: .9rem;
    color: #fff;
    background: linear-gradient(90deg,#eac687,#c8ae84);
    border-radius: .5rem;
    font-size: .34rem;
    position: fixed;
    left: .3rem;
    bottom: .2rem;
}
</style>