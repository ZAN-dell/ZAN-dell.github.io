<template>
  <div class="resumeMain">
    <div class="top">
      <div class="left">
        <DrawInfo :form="UserData"></DrawInfo>
        <drawEdu ref="EduModel" v-if="EduShow"></drawEdu>
      </div>
      <div class="right">
        <el-upload class="avatar-uploader" action="https://www.fastmock.site/mock/459ee5d00471c3abcf108e61844f3c4e/resume/photo" :show-file-list="false" :on-preview="handleAvatarSuccess" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </div>
    </div>
    <div></div>
    <DrawCompany ref="CompanyModel" v-if="CompanyShow"></DrawCompany>
    <DrawProject ref="ProjectModel" v-if="ProjectShow"></DrawProject>
    <DrawSkill ref="SkillModel" v-if="SkillShow"></DrawSkill>
    <drawIntroduce v-if="IntroduceShow" :introduce="IntroduceData"></drawIntroduce>
  </div>
</template>

<script>
import DrawInfo from './drawPage/drawInfo.vue'
import drawEdu from './drawPage/drawEdu.vue'
import DrawCompany from './drawPage/drawCompany.vue'
import DrawProject from './drawPage/drawProject.vue'
import DrawSkill from './drawPage/drawSkill.vue'
import drawIntroduce from './drawPage/drawIntroduce.vue'

export default {
  name: 'resumeMain',
  components: {
    DrawInfo,
    drawEdu,
    DrawCompany,
    DrawProject,
    DrawSkill,
    drawIntroduce
  },
  data() {
    return {
      UserData: true,
      IntroduceData: true,
      CompanyShow: false,
      ProjectShow: false,
      EduShow: false,
      SkillShow: false,
      IntroduceShow: false,
      imageUrl: ''
    }
  },
  methods: {
    setData(target, data) {
      this[`${target}Show`] = true
      if (this[`${target}Data`]) {
        this[`${target}Data`] = data
      }
      if (this.$refs[`${target}Model`]) {
        this.$refs[`${target}Model`].changeModel(target)
      }
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    setOwnData() {
      this.$dataConfig.then(data => {
        data.queryAll({
          tableName: 'dataForm',
          success: res => {
            const models = new Set(res.map(el => el.type))
            for (const key of models) {
              this[`${key}Show`] = true
            }
          }
        })
      })
    }
  }
}
</script>

<style scoped lang="less">
:root {
  --img-width: 90px;
}
.resumeMain {
  margin: auto;
  width: 540px;
  height: 790px;
  padding: 20px;
  border: 2px solid #ccc;
  box-shadow: 2px 2px 10px rgb(167, 166, 166);
}
.top {
  height: 16%;
  .left {
    float: left;
    width: 80%;
    height: 100%;
  }
  .right {
    overflow: hidden;
    height: 100%;
    img {
      width: 100%;
      transform: translateY(-5%);
    }
    .el-upload {
      cursor: pointer;
      position: absolute;
      top: 50%;
      right: 2%;
      transform: translateY(-50%);
      overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
      border-color: #409eff;
    }
    .avatar-uploader {
      border: 2px dashed #409eff;
      height: 120px;
      line-height: 120px;
      border-radius: 6px;
    }
    .avatar-uploader-icon {
      font-size: 28px;
      color: #409eff;
      width: var(--img-width);
      height: var(--img-width);
      text-align: center;
    }
  }
}
</style>
