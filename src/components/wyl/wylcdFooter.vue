<template>
 <div class='wyl_big'>
  <button class="course-btn van-button">
      <span class="van-button__text">
       {{aaa}}
      </span>
    </button>
 </div>
</template>

<script>
export  default  {
 name:  '',
 data()  {  
  return  {

  }
 },
 props:  ['aaa'],
 components:{
 },
 mounted()  {

 },
 methods:{

 },
  }
</script>

<style  scoped lang='less'>
.wyl_big{background:red;
 .course-btn {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #eb6100;
    font-size: 0.38rem;
    font-weight: 400;
    color: #fff;
    border: 0.01rem solid #ebedf0;
    display: inline-block;
  }
}
</style>