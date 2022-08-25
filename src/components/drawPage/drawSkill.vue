<template>
  <div class="drawSkill">
    <el-row class="title">专业技能</el-row>
    <el-divider></el-divider>
    <div v-for="item in formArray" :key="item.id" class="item">
      <el-row
        ><span>{{ item.skill }}</span
        ><span v-if="item.discription" class="discription"
          ><i class="el-icon-success"></i>{{ item.discription }}</span
        >
        <span class="rate"
          ><el-rate
            v-model="item.level"
            allow-half
            disabled
            :colors="['#4980e6f8', '#4980e6f8', '#4980e6f8']"
          ></el-rate></span
      ></el-row>
    </div>
  </div>
</template>

<script>
import mixin from './mixin'
export default {
  name: 'drawSkill',
  mixins: [mixin],
  data() {
    return {
      formArray: []
    }
  },
  created() {
    this.changeModel('Skill')
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
.rate {
  float: right;
  margin-right: 20px;
}
.item {
  text-align: left;
}
.discription {
  margin-left: 15px;
}
.el-icon-success {
  color: #4980e6f8;
  margin-right: 5px;
}
</style>
