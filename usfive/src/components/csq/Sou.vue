<template>
  <div class="index">
      <div class="banner">
          <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019MGNW3BtiS91569839576.jpg" alt="">
      </div>

      <div class="content">
         <div class="index1">
        <ul>
          <li>特色课</li>
          <li>一对一辅导</li>
          <li>学习辅导</li>
        </ul>
      </div>
      <div class="dd1">
            <p class="p1">||</p>
            <p class="p2">{{list[0].channel_info.name}}</p>
            </div>
          <ul class="center">
          <li>
            <div class="center1"  v-for="(item,i) in list[0].list" :key="i">
                    <img :src="item.teacher_avatar" alt="">
                      <span>{{item.teacher_name}}</span>
                  <p>{{item.introduction}}</p>

            </div>
          </li>
      </ul>
      <!--  -->
      <div class="dd2">
          <p class="p1">||</p>
          <p class="p2">{{list[1].channel_info.name}}</p>
      </div>
      <ul class="left">
          <li>
            <div class="left1" v-for="(item,i) in list[1].list" :key="i">
                    <p>{{item.title}}</p>
                    <p>共{{item.total_periods}}课时</p>
                    <img :src="item.teachers_list[0].teacher_avatar" alt="">
                  <span>{{item.teachers_list[0].teacher_name}}</span>
                  <div class="box">
                       <span>{{item.sales_num}}人已报名</span>
                       <span class="pan1">免费</span>
                  </div>

            </div>
          </li>
      </ul>

      <!--  -->
      <div class="dd3">
          <p class="p1">||</p>
           <p class="p2">{{list[2].channel_info.name}}</p>
      </div>
      <ul class="leftt">
          <li>

            <div v-for="(item,i) in list[2].list" :key="i" class="leftt1">
                    <p>{{item.title}}</p>
                    <p>共{{item.total_periods}}课时</p>
                    <img :src="item.teachers_list[0].teacher_avatar" alt="">
                  <span>{{item.teachers_list[0].teacher_name}}</span>
                  <div class="box">
                      <span>{{item.sales_num}}人已报名</span>
                      <span class="pan1">免费</span>
                  </div>
            </div>
          </li>
      </ul>
      <!--  -->
      <ul class="centerr">
          <li>
            <h3>{{list[3].channel_info.name}}</h3>
            <div v-for="(item,i) in list[3].list" :key="i" class="center3">
                    <img :src="item.teacher_avatar" alt="">
                            <span>{{item.teacher_name}}</span>
                        <span class="p1">{{item.level_name}}</span>
                        <p>{{item.introduction}}</p>
            </div>
          </li>
      </ul>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  },
  created () {
    this.$axios.get('https://www.365msmk.com/api/app/recommend/appIndex').then((res) => {
      console.log(res)
      this.list = res.data.data
    })
  }
}
</script>
<style lang="scss" scoped>
.index{
    background: #F0F2F5;
    .index1{
      width: 98%;
      height: 6rem;
      ul{
        display: flex;
        margin: .5rem;
        li{
          width: 27%;
          height: 6rem;
          background: white;
          border-radius: .6rem;
          flex: 1;
          margin-left:  .9rem;
          text-align: center;
          line-height: 6rem;
        }
      }
    }

.banner{
    width: 100%;
    position: relative;
    top: 0;
    left: 0;
    img{
        width: 100%;
        height: 200px;
    }
}
.content{
    width: 100%;
    position: relative;
    top: -40px;
    left: 0;
}
img{
    width: 40px;
}
p{
    overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;
}
.dd1{
  width: 50%;
  height: 2.5rem;
  display: flex;
   margin-top: 1rem;
    margin-left: 1rem;
   .p1{
      color:#EB6100;
  }
  .p2{
    font-size: 1.2rem;
    margin-left: .5rem;
    color: #595959;
  }
}
.center{
 width: 97%;
  height: 19rem;
  li{
    height: 5rem;
    .center1{
         height: 5.5rem;
        background: white;
        margin-top: .8rem;
         border-radius: .2rem;
         margin-left: .7rem;
        img{
          width: 2rem;
          height: 2rem;
          margin-left: 1rem;
          margin-top: 1.1rem;
          border-radius: 50%;
        }
        span{
          margin-left: .8rem;
        }
        p{
          margin-left: 4rem;
          margin-top: 1rem;
          color: #B7B7B7;
           font-size: .8rem;
        }
    }

  }

}
.dd2{
  width: 50%;
  height: 2rem;
  display: flex;
   margin-top: 1rem;
    margin-left: 1rem;
   .p1{
      color:#EB6100;
  }
  .p2{
    font-size: 1.2rem;
    margin-left: .5rem;
    color: #595959;
  }
}

.left{
 width: 97%;
  height:83rem;
  li{
    height: 10rem;
    .left1{
         height: 10rem;
         background: white;
          padding-top: 1rem;
          margin-top: 1rem;
         border-radius: .2rem;
         margin-left: .7rem;
        img{
          width: 2rem;
          height: 2rem;
          margin-left: 1rem;
          margin-top: 1.1rem;
          border-radius: 50%;
          width: 2rem;
        }
        span{
          margin-top: 1rem;
          margin-left: .8rem;
           color: #B7B7B7;
           font-size: .8rem;
        }
        p{
          margin-left: 1rem;
           font-size: 1rem;
        }
    }

  }
  .box{
    width: 97%;
    height: 2.5rem;
    margin-top: 1rem;
    border-top: 1px solid #d4d4d4;
    margin-left: .3rem;
   // display: flex;
    span{
      line-height: 2.5rem;
      color: #B7B7B7;
      font-size: .8rem;
    }
    .pan1{
      margin-left: 13rem;
       color: #44A426;
        font-size: 1rem;
    }
  }

}


.leftt{  
 width: 97%;
  height:60rem;
  li{
    height: 10rem;
    .leftt1{
         height: 10rem;
         background: white;
          padding-top: 1rem;
          margin-top: 1rem;
         border-radius: .2rem;
         margin-left: .7rem;
        img{
          width: 2rem;
          height: 2rem;
          margin-left: 1rem;
          margin-top: 1.1rem;
          border-radius: 50%;
          width: 2rem;
        }
        span{
          margin-top: 1rem;
          margin-left: .8rem;
           color: #B7B7B7;
           font-size: .8rem;
        }
        p{
          margin-left: 1rem;
           font-size: 1rem;
        }
    }

  }
  .box{
    width: 97%;
    height: 2.5rem;
    margin-top: 1rem;
    border-top: 1px solid #d4d4d4;
    margin-left: .3rem;
   // display: flex;
    span{
      line-height: 2.5rem;
      color: #B7B7B7;
      font-size: .8rem;
    }
    .pan1{
      margin-left: 13rem;
       color: #44A426;
        font-size: 1rem;
    }
  }

}



.centerr{
   padding: 0.8rem;
   overflow: hidden;
}
.center3{
    margin-top: 1rem;
    padding: 20px;
    background: white;
    img{
        vertical-align: top;
    }
    .p1{
        color: orangered;
    }

   
 }
  .dd3{
  width: 50%;
  height: 2rem;
  display: flex;
   margin-top: 1rem;
    margin-left: 1rem;
   .p1{
      color:#EB6100;
  }
  .p2{
    font-size: 1.2rem;
    margin-left: .5rem;
    color: #595959;
  }
   }
}
</style>
