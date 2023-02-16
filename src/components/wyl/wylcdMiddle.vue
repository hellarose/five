<template>
 <div class='wyl_big'>
  <div class="cd-body">
      <!-- main1 -->
      <div class="cd-info">
        <p class="info-title">李老师16号到22号地理大课堂开课啦hahhahahhahhahahhhhhhhhhhhhh</p>
        <i class="info-collect"></i>
        <p class="info-price cd-free">免费</p>
        <p class="info-price">
          <img
            src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png"
            class="price-ico"
          />
          <font>1.00</font>
          <!---->
          <!---->
        </p>
        <div>
          <p class="info-com">共8课时 | 38人已报名</p>
          <p class="info-com">开课时间：2020.03.16 18:30 - 2020.03.22 15:00</p>
        </div>
      </div>
      <!-- main2 -->
      <div class="cd-teachers com-style">
        <p class="cd-title">教学团队</p>
        <ul>
          <li>
            <img src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg" />
            <span>李青</span>
          </li>
        </ul>
      </div>
      <!-- main3-->
      <div id="tro" class="cd-tro com-style">
        <p class="cd-title">课程介绍</p>
        <div class="cd-details">
          <p>用描点法画出二次函数y＝－x^2的图象</p>
        </div>
      </div>

      <!-- main4 -->
      <div id="list" class="cd-list com-style">
        <p class="cd-title">课程大纲</p>
        <div class="charpter">
          <div>
            <section class="period">
              <div class="charp-title">
                <span class="huifang">回放</span>
                第一讲第一课时
              </div>
              <p class="charp-time">
                李青
                <span>03月08日 10:30 - 12:30</span>
              </p>
            </section>
            <section class="period">
              <div class="charp-title">
                <span class="huifang">回放</span>
                第一讲第er课时
              </div>
              <p class="charp-time">
                李青
                <span>03月08日 10:30 - 12:30</span>
              </p>
            </section>
            <section class="period">
              <div class="charp-title">第九讲： 用描点法画出二次函数y＝－x^2的图象</div>
              <p data-v-8247b44a class="charp-time"></p>
            </section>
          </div>
        </div>
        <!---->
      </div>

      <!-- main5 -->
      <div id="com" class="cd-comment com-style">
        <p class="cd-title">课程评论</p>

        <div class="com-item-page">
          <!-- one  list -->
          <div role="feed" class="van-list">
            <ul>
              <li>
                <div class="evaluate-top">
                  <img
                    src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20206kRSVtmcMX1589444592.jpg"
                  />
                  <div class="evaluate-t-left">
                    <div class="info">
                      <span>15910732068</span>
                      <van-rate
                        class="van-rate"
                        v-model="value"
                        :size="15"
                        color="#ffd21e"
                        void-icon="star"
                        void-color="#eee"
                        :gutter="0.2"
                        touchable="false"
                      />

                      <span class="times">2020-04-23 14:56</span>
                    </div>
                    <!---->
                    <div class="evaluate-btom">very go o g</div>
                  </div>
                </div>
              </li>
              <li>
                <div class="evaluate-top">
                  <img
                    src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20206kRSVtmcMX1589444592.jpg"
                  />
                  <div class="evaluate-t-left">
                    <div class="info">
                      <span>15910732068</span>
                      <van-rate
                        class="van-rate"
                        v-model="value"
                        :size="15"
                        color="#ffd21e"
                        void-icon="star"
                        void-color="#eee"
                        :gutter="0.2"
                        touchable="false"
                      />

                      <span class="times">2020-04-23 14:56</span>
                    </div>
                    <!---->
                    <div class="evaluate-btom">very go o g</div>
                  </div>
                </div>
              </li>
            </ul>
            <div class="van-list__placeholder"></div>
          </div>

          <!-- two empty -->
          <div class="empty">
            <img src="../../assets/record.png" />
            <p data-v-0fa74510>暂无评论</p>
          </div>
        </div>
      </div>
      <div class="a111"></div>
    </div>

 </div>
</template>

<script>
export  default  {
 name:  '',
 data()  {  
  return  {
value:'2'
  }
 },
 props:  {

 },
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
// main
  .cd-body {
    text-align: left;
    background: #f0f2f5;
    padding-bottom: 0.4rem;
    box-sizing: border-box;

    // main1
    .cd-info {
      width: 100%;
      padding: 0.25rem;
      background: #fff;
      position: relative;

      .info-title {
        font-size: 0.38rem;
        // font-weight: bold;
        color: #333;
        padding-right: 1.06rme;
        line-height: 0.613rem;
      }

      .info-collect {
        position: absolute;
        right: 0.26667rem;
        top: 0.13333rem;
        width: 0.66667rem;
        height: 0.66667rem;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAFzUlEQ…bMWnvQ87z3+5pW+wInzV9HR0et53ljmfl4FEXb0ul0n1X/X3aekNJzvTGgAAAAAElFTkSuQmCC)
          no-repeat 50%;
        background-size: 0.48rem 0.48rem;
      }

      .info-price {
        color: #eb6100;
        font-size: 0.4rem;
        img {
          width: 0.24rem;
          height: 0.24rem;
        }
        font {
          font-size: 0.45333rem;
          font-weight: 500;
          color: #ee1f1f;
          line-height: 0.85333rem;
        }
      }

      > div {
        .info-com {
          font-size: 0.32rem;
          font-weight: 400;
          color: rgba(0, 0, 0, 0.45);
          line-height: 0.8rem;
        }
      }
    }

    // main2
    .com-style {
      margin-top: 0.25rem;
      background: #fff;
      padding: 0.13rem 0.26rem;

      .cd-title {
        font-size: 0.32rem;
        font-weight: 500;
        color: #262626;
        padding-top: 0.2rem;
      }
      > ul {
        display: flex;
        flex-wrap: wrap;
        padding: 0.28rem 0;
        li {
          width: 20%;
          height: 1.6rem;
          display: flex;
          align-items: center;
          flex-direction: column;
          box-sizing: border-box;
          img {
            width: 0.8rem;
            height: 0.8rem;
            border-radius: 50%;
          }
          > span {
            padding: 0.21rem 0 0 0.4rem;
            font-size: 0.28rem;
            color: #595959;
          }
        }
      }
    }

    // main3
    .cd-tro {
      margin-top: 0.25rem;
      background: #fff;
      padding: 0.13rem 0.26rem;

      .cd-details {
        font-size: 0.36rem;
        padding: 0.4rem 0.13rem;
        p {
          width: 100%;
          font-size: 0.28rem;
        }
      }
    }

    // main4
    .cd-list {
      .charpter {
        padding: 0.2rem 0.26rem;
        section.period {
          padding: 0.1rem 0 0 0;
          .charp-title {
            position: relative;
            padding-left: 0.4rem;
            line-height: 0.8rem;
            font-size: 0.26rem;
            font-weight: 400;
            color: #595959;
            span.huifang {
              background: #ea7a2f;
              display: inline-block;
              width: 0.8rem;
              margin-right: 0.1rem;
              padding: 0 0.13333rem;
              height: 0.38rem;
              border-radius: 0.05333rem;
              font-size: 0.26rem;
              font-weight: 400;
              color: hsla(0, 0%, 100%, 0.85);
              line-height: 0.38rem;
              text-align: center;
            }
          }

          .charp-title:after {
            content: "";
            position: absolute;
            left: 0.05333rem;
            left: 0.53333vw;
            top: 50%;
            transform: translateY(-50%);
            width: 0.10667rem;
            width: 1.06667vw;
            height: 0.10667rem;
            height: 1.06667vw;
            border-radius: 50%;
            background: #eb6100;
          }

          .charp-time {
            font-size: 0.26rem;
            color: #8c8c8c;
            padding-left: 0.13rem;
            padding-bottom: 0.2rem;
            > span {
              padding-left: 0.2rem;
            }
          }
        }
      }
    }

    // main5
    .cd-comment {
      .com-item-page {
        //   one  list
        .van-list {
          // one1
          ul {
            list-style: none;

            li {
              padding: 0.2rem 0.2rem;
              .evaluate-top:nth-last-of-type(1) {
                border: 0;
              }
              .evaluate-top {
                display: flex;
                > img {
                  width: 0.6rem;
                  height: 0.6rem;
                  border-radius: 50%;
                }
                .evaluate-t-left {
                  flex: 1;

                  .info {
                    display: flex;
                    padding-left: 0.26667rem;
                    align-items: center;
                    span:nth-of-type(1) {
                      flex: 1.5;
                      font-size: 0.28rem;
                      font-weight: 400;
                      color: #333;
                      margin-right: 0.1rem;
                    }
                    .vant-rate {
                      flex: 3;
                      height: 0.4rem;
                      box-sizing: border-box;
                      user-select: none;
                    }

                    span.times {
                      //   flex: 2;
                      display: inline-block;
                      font-size: 0.2rem;
                      color: #999;
                      text-align: right;
                    }
                  }
                }
                .evaluate-btom {
                  margin-top: 0.2rem;
                  line-height: 0.4rem;
                  padding-left: 0.27rem;
                  color: #999;
                  font-size: 0.26rem;
                }
              }
            }
          }
          // one2
          .van-list__placeholder {
            height: 0;
            pointer-events: none;
          }
        }

        // two empty
        .empty {
          flex-direction: column;
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 4rem;
            height: 4rem;
          }
          > p {
            font-size: 0.3rem;
            color: #8c8c8c;
            text-align: center;
          }
        }
      }
    }
    .a111 {
      height: 0.9rem;
      background: #fff;
    }
  }

}
</style>
