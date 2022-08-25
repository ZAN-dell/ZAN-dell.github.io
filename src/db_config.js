export default {
  dbName: 'dataConfig',
  version: 1,
  tables: [
    {
      tableName: 'dataForm',
      option: {
        keyPath: 'id'
      },
      indexs: [
        {
          key: 'id',
          option: {
            unique: true
          }
        },
        {
          key: 'type'
        }
      ]
    }
  ]
}
