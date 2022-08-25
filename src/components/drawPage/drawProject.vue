<template>
  <div class="drawProject">
    <el-row class="title">项目经历</el-row>
    <el-divider></el-divider>
    <div v-for="item in formArray" :key="item.id" class="item">
      <el-row>
        <span class="name">{{ item.name }}</span>
        <span class="role">{{ item.role }}</span>
      </el-row>
      <el-row>
        <span class="label" v-if="item.skill">相关技术栈：</span>
        <span class="content">{{ item.skill }}</span>
      </el-row>
      <el-row v-if="item.link"
        ><span class="label">作品链接：</span>
        <span class="content">
          <a :href="item.link">{{ item.link }}</a>
        </span></el-row
      >
      <el-row
        ><span class="label">项目描述：</span>
        <span class="content">{{ item.discription }}</span></el-row
      >
      <el-row
        ><span class="label">主要工作：</span>
        <span class="content">{{ item.main }}</span></el-row
      >
    </div>
  </div>
</template>

<script>
import mixin from './mixin'
export default {
  name: 'drawProject',
  mixins: [mixin],
  data() {
    return {
      formArray: []
    }
  },
  created() {
    this.changeModel('Project')
  }
}
</script>

<style scoped lang="less">
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
.drawProject {
  position: relative;
  width: 100%;
  font-size: 12px;
}
.name {
  float: left;
  font-size: 14px;
  font-weight: 600;
}
.role {
  font-size: 12px;
  float: left;
  font-weight: 600;
  margin: 0 50px;
  padding: 3px 8px;
  border-radius: 4px;
  background-color: #4980e6f8;
  opacity: 0.8;
  color: #fff;
}
.label {
  float: left;
  font-weight: 600;
  height: 100%;
}
.item {
  margin: 10px 0 15px 0;
}
.content {
  text-align: left;
  text-indent: 2em;
}
span {
  float: left;
}
</style>
