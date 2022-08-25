z
<template>
  <div class="selfSkill">
    <div v-if="adding">
      <el-form :model="form" ref="form" label-width="100px" class="demo-form">
        <el-form-item label="技能项">
          <el-input v-model="form.skill"></el-input>
        </el-form-item>
        <el-form-item label="掌握程度">
          <el-rate v-model="form.level" allow-half class="level"></el-rate>
        </el-form-item>
        <el-form-item label="技能描述">
          <el-input
            type="textarea"
            v-model="form.discription"
            :rows="4"
          ></el-input>
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
  name: 'selfSkill',
  mixins: [mixin],
  props: {
    number: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      form: {
        type: 'Skill',
        skill: '',
        level: 0,
        discription: ''
      },
      adding: true
    }
  },
  computed: {
    summary() {
      return `${this.form.skill}-${(this.form.level / 5) * 100}%`
    }
  }
}
</script>

<style scoped>
.suffix {
  float: right;
  font-size: 18px;
  transform: translateY(50%);
  cursor: pointer;
}
.selfSkill {
  margin-bottom: 10px;
}
.width {
  width: 100%;
}
.el-icon-delete-solid:hover {
  color: #2d6cdf;
}
.level {
  transform: translateY(42%);
}
/deep/ .el-rate__icon {
  font-size: 24px;
}
</style>
