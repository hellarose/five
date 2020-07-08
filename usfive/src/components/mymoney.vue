
<style scoped>

</style>


<template>
    <div class="mymoney">
        
        <van-nav-bar
        title="我的余额"
        right-text="余额明细"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
        />
        <div class="remainmoney">
            我的余额 {{ remainmoney }} 学习币
        </div>
        <ul class="list">
            <li
                v-for='(m,i) in costlist' :key='i'
            >
                <span>{{ m }}.00学习币</span>
                <span class="red">￥{{ m }}.00</span>
            </li>
        </ul>
        <div class="payall">
            <button>立即充值</button>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            remainmoney:0,
            costlist:[3000,2000,1000,500,250,100]
        };
    },
    created(){

    },
    mounted(){

    },
    //props:{},//[]
    methods:{
        onClickLeft(){
            this.$router.go(-1)
        },
        onClickRight(){
            
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