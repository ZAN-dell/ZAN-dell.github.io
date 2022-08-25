<template>
  <div class="eduBack">
    <div v-if="adding">
      <el-form :model="form" ref="form" label-width="100px" class="demo-form">
        <el-form-item label="时间">
          <el-col :span="11">
            <el-form-item>
              <el-date-picker
                type="month"
                v-model="form.date1"
                style="width: 100%"
                format="yyyy 年 MM 月"
                value-format="yyyy.MM"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-form-item>
              <el-date-picker
                type="month"
                v-model="form.date2"
                style="width: 100%"
                format="yyyy 年 MM 月"
                value-format="yyyy.MM"
              ></el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="学校">
          <el-input v-model="form.school"></el-input>
        </el-form-item>
        <el-form-item label="专业">
          <el-input v-model="form.domain"></el-input>
        </el-form-item>
        <el-form-item label="学历">
          <el-select v-model="form.degree" class="width">
            <el-option
              v-for="(item, index) in degreeList"
              :key="index"
              :value="item"
            ></el-option>
          </el-select>
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
  name: 'eduBack',
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
        type: 'Edu',
        date1: '',
        date2: '',
        school: '',
        domain: '',
        degree: ''
      },
      degreeList: ['高中', '本科', '硕士', '博士'],
      adding: true
    }
  },
  computed: {
    summary() {
      return `${this.form.date1},${this.form.date2}-${this.form.school}-${this.form.degree}`
    }
  }
}
</script>

<style scoped>
.suffix {
  font-size: 18px;
  transform: translate(-30%, 50%);
  cursor: pointer;
}
.eduBack {
  margin-bottom: 10px;
}
.width {
  width: 100%;
}
.el-icon-delete-solid:hover {
  color: #2d6cdf;
}
</style>
