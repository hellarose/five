
<style scoped>

</style>


<template>
    <div>
        <div v-if='token' class="self">
            <button @click="tomylesson">我的特色棵</button>
            <button @click="tomymoney">我的学习币</button>
        </div>
        <div v-else class="tosign">
                <div class="commonwidth">
                    <div class="logobox">
                        <img src="../img/logo.png" alt="">
                    </div>
                    <div v-if="onsignin" class="signarea">
                        <div class="poor"><input v-model="phone" type="text" placeholder="输入手机号"></div>
                        <div class="poor"><input v-model="sn" type="password" placeholder="输入密码"></div>
                        <div class="poor two">
                            <span><button>找回密码</button></span>
                            <span>
                                <button @click='onsignin=false'>注册</button>/<button>验证码登录</button>
                            </span>
                        </div>
                    </div>
                    <div v-else class="regarea">
                        <div class="poor">
                            <input type="text" placeholder="输入手机号">
                            <button class="orange">获取验证码</button>
                        </div>
                        <div class="poor"><input type="text" placeholder="输入验证码"></div>
                        <div class="poor two">
                            <span><i>未注册的手机号自动注册</i></span>
                            <span>
                                <button @click='onsignin=true'>使用密码登录</button>
                            </span>
                        </div>
                    </div>
                    <div><input type="button" value="登录" class="signbutton" @click='signin'></div>
                </div>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            token:false,
            onsignin:true,
            phone:'aaa',
            sn:'aaa',
        };
    },
    created(){

    },
    mounted(){

    },
    //props:{},//[]
    methods:{
        signin(){
            console.log(123)
            if(this.phone=='aaa'&&this.sn=='aaa'){
                this.token=true;
            }
        },
        tomylesson(){
            console.log(this)
            this.$router.push({
                path:'/mylesson',
                query:{}
            })
        },
        tomymoney(){
            this.$router.push({
                path:'/mymoney',
                query:{}
            })
        }
    },
    computed:{

    },
    watch:{

    },
    filters:{

    },
    directives:{

    },
    components:{

    },
};
</script>