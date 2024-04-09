<template>
  <div class="register">
    <el-form
      :model="registerForm"
      :rules="registerRules"
      class="register-Form">
      <h3 class="title">XDM</h3>
      <el-form-item prop="username" label="账号">
        <el-input
          type="text"
          v-model="registerForm.username">
          <template #prefix
            ><svg-icon
              icon-class="user"
              class="el-input__icon input-icon"
          /></template>
        </el-input>
      </el-form-item>
      <el-form-item prop="password" label="密码">
        <el-input
          type="text"
          v-model="registerForm.password">
          <template #prefix
            ><svg-icon
              icon-class="password"
              class="el-input__icon input-icon"
          /></template>
        </el-input>
      </el-form-item>
      <el-form-item prop="confirmPassword" label="确认密码">
        <el-input
          type="text"
          v-model="registerForm.confirmPassword">
          <template #prefix
            ><svg-icon
              icon-class="password"
              class="el-input__icon input-icon"
          /></template>
        </el-input>
      </el-form-item>
      <el-form-item prop="code" label="验证码">
        <el-input
          type="text"
          v-model="registerForm.code"
          style="width: 60%">
          <template #prefix
            ><svg-icon
              icon-class="validCode"
              class="el-input__icon input-icon"
          /></template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button
        size="large"
          type="primary"
          style="width:100%"><span>注册</span></el-button>
        <router-link
            class="link-type"
            :to="'/login'"
            >使用已有账户登录</router-link
          >
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
const registerForm = ref({
  username: "",
  password: "",
  confirmPassword: "",
  code: "",
  uuid: "",
});
const equalToPassword = (rule, value, callback) => {
  if (registerForm.value.password !== value) {
    callback(new Error("两次输入的密码不一致"));
  } else {
    callback();
  }
};
const registerRules = {
  username: [
    { required: true, trigger: "blur", message: "请输入您的账号" },
    {
      min: 2,
      max: 20,
      message: "用户账号长度必须介于 2 和 20 之间",
      trigger: "blur",
    },
  ],
  password: [
    { required: true, trigger: "blur", message: "请输入您的密码" },
    {
      min: 5,
      max: 20,
      message: "用户密码长度必须介于 5 和 20 之间",
      trigger: "blur",
    },
  ],
  confirmPassword: [
    { required: true, trigger: "blur", message: "请再次输入您的密码" },
    { required: true, validator: equalToPassword, trigger: "blur" },
  ],
  code: [{ required: true, trigger: "change", message: "请输入验证码" }],
};
</script>

<style lang="scss" scoped>
.register {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../assets/BBC/Animelandscape.jpg");
  background-size: cover;
  height: 100%;
}
.title {
  text-align: center;
}
.register-Form{
  border-radius: 6px;
  background: #ffffff;
  width: 400px;
  padding: 25px 25px 5px 25px;
  .el input{
    height: 40px;
    input{
      height: 40px;
    }
  }
  .input-icon{
    height: 40px;
  }
}
</style>
