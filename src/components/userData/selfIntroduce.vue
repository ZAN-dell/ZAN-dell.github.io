<template>
  <div class="selfIntroduce">
    <el-input class="selfIntroduce" type="textarea" v-model="introduce" :rows="4"></el-input>
    <el-button type="primary" class="width" @click="save">保存</el-button>
  </div>
</template>

<script>
export default {
  name: 'selfIntroduce',
  props: {
    originData: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      introduce: ''
    }
  },
  methods: {
    save() {
      this.$emit('save', this.introduce, 'Introduce')
    }
  },
  watch: {
    originData(val) {
      this.introduce = val
      this.save()
    }
  }
}
</script>

<style>
.width {
  margin-top: 10px;
  width: 100%;
}
.selfIntroduce {
  margin-bottom: 10px;
}
</style>
