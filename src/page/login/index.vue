<template>
  <div class="login">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>输入密码查看hpkkk的简历</span>
      </div>
      <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
      <el-row>
        <el-button @click="visit">游客登录</el-button>
        <el-button type="primary" @click="submit">提交</el-button>
      </el-row>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      password: ''
    }
  },
  methods: {
    submit() {
      if (this.password !== '1234') {
        this.$message({
          type: 'error',
          message: '密码错误！！！'
        })
      } else {
        localStorage.setItem('resumeToken', this.password)
        this.$router.push({
          name: 'home'
        })
      }
    },
    visit() {
      const id = '5678'
      localStorage.setItem('resumeToken', id)
      this.$router.push({
        name: 'home'
      })
    }
  }
}
</script>
<style lang="less">
.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}
.clearfix:after {
  clear: both;
}
.box-card {
  position: relative;
  z-index: 2;
  margin: auto;
  transform: translateY(50%);
  width: 400px;
  height: 250px;
  span {
    font-size: 15px;
  }
  .el-input__inner {
    margin: 15px 0;
    width: 75%;
  }
  .el-row {
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
  }
}
.login {
  background-color: #fff;
  height: 100vh;
  width: 100vw;
}
.login::before,
.login::after {
  content: '';
  position: absolute;
  left: 50%;
  min-width: 280vw;
  min-height: 280vh;
  border-radius: 45%;
  background-color: rgb(118, 218, 255);
  bottom: 15vh;
  transform: translate(-50%, -20%) rotateZ(0);
  z-index: 0;
  animation: rotate 10s linear infinite;
}
.login::before {
  bottom: 12vh;
  opacity: 0.7;
  border-radius: 40%;
}
@keyframes rotate {
  0% {
    transform: translate(-50%, -10%) rotateZ(0);
  }
  50% {
    transform: translate(-50%, -15%) rotateZ(180deg);
  }
  100% {
    transform: translate(-50%, -10%) rotateZ(360deg);
  }
}
</style>
