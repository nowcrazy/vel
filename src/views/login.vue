<template>
  <div class="login">
    <el-form class="login-form" ref="loginRef" :model="loginForm" :rules="loginRules">
      <h3 class="title">XDM</h3>
      <el-form-item prop="username" label="账号">
        <el-input v-model="loginForm.username" type="text" size="large" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item prop="password" label="密码">
        <el-input v-model="loginForm.password" type="password" size="large" auto-complete="off"
          placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item prop="code" label="验证码">
        <el-input v-model="loginForm.code" size="large" auto-complete="off" placeholder="验证码"
          style="width: 63%">验证码</el-input>
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model="loginForm.rememberMe" style="margin:0px 0px 25px 0px;">记住密码</el-checkbox>

      </el-form-item>
      <el-form-item>
        <el-button :loading="loading" size="large" type="primary" style="width:100%;">登录</el-button>
        <span v-if="!loading">登 录</span>
        <span v-else>登 录 中...</span>
        <div style="float: right;" v-if="register">
          <router-link class="link-type" :to="'/register'">立即注册</router-link>
        </div>
      </el-form-item>
    </el-form>
  </div>

</template>

<script setup>
const loginForm = ref({
  username: "admin",
  password: "admin123",
  rememberMe: false,
  code: "",
  uuid: ""
});

const loginRules = {
  username: [{ required: true, trigger: "blur", message: "请输入您的账号" }],
  password: [{ required: true, trigger: "blur", message: "请输入您的密码" }],
  code: [{ required: true, trigger: "change", message: "请输入验证码" }]
};
const codeUrl = ref("");
const loading = ref(false);
// 验证码开关
const captchaEnabled = ref(true);
// 注册开关
const register = ref(false);
const redirect = ref(undefined);
</script>
<style lang="scss">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-image: url("../assets/BBC/HealingGirls.jpg");
  background-size: cover;
}

.login-form {
  width: 400px;
  // background: whitesmoke;
  border-radius: 1%;
  padding: 10px;
}

.title {
  text-align: center;
}
</style>