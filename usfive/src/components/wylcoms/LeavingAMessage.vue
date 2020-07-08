<template>
  <div class="wyl_big">
    <div class="wyl_context">
      <div class="wyl_header">
        <header>
          <div>给我们留言</div>
          <van-icon name="arrow-down  wyl_icon" color="#fff" size="0.2rem" @click="back" />
        </header>
      </div>

      <div class="wyl_main">
        <div class="wyl_main2" v-show="!smallShow">
          <!-- 空白处 -->
          <div class="wyl_msg">您好，很抱歉我们暂时无法为您提供服务，如需帮助，请留言，我们将尽快联系并解决您的问题</div>
          <!--  手机号  留言内容-->
          <ul>
            <li>
              <div class="name">手机</div>
              <input
                type="text"
                placeholder="请输入"
                name="tel"
                class="user-input__Input-sc-18asqqn-0 cQcTXH"
                value
              />
            </li>
            <li>
              <div class="name">
                留言内容
                <span>*</span>
              </div>
              <textarea
                placeholder="请输入"
                name="content"
                class="message-form__Textarea-we4f09-4 fFVkyV"
              ></textarea>
            </li>
          </ul>
          <!-- submit -->
          <div class="wyl_submit">
            <a height="40px" width="100%" @click="submit">
              <span >提交</span>
            </a>
          </div>
        </div>
        <!---->
        <div class="wyl_main3" v-show="smallShow">
          <h2 class="wyl_msg_success">留言成功</h2>
          <p class="wyl_msg_contact">我们会尽快联系你</p>
          <div class="wyl_close">
            <a width="100%" class="button__Anchor-sc-1v9a63l-0 kdecft" @click="back">
              <span>关闭</span>
            </a>
          </div>
          <p class="wyl_back_again">
            <a width="auto" height="auto" @click="submit">
              <span>再次留言</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
        smallShow:false,
    };
  },
  props: {},
  components: {},
  mounted() {},
  methods: {
      submit(){
          this.smallShow=!this.smallShow;
      },
      back(){
          this.$router.push({
               path:'/WylCC'
          }
          )
      }
  }
};
</script>

<style scoped lang='less'>
.wyl_big {
  background: rgb(242, 243, 245);
  font-size: 0.32rem;
  text-align: left;

  //   header
  .wyl_header {
    width: 100%;
    height: 0.6rem;
    background: rgb(0, 122, 255);
    header {
      padding: 0.1rem;
      width: 96%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      div {
        font-size: 0.18rem;
        height: 0.4rem;
        color: #fff;
        line-height: 0.4rem;
        text-align: left;
        flex: 6;
      }
      .wyl_icon {
        flex: 1;
        text-align: right;
      }
    }
  }

  // main
  .wyl_main {
    width: 100%;
    height: 100%;

    // main2 显示
    .wyl_main2 {
      width: 96%;
      margin: 0 auto;
      background: rgb(242, 243, 245);
      .wyl_msg {
        width: 100%;
        font-size: 0.14rem;
        color: rgb(102, 102, 102);
        word-break: break-all;
        padding: 0.16rem;
        height: 0.6rem;
      }

      ul {
        width: 100%;
        li {
          margin-bottom: 0.16rem;
          div.name {
            color: rgb(68, 68, 68);
            font-size: 0.14rem;
            padding: 0 0 0.06rem 0.16rem;
          }
          > input {
            width: 100%;
            height: auto;
            padding: 0.12rem;
            border-width: initial;
            border-style: none;
            border-color: initial;
            border-image: initial;
          }
          // from online
          input:not([type="image" i]) {
            box-sizing: border-box;
          }

          input {
            text-rendering: auto;
            letter-spacing: normal;
            word-spacing: normal;
            text-transform: none;
            text-indent: 0px;
            text-shadow: none;
            display: inline-block;
            text-align: start;
            cursor: text;
            margin: 0em;
            font: 400 13.3333px Arial;
          }

          .fFVkyV {
            display: block;
            width: 100%;
            height: 90px;
            overflow-x: hidden;
            overflow-y: auto;
            resize: none;
            background-color: rgb(255, 255, 255);
            word-break: break-all;
            font-size: 12px;
            -webkit-appearance: none;
            padding: 12px 16px;
            outline: 0px;
            border-width: initial;
            border-style: none;
            border-color: initial;
            border-image: initial;
          }
          textarea {
            text-rendering: auto;
            letter-spacing: normal;
            word-spacing: normal;
            text-transform: none;
            text-indent: 0px;
            text-shadow: none;
            display: inline-block;
            text-align: start;
            flex-direction: column;
            resize: auto;
            cursor: text;
            white-space: pre-wrap;
            overflow-wrap: break-word;
            box-sizing: border-box;
            margin: 0em;
            font: 400 13.3333px Arial;
          }
        }
      }

      .wyl_submit {
        padding: 0 0.2rem 0.2rem;
        a {
          width: 100%;
          height: 40px;
          line-height: 40px;
          display: inline-block;
          vertical-align: middle;
          font-size: 13px;
          cursor: pointer;
          text-align: center;
          opacity: 1;
          color: white;
          border-width: 0px;
          border-style: initial;
          border-color: initial;
          border-image: initial;
          outline: none;
          border-radius: 3px;
          text-decoration: none;
          background: rgb(0, 122, 255);
          span {
            line-height: 0.4rem;
            font-size: 0.13rem;
            text-align: center;
            color: #fff;
          }
        }
      }
    }

    // main3 吟唱
    .wyl_main3 {
      text-align: center;
      background: #fff;
      .wyl_msg_success {
        text-align: center;
        margin-top:0.3rem;
      }

      p.wyl_msg_contact {
        font-size: 0.14rem;
        margin: 0.2rem 0;
      }

      div.wyl_close {
        width: 1.5rem;
        margin: 0px auto;

        a {
          width: 100%;
          height: 0.32rem;
          line-height: 0.32rem;
          display: inline-block;
          font-size: 0.14rem;
          color: white;
          border-width: 0;
          border-style: initial;
          border-color: initial;
          border-image: initial;
          outline: none;
          border-radius: 0.03rem;
          text-decoration: none;
          background: rgb(0, 122, 255);
        }
      }

      p.wyl_back_again {
        font-size: 0.14rem;
        margin: 0.2rem 0;
        a {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>