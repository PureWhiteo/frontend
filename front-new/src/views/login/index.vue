<template>
  <div class="page page-login">
    <form
      id="loginForm"
      class="layui-form login-form"
      :style="{
        padding: '20px',
        boxShadow: '0 1px 10px #e3e3e4',
        borderColor: 'rgba(0,0,0,.3)',
        backgroundColor: 'rgba(255, 255, 255, 0.63)',
        borderRadius: '20px',
        borderWidth: '0',
        width: '500px',
        borderStyle: 'solid',
        justifyContent: 'center',
        height: 'auto',
      }"
    >
      <div
        class="msg-warn hide title"
        v-if="true"
        :style="{
          isshow: true,
          padding: '10px',
          boxShadow: '0 0 0px #13AF69',
          margin: '0 auto 20px',
          borderColor: 'rgba(0,0,0,1)',
          color: 'rgba(0, 0, 0, 1)',
          borderRadius: '20px 20px 0 0',
          borderWidth: '0',
          width: '100%',
          lineHeight: '32px',
          fontSize: '16px',
          borderStyle: 'solid',
        }"
      >
        公共场所不建议自动登录，以防账号丢失
      </div>
      <div
        :style="{
          padding: '0',
          boxShadow: '0 0 0px #FF47D9',
          margin: '10px auto',
          borderColor: 'rgba(153, 153, 153, 1)',
          borderRadius: '8px',
          borderWidth: '1px',
          width: '80%',
          borderStyle: 'solid',
          height: '50px',
        }"
        class="form-item"
      >
        <label
          v-if="true"
          :style="{
            padding: '0 10px',
            boxShadow: '0 0 6px rgba(255,0,0,0)',
            borderColor: 'rgba(0,0,0,0)',
            backgroundColor: 'transparent',
            color: 'rgba(17, 16, 16, 1)',
            borderRadius: '0',
            textAlign: 'center',
            borderWidth: '0',
            width: '84px',
            fontSize: '16px',
            borderStyle: 'solid',
          }"
          class="form-label"
          >账号</label
        >
        <input
          v-model="form.username"
          :style="{
            padding: '0 10px',
            boxShadow: '0 0 0px #fff',
            borderColor: '#ccc',
            backgroundColor: 'rgba(255, 255, 255, 0.63)',
            color: 'rgba(51, 51, 51, 1)',
            borderRadius: '0',
            textAlign: 'left',
            borderWidth: '0',
            width: '70%',
            fontSize: '14px',
            borderStyle: 'solid',
            height: '44px',
          }"
          type="text"
          name="username"
          required
          lay-verify="required"
          placeholder="请输入账号"
          autocomplete="off"
          class="layui-input"
        />
      </div>
      <div
        :style="{
          padding: '0',
          boxShadow: '0 0 0px #FF47D9',
          margin: '10px auto',
          borderColor: 'rgba(153, 153, 153, 1)',
          borderRadius: '8px',
          borderWidth: '1px',
          width: '80%',
          borderStyle: 'solid',
          height: '50px',
        }"
        class="form-item"
      >
        <label
          v-if="true"
          :style="{
            padding: '0 10px',
            boxShadow: '0 0 6px rgba(255,0,0,0)',
            borderColor: 'rgba(0,0,0,0)',
            backgroundColor: 'transparent',
            color: 'rgba(17, 16, 16, 1)',
            borderRadius: '0',
            textAlign: 'center',
            borderWidth: '0',
            width: '84px',
            fontSize: '16px',
            borderStyle: 'solid',
          }"
          class="form-label"
          >密码</label
        >
        <input
          v-model="form.password"
          :style="{
            padding: '0 10px',
            boxShadow: '0 0 0px #fff',
            borderColor: '#ccc',
            backgroundColor: 'rgba(255, 255, 255, 0.63)',
            color: 'rgba(51, 51, 51, 1)',
            borderRadius: '0',
            textAlign: 'left',
            borderWidth: '0',
            width: '70%',
            fontSize: '14px',
            borderStyle: 'solid',
            height: '44px',
          }"
          type="password"
          name="password"
          required
          lay-verify="required"
          placeholder="请输入密码"
          autocomplete="off"
          class="layui-input"
        />
      </div>
      <button
        :style="{
          padding: '0 10px',
          boxShadow: '0 0 0px #fff',
          margin: '20px auto 10px',
          borderColor: '#ccc',
          backgroundColor: 'rgba(201, 165, 72, 1)',
          color: '#fff',
          borderRadius: '0',
          borderWidth: '0',
          width: '60%',
          fontSize: '18px',
          lineHeight: '30px',
          borderStyle: 'solid',
          height: '44px',
        }"
        class="layui-btn layui-btn-fluid layui-btn-danger btn-submit"
        type="button"
        @click="login"
      >登录</button>
      <p
        :style="{
          color: 'rgba(20, 20, 19, 1)',
          textAlign: 'center',
          fontSize: '12px',
        }"
        class="txt"
      >
        <a @click="register" href="javascript: void(0);">注册</a>
      </p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      roles: []
    }
  },
  created() {
    const token = localStorage.getItem('front-token');
    if (token) {
      return this.$router.replace({ path: '/home' });
    }
  },
  methods: {
    async login() {
      if (!this.form.username || !this.form.password) {
        return;
      }
      const res = await this.$http({
        method: "",
        url: `yonghu/login`,
        data: this.form
      });
      if (!res.data?.token) {
        return this.$message.error(res.data?.msg || '登录失败！');
      }
      this.$message.success('登录成功')
      this.$router.replace({ path: '/home' });
      localStorage.setItem('front-token', res.token);
    },
    register() {
      this.$router.push({ path: '/register' });
    }
  },
};
</script>

<style lang="scss">
.page-login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  background-image: url(http://codegen.caihongy.cn/20201223/86928f0ccb6841dbb4796118da0ec20b.jpg);
}

.page-login form {
  box-sizing: border-box;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center !important;
  position: inherit;
}

.page-login .logo,
.page-login .title {
  box-sizing: border-box;
}

.page-login .logo img {
  display: block;
}

.page-login .title {
  text-align: center;
}

.page-login .form-item {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  box-sizing: border-box;
}

.page-login .form-item input,
.page-login .form-label {
  box-sizing: border-box;
}

.page-login .btn-submit {
  display: block;
  box-sizing: border-box;
  height: 30px !important;
}

.page-login form p.txt {
  width: 100%;
  margin: 0;
  box-sizing: border-box;
}

.l-redio .layui-form-radio {
  margin: 0;
}

.l-redio .layui-form-radio > i {
  font-size: 16px;
  color: rgba(201, 165, 72, 0.58);
}

.l-redio .layui-form-radio > div {
  font-size: 14px;
  color: rgba(201, 165, 72, 0.64);
}

.l-redio .layui-form-radioed > i {
  font-size: 16px;
  color: rgba(201, 165, 72, 1);
}

.l-redio .layui-form-radioed > div {
  font-size: 14px;
  color: rgba(201, 165, 72, 1);
}

#loginForm .codes {
}

#loginForm .codes input {
  width: calc(90% - 84px);
  height: 44px;
  margin: 0;
  color: rgba(19, 20, 20, 1);
  font-size: 14px;
  padding: 0 0px;
  border-radius: 4px;
  border-width: 0px;
  border-style: solid;
  border-color: rgba(255, 255, 255, 1);
  background-color: #fff;
  box-shadow: 0 0 0px;
  outline: none;
}

#loginForm .codes .nums {
  width: 84px;
  height: 44px;
  margin: 0 0 0 10px;
  padding: 0;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  border-color: #1e90ff;
  background-color: #f5f5f5;
  box-shadow: 0 0 0px rgba(2, 93, 172, 1);
  outline: none;
  box-sizing: border-box;
}
</style>