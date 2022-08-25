<template>
  <div class="drawCompany">
    <el-row class="title">工作经验</el-row>
    <el-divider></el-divider>
    <div v-for="item in formArray" :key="item.id" class="item">
      <el-row><span class="name">{{ item.name }} </span>
        <span class="department">{{ item.department }}</span>
        <span class="role">{{ item.role }}</span>
        <span class="time">{{ item.date1 }}--{{ item.date2 }}</span>
      </el-row>
      <p class="discription">{{ item.discription }}</p>
    </div>
  </div>
</template>

<script>
import mixin from './mixin'
export default {
  name: 'drawCompany',
  mixins: [mixin],
  data() {
    return {
      formArray: []
    }
  },
  created() {
    this.changeModel('Company')
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
.name {
  float: left;
  font-size: 14px;
  font-weight: 600;
}
.department {
  float: left;
  margin-left: 30px;
  padding-top: 2px;
  font-size: 10px;
  color: rgb(107, 107, 107);
}
.role {
  font-size: 12px;
  margin: 0 25px;
  padding: 3px 8px;
  border-radius: 4px;
  background-color: #4980e6f8;
  color: #fff;
  font-weight: 600;
}
.time {
  float: right;
  font-size: 10px;
  color: rgb(107, 107, 107);
}
p {
  margin: 2px 0 10px 0;
  font-size: 10px;
  text-align: left;
  padding: 0 25px;
}
.item {
  margin: 10px 0;
}
.discription {
  margin-top: 5px;
  text-indent: 2em;
}
</style>
