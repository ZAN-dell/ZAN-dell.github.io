<template>
  <div id="data">
    <el-row id="header">
      <el-button type="primary" @click="printpage">导出为pdf</el-button>
    </el-row>
    <el-container>
      <el-aside class="aside" width="70%">
        <resume-model ref="model" id="printContent"></resume-model>
      </el-aside>
      <el-main class="main">
        <data-config @emit-event="emitEvent" @ready="dataReady"></data-config>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import DataConfig from '@/components/DataConfig.vue'
import ResumeModel from '@/components/ResumeModel.vue'
import htmlToPdf from '@/utils/htmlToPdf.js'
export default {
  name: 'HomePage',
  components: { DataConfig, ResumeModel },
  methods: {
    emitEvent(data, target) {
      this.$refs.model.setData(target, data)
    },
    printpage() {
      // const newstr = document.getElementById('printContent').innerHTML
      // const oldstr = document.body.innerHTML
      // document.body.innerHTML = newstr
      // window.print()
      // document.body.innerHTML = oldstr
      // return false
      htmlToPdf.getPdf('简历', document.querySelector('#printContent'))
    },
    dataReady() {
      this.$refs.model.setOwnData()
    }
  },
  mounted() {
    // window.onbeforeunload = () => {
    //   return ''
    // }
  }
}
</script>

<style>
#data {
  padding-top: 5%;
}
.aside {
  padding: 10px;
}
.el-divider__text.is-left {
  transform: translateY(-28%);
}
.el-divider--horizontal {
  margin: 5px 0;
}
.el-divider {
  background-color: rgb(92, 121, 163);
  height: 2px;
}
#header {
  position: absolute;
  top: 1%;
  right: 5%;
}
#save {
  margin-right: 20px;
}
</style>
