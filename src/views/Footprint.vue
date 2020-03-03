<template>
    <div>
        <div v-for='(v,i) in this.$store.state.list' :key='i' class="line">{{v.v}}</div>
    </div>
</template>

<script>
export default {
  methods: {
  },
  computed: {
    changeFoot() {
      return this.$store.getters.changeFoot;
    }
  },
  created(){
      this.$store.getters.changeArr;
  }
};
</script>

<style lang="less" scoped>
.line{
    font-size: 24px;
    text-align: center;
    padding: 10px;
    border-bottom: 1px solid #ccc;
}
</style>