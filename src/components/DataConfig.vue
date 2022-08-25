<template>
  <div class="dataContainer">
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item name="1">
        <template slot="title">
          <i class="el-icon-apple"></i>
          个人信息
        </template>
        <user-info :originData="originUserData" @saveItem="saveItem"></user-info>
      </el-collapse-item>
      <el-collapse-item name="6">
        <template slot="title">
          <i class="el-icon-ice-drink"></i>
          工作经历
        </template>
        <WorkExprience v-for="item in CompanyItems" :key="item" :number="item" @saveItem="saveItem" @deleteItem="deleteItem"></WorkExprience>
        <el-button type="primary" class="width" @click="addItem(CompanyItems)" v-if="showAddCompany">+ 继续添加</el-button>
      </el-collapse-item>
      <el-collapse-item name="7">
        <template slot="title">
          <i class="el-icon-sugar"></i>
          项目经历
        </template>
        <project-exprience v-for="item in ProjectItems" :key="item" :number="item" @saveItem="saveItem" @deleteItem="deleteItem"></project-exprience>
        <el-button type="primary" class="width" @click="addItem(ProjectItems)" v-if="showAddProject">+ 继续添加</el-button>
      </el-collapse-item>
      <el-collapse-item name="2">
        <template slot="title">
          <i class="el-icon-cherry"></i>
          教育背景
        </template>
        <edu-back v-for="item in EduItems" :key="item" :number="item" @saveItem="saveItem" @deleteItem="deleteItem"></edu-back>
        <el-button type="primary" class="width" @click="addItem(EduItems)" v-if="showAddEdu">+ 继续添加</el-button>
      </el-collapse-item>
      <el-collapse-item name="5">
        <template slot="title">
          <i class="el-icon-ice-cream-round"></i>
          专业技能
        </template>
        <self-skill v-for="item in SkillItems" :key="item" :number="item" @saveItem="saveItem" @deleteItem="deleteItem"></self-skill>
        <el-button type="primary" class="width" @click="addItem(SkillItems)" v-if="showAddSkill">+ 继续添加</el-button>
      </el-collapse-item>

      <el-collapse-item name="3">
        <template slot="title">
          <i class="el-icon-grape"></i>
          自我介绍
        </template>
        <self-introduce :originData="originSelfIntroduce" @save="saveItem"></self-introduce>
      </el-collapse-item>
      <el-collapse-item name="4">
        <template slot="title">
          <i class="el-icon-pear"></i>
          个人作品
        </template>
        <self-work v-for="item in selfWorkItems" :key="item.index" :number="item.index" @saveItem="saveItem" @deleteItem="deleteItem"></self-work>
        <el-button type="primary" class="width" @click="addItem(selfWorkItems)" v-if="showAddSelfWork">+ 继续添加</el-button>
      </el-collapse-item>
      <el-collapse-item name="8">
        <template slot="title">
          <i class="el-icon-ice-cream"></i>
          更多信息
        </template>
        <MoreInformation></MoreInformation>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import axios from 'axios'
import { nanoid } from 'nanoid'
import EduBack from './userData/eduBack.vue'
import MoreInformation from './userData/moreInformation.vue'
import ProjectExprience from './userData/projectExprience.vue'
import SelfIntroduce from './userData/selfIntroduce.vue'
import SelfSkill from './userData/selfSkill.vue'
import SelfWork from './userData/selfWork.vue'
import userInfo from './userData/userInfo.vue'
import WorkExprience from './userData/workExprience.vue'
export default {
  components: {
    userInfo,
    EduBack,
    SelfIntroduce,
    SelfWork,
    MoreInformation,
    WorkExprience,
    SelfSkill,
    ProjectExprience
  },
  name: 'DataConfig',
  data() {
    return {
      activeName: '1',
      EduItems: [],
      CompanyItems: [],
      selfWorkItems: [],
      ProjectItems: [],
      SkillItems: [],
      showAddEdu: true,
      showAddSelfWork: true,
      showAddCompany: true,
      showAddProject: true,
      showAddSkill: true,
      originUserData: null,
      originSelfIntroduce: ''
    }
  },
  methods: {
    addItem(itemsArray) {
      const index = nanoid()
      itemsArray.push(index)
      this.showAddEdu = false
      this.showAddSelfWork = false
      this.showAddCompany = false
      this.showAddProject = false
      this.showAddSkill = false
    },
    saveItem(data, target) {
      if (!this[`showAdd${target}`]) {
        this[`showAdd${target}`] = true
      }
      this.$emit('emit-event', data, target)
    },
    deleteItem(data, target) {
      if (!this[`showAdd${target}`]) {
        this[`showAdd${target}`] = true
      }
      const index = this[`${target}Items`].indexOf(data)
      this[`${target}Items`].splice(index, 1)
      this.$emit('emit-event', data, target)
    },
    async getData() {
      const baseURL = 'https://www.fastmock.site/mock/459ee5d00471c3abcf108e61844f3c4e/resume'
      const { data: res } = await axios.get(`${baseURL}/DataOfHp`)
      return res.data
    },
    saveDataIn(form) {
      this.$dataConfig.then(tableList => {
        tableList.insert({
          tableName: 'dataForm',
          data: form
        })
      })
    },
    async queryAndSet() {
      await this.$dataConfig.then(data => {
        data.queryAll({
          tableName: 'dataForm',
          success: res => {
            if (res.length) {
              const types = new Set(res.map(el => el.type))
              const datas = res
              for (const key of types) {
                this[`${key}Array`] = datas.filter(el => el.type === key)
                this[`${key}Items`] = this[`${key}Array`].map(el => el.id)
              }
              this.$emit('ready')
            } else {
              const isAuthenticated = JSON.parse(localStorage.getItem('resumeToken'))
              if (isAuthenticated == '1234') {
                this.getData()
                  .then(res => {
                    const keys = ['Edu', 'Company', 'Project', 'Skill']
                    for (const key of keys) {
                      res[key].forEach(item => {
                        item.id = nanoid()
                        this.saveDataIn(item)
                      })
                    }
                    const { UserData, SelfIntroduce } = res
                    this.originUserData = UserData
                    this.originSelfIntroduce = SelfIntroduce
                  })
                  .then(() => {
                    this.queryAndSet()
                  })
              }
            }
          }
        })
      })
    }
  },
  created() {
    this.queryAndSet()
  }
}
</script>

<style scoped>
i {
  margin-right: 10px;
  font-size: 20px;
  font-weight: 500;
  color: #2d6cdf;
}
.width {
  width: 100%;
}
</style>
