
<style lang="scss" scoped>
.commonLayoutWrapper {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>

<template>
  <div class="commonLayoutWrapper">
    <main><router-view  /></main>
    <footer><footBar /> </footer>
  </div>
</template>

<script>
import footBar from '@/components/footbar'
export default {
    components:{footBar},
    data(){return {}},
    computed:{},
    methods:{},
    created(){},
    mounted(){},

}
</script>
