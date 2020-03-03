<template>
    <div>
        <router-view/>
        <div class="foot">
            <div><router-link to='/'>首页</router-link></div>
            <div><router-link to='/footprint'>足迹</router-link></div>
            <div><router-link to='/user'>用户</router-link></div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.foot {
  position: fixed;
  bottom: 0;
  height: 50px;
  display: flex;
  justify-content: space-around;
  width: 100%;
  background-color: #ccc;
  div {
    width: 30%;
    text-align: center;
    line-height: 50px;
    font-size: 18px;
    .router-link-exact-active {
      color: red;
    }
  }
}
</style>