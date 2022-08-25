<template>
  <div class="drawInfo">
    <div class="name">{{ form && form.name ? form.name : 'XXX' }}</div>
    <div class="other">
      <el-row
        ><el-col :span="12">
          <div class="item">
            <i class="el-icon-phone-outline"></i>{{ form ? form.phone : '' }}
          </div>
        </el-col>
        <el-col :span="12"
          ><div class="item">
            <i class="el-icon-message"></i>{{ form ? form.email : '' }}
          </div></el-col
        ></el-row
      >
      <el-row v-if="isShow">
        <el-col :span="12">
          <div class="item" v-if="(form && form.gender) || (form && form.age)">
            <i class="el-icon-user"></i>{{ form.gender }} &nbsp;&nbsp;{{
              form.age
            }}
          </div>
        </el-col>
        <el-col :span="12"
          ><div v-if="form && form.github" class="item">
            <img src="@/assets/github.png" alt="" class="github" />
            {{ form.github }}
          </div></el-col
        >
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'drawInfo',
  props: {
    form: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      imageUrl: ''
    }
  },
  computed: {
    isShow() {
      return (
        this.form && (this.form.gender || this.form.age || this.form.github)
      )
    }
  }
}
</script>

<style scoped type="text/css" media="print">
.drawInfo {
  width: 100%;
  height: 40%;
  color: #000;
}
.name {
  display: inline-block;
  width: 20%;
  height: 100%;
  line-height: 50px;
  float: left;
  text-align: left;
  font-size: 3em;
  font-weight: 600;
}
.other {
  overflow: hidden;
  width: 80%;
  height: 100%;
  display: flex;
  align-content: space-around;
  flex-direction: column;
  justify-content: space-around;
}
.item {
  text-align: left;
}
.github {
  position: relative;
  top: 2px;
  left: 0;
  width: 13px;
  height: 13px;
}
div > i {
  margin: 0 5px;
}
</style>
