<template>
  <div class="pp">      
        <van-grid>

  <router-link to="/dan"><van-grid-item icon="photo-o" text="专点练习" />
   </router-link>
   <router-link to="/bca">
  <van-grid-item icon="photo-o" text="套卷练习" />
   </router-link>
    <router-link to="/cc">
  <van-grid-item icon="photo-o" text="仿真模考" />
  </router-link>
   <router-link to="/tt">
  <van-grid-item icon="photo-o" text="错题练习" />
  </router-link>
   <router-link to="/tta">
  <van-grid-item icon="photo-o" text="测评记录" />
  </router-link>
   <router-link to="/ttb">
  <van-grid-item icon="photo-o" text="习题收藏" />
  </router-link>
</van-grid>
      
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  props: [],
  components: {},
  mounted() {},
  methods: {}
};
</script>

<style lang="scss">
.pp{
    width: 100%;
    display: flex;
    .cc{
        flex: 1;
        width: 1rem;
        background: pink;
        font-size: .8rem;
    }
}
</style>