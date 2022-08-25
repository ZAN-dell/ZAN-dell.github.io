<template>
  <div class="drawIntroduce">
    <el-row class="title">自我介绍</el-row>
    <el-divider></el-divider>
    <p>{{ introduce }}</p>
  </div>
</template>

<script>
export default {
  name: 'drawIntroduce',
  props: {
    introduce: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="less" scoped>
.el-divider--horizontal {
  margin: 5px 0;
}
.el-divider {
  background-color: rgb(88, 134, 198);
  height: 2px;
}
.el-divider--horizontal {
  margin: 2px 0px 4px 0;
}
.title {
  font-size: 0.5rem;
  font-weight: 600;
  color: #4980e6f8;
  text-align: left;
}
p {
  text-align: left;
  text-indent: 3em;
}
</style>
