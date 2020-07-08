
<style scoped>

</style>


<template>
    <div class="mylesson">
        <van-nav-bar
        title="我的学习"
        right-text="目"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
        />
        <div class="card">
            <ul class="titlist">
                <li  v-for='(m,i) in carddata' :key='i'
                    @click="lessonindex=i"
                >
                    {{ m.name+'('+m.list.length+')' }}
                </li>
            </ul>
            <ol class="cttlist">
                <li 
                    v-for='(m,i) in carddata[lessonindex].list' :key='i'

                >
                <div>{{ m.lesson }}</div>
                <div>{{ m.term }}</div>
                <div>{{ '学习进度'+m.learnstep+'%' }}</div>
                </li>
            </ol>
        </div>
    </div>
</template>

v-for='(m,i) in carddata[lessonindex].list' :key='i'
<script>
export default {
    data() {
        return {
            carddata:[
                {name:'直播课',list:[{lesson:'开课啦',term:'猴年马月',learnstep:0}]},
                {name:'点播课',list:[]},
                {name:'音频课',list:[]},
                {name:'图文课',list:[]},
                {name:'面授课',list:[]},
                {name:'会员课',list:[]}
            ],
            lessonindex:0,
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