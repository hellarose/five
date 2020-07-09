<template>
  <div>
    <van-nav-bar title="意见反馈" left-text left-arrow @click-left="onClickLeft" />
    <textarea name="" id="" cols="30" rows="10" maxlength="500" placeholder="请输入您的意见"></textarea>
    <p class="max">0/500</p>
    <div class="btn">提交</div>
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

<style scoped>
p{
    margin: 0;
}
textarea{
    font-size: .28rem;
    padding: .2rem .25rem;
    border-radius: .15rem;
    height: 4.4rem;
    width: 80%;
    margin-top: .25rem;
}
.max{
    color: #b7b7b7;
    text-align: right;
    margin-right: 6%;
    margin-top: .2rem;
    font-size: .25rem;
}
.btn{
    background-color: #eb6100;
    color: #fff;
    width: 90%;
    height: .9rem;
    line-height: .9rem;
    font-size: .3rem;
    border-radius: .15rem;
    margin: 1.5rem auto;
}
</style>