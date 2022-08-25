<template>
  <div class="workExprience">
    <div v-if="adding">
      <el-form :model="form" ref="form" label-width="100px" class="demo-form">
        <el-form-item label="起止时间">
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
        <el-form-item label="公司名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="部门">
          <el-input v-model="form.department"></el-input>
        </el-form-item>
        <el-form-item label="职位">
          <el-input v-model="form.role"></el-input>
        </el-form-item>
        <el-form-item label="工作描述">
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
  name: 'workExprience',
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
        type: 'Company',
        date1: '',
        date2: '',
        name: '',
        department: '',
        discription: '',
        role: ''
      },
      adding: true
    }
  },
  computed: {
    summary() {
      return `${this.form.date1},${this.form.date2}-${this.form.name}-${this.form.department}`
    }
  },
  created() {
    this.$dataConfig.then((data) => {
      data.query({
        tableName: 'dataForm',
        condition: (item) => item.id === this.number,
        success: () => {}
      })
    })
  }
}
</script>

<style>
.suffix {
  font-size: 18px;
  transform: translate(-30%, 50%);
  cursor: pointer;
}
.workExprience {
  margin-bottom: 10px;
}
.width {
  width: 100%;
}
.el-icon-delete-solid:hover {
  color: #2d6cdf;
}
</style>
