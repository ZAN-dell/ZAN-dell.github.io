<template>
  <div class="drawEdu">
    <el-row class="title">教育背景</el-row>
    <el-divider></el-divider>
    <div class="body">
      <el-row v-for="(element, index) in formArray" :key="index"><span class="item">{{ `${element.date1}--${element.date2}` }}</span><span class="item">{{ element.school }}</span>
        <span class="item">{{ element.domain }}</span>
        <span class="item">{{ element.degree }}</span>
      </el-row>
    </div>
  </div>
</template>

<script>
import mixin from './mixin'
export default {
  name: 'drawEdu',
  mixins: [mixin],
  data() {
    return {
      formArray: []
    }
  },
  created() {
    this.changeModel('Edu')
  }
}
</script>

<style scoped lang="less" type="text/css" media="print">
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
.drawEdu {
  overflow: hidden;
  height: 60%;
}
.item {
  float: left;
  margin-right: 20px;
}
.body {
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
