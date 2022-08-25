<template>
  <div class="projectExprience">
    <div v-if="adding">
      <el-form :model="form" ref="form" label-width="100px" class="demo-form">
        <el-form-item label="项目名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="项目链接">
          <el-input v-model="form.link"></el-input>
        </el-form-item>
        <el-form-item label="技术栈">
          <el-input v-model="form.skill"></el-input>
        </el-form-item>
        <el-form-item label="担任角色">
          <el-input v-model="form.role"></el-input>
        </el-form-item>
        <el-form-item label="项目描述">
          <el-input
            type="textarea"
            v-model="form.discription"
            :rows="4"
          ></el-input>
        </el-form-item>
        <el-form-item label="主要工作">
          <el-input type="textarea" v-model="form.main" :rows="4"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="width" @click="save">保存</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-input v-else type="text" v-model="summary" @focus="editItem"
      ><i
        slot="suffix"
        class="el-icon-delete-solid suffix"
        @click="deleteItem"
      ></i>
    </el-input>
  </div>
</template>

<script>
import mixin from './mixin'
export default {
  name: 'projectExprience',
  mixins: [mixin],
  props: {
    number: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      name: 'projectExprience',
      form: {
        type: 'Project',
        name: '',
        role: '',
        skill: '',
        discription: '',
        main: '',
        link: ''
      },
      adding: true
    }
  },
  computed: {
    summary() {
      return `${this.form.name}-${this.form.role}`
    }
  }
}
</script>

<style>
.suffix {
  font-size: 18px;
  transform: translate(-30%, 50%);
  cursor: pointer;
}
.projectExprience {
  margin-bottom: 10px;
}
.width {
  width: 100%;
}
.el-icon-delete-solid:hover {
  color: #2d6cdf;
}
</style>
