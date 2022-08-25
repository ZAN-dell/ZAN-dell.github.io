<template>
  <div class="selfWork">
    <div v-if="adding">
      <el-form :model="form" ref="form" label-width="100px" class="demo-form">
        <el-form-item label="作品名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="作品描述">
          <el-input v-model="form.discription"></el-input>
        </el-form-item>
        <el-form-item label="作品链接">
          <el-input v-model="form.link"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="width" @click="save">保存</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-input v-else type="text" @focus="adding = true" v-model="summary"
      ><i
        slot="suffix"
        class="el-icon-delete-solid suffix"
        @click="deleteItem"
      ></i>
    </el-input>
  </div>
</template>

<script>
export default {
  name: 'selfWork',
  props: {
    number: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      name: 'selfWork',
      form: {
        name: '',
        discription: '',
        link: ''
      },
      adding: true
    }
  },
  computed: {
    summary() {
      return `${this.number}.${this.form.name}-${this.form.discription}`
    }
  },
  methods: {
    save() {
      this.adding = false
      this.$emit('saveItem', this.form, 'SelfWork')
    },
    deleteItem() {
      this.$emit('deleteItem', this.number, this.name)
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
.selfWork {
  margin-bottom: 10px;
}
.width {
  width: 100%;
}
.el-icon-delete-solid:hover {
  color: #2d6cdf;
}
</style>
