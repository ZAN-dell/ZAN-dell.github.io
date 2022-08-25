<template>
  <div>
    <el-input class="moreInformation" v-if="adding" type="textarea" v-model="information" :rows="4"></el-input>
    <el-input v-else type="text" v-model="summary" @focus="adding = true"><i slot="suffix" class="el-icon-delete-solid suffix" @click="deleteItem"></i>
    </el-input>
    <el-button type="primary" class="width" @click="save">保存</el-button>
  </div>
</template>

<script>
export default {
  name: 'moreInformation',
  props: {
    number: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      name: 'moreInformation',
      information: '',
      adding: true
    }
  },
  computed: {
    summary() {
      return `${this.number}.${this.information}`
    }
  },
  methods: {
    save() {
      this.adding = false
      this.$emit('saveItem')
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
.moreInformation {
  margin-bottom: 10px;
}
.width {
  width: 100%;
}
.el-icon-delete-solid:hover {
  color: #2d6cdf;
}
</style>
