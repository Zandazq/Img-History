<template>
    <div class="user">
        <div class="line">
            <img :src='oldImg'>
            <button @click='changeImg=!changeImg'>更换照片</button>
        </div>
        <div class="bottom" v-show='changeImg'>
            <img :src='v.src' v-for='(v,i) in this.$store.state.img' :key='i' @click='change(v.src)'>
        </div>
        <!-- <p>{{this.$store.getters.change}}</p> -->
    </div>
</template>

<script>
export default {
  data() {
    return {
      changeImg: false,
      oldImg:'http://img2.imgtn.bdimg.com/it/u=171346210,1077224344&fm=26&gp=0.jpg'
    };
  },
  methods: {
    //   获取到跟换的图片
    change(v) {
        this.oldImg=v;
    }
  },
  computed:{
      getImg(){
          return this.$store.getters.change;
      }
  }
};
</script>

<style lang="less" scoped>
.user {
  margin-bottom: 50px;
  .line {
    img {
      width: 70%;
    }
  }
  .bottom {
    img {
      width: 50%;
      cursor: pointer;
    }
  }
}
</style>