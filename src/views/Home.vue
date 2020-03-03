<template>
  <div class="home">
    <div class="headIcon">
        <a href="#">
          <Icon type="ios-add-circle-outline" />
        </a>
        <a href="#">
          <Icon type="ios-american-football" />
        </a>
        <a href="#">
          <Icon type="md-appstore" />
        </a>
        <a href="#">
          <Icon type="md-arrow-dropright-circle" />
        </a>
        <a href="#">
          <Icon type="md-beer" />
        </a>
        <a href="#">
          <Icon type="ios-bonfire" />
        </a>
        <a href="#">
          <Icon type="ios-build-outline" />
        </a>
        <a href="#">
          <Icon type="md-call" />
        </a>
    </div>
    <h2>超值特惠</h2>
    <div class="odds">
      <div>
        <img src="../assets/images/lion.jpg" alt="">
      </div>
      <div>
        <img src="../assets/images/lion.jpg" alt="">
      </div>
      <div>
        <img src="../assets/images/lion.jpg" alt="">
      </div>
    </div>
    <h2>猜你喜欢</h2>
    <div class="gussLike">
      <div v-for='(v,i) in this.$store.state.goods' :key='i' class="goods" @click='addTo(v.name,i)'>{{v.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    addTo(v,i){
      // var obj={v,i};
      // console.log(obj)
      return this.$store.commit('foot',{v,i});
    }
  },
};
</script>
<style lang="less" scoped>
.home {
  .headIcon {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    border: 1px solid #000;
    padding: 20px;
    margin-bottom: 20px;
    text-align: center;
    line-height: 30px;
    a {
      display: inline-block;
      width: 24%;
      .ivu-icon {
        font-size: 36px;
      }
    }
  }
  .odds{
    display: flex;
    justify-content: space-around;
    padding: 10px;
    border: 1px solid #999;
    div{
      text-align: center;
      img{
        width: 95%;
      }
    }
  }
  .gussLike{
    .goods{
      height: 50px;
      line-height: 50px;
      font-size: 24px;
      text-align: center;
      border: 1px solid #000;
    }
  }
}

</style>
