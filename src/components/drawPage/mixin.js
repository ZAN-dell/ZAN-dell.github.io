export default {
  methods: {
    changeModel(target) {
      this.$dataConfig.then((data) => {
        data.query({
          tableName: 'dataForm',
          condition: (item) => item.type === target,
          success: (res) => {
            this.formArray = res
          }
        })
      })
    }
  }
}
