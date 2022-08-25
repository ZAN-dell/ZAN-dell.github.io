export default {
  created() {
    this.isEditing = false
    this.$dataConfig.then((data) => {
      data.query({
        tableName: 'dataForm',
        condition: (item) => item.id === this.number,
        success: (res) => {
          if (res.length) {
            const data = res[0]
            for (const key in data) {
              this.form[key] = data[key]
            }
            this.adding = false
          }
        }
      })
    })
  },
  methods: {
    save() {
      this.adding = false
      this.form.id = this.number
      this.$dataConfig.then((tableList) => {
        if (this.isEditing) {
          tableList.update({
            tableName: 'dataForm',
            condition: (item) => item.id === this.form.id,
            handle: (item) => {
              for (const key in this.form) {
                item[key] = this.form[key]
              }
            },
            success: () => {
              this.isEditing = false
              this.$message({
                message: '修改成功',
                type: 'success'
              })
            }
          })
        } else {
          tableList.insert({
            tableName: 'dataForm',
            data: this.form,
            success: () => {
              this.$message({
                message: '保存成功',
                type: 'success'
              })
            }
          })
        }
      })
      this.$emit('saveItem', this.form.id, this.form.type)
    },
    deleteItem() {
      this.form.id = this.number
      this.$dataConfig.then((data) => {
        data.delete({
          tableName: 'dataForm',
          condition: (item) => item.id === this.form.id,
          success: () => {
            this.$message({
              message: '删除成功',
              type: 'success'
            })
          }
        })
      })
      this.$emit('deleteItem', this.number, this.form.type)
    },
    editItem() {
      this.adding = true
      this.isEditing = true
    }
  }
}
