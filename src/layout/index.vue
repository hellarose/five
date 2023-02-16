
<style lang="scss" scoped>
.commonLayoutWrapper {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
}
</style>

<template>
  <div class="commonLayoutWrapper">
    <main><router-view  /></main>
    <footer><footBar /> </footer>
    <dragball />
  </div>
</template>

<script>
import footBar from '@/components/footbar'
import dragball from '@/components/dragball'
export default {
    components:{footBar,dragball},
    data(){return {}},
    computed:{},
    methods:{},
    created(){},
    mounted(){},

}
</script>
