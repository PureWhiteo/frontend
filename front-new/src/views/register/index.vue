<template>
  <div class="page page-register">
    <form
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
        :style="{
          padding: '0',
          boxShadow: '0 0 0px #FF47D9',
          margin: '20px auto',
          borderColor: 'rgba(153, 153, 153, 1)',
          borderRadius: '8px',
          borderWidth: '1px',
          width: '80%',
          borderStyle: 'solid',
          height: '50px',
        }"
        class="form-item layui-form-text"
      >
        <label
          v-if="true"
          :style="{
            padding: '0 10px',
            boxShadow: '0 0 6px rgba(255,0,0,0)',
            borderColor: 'rgba(0,0,0,0)',
            backgroundColor: 'transparent',
            color: 'rgba(16, 15, 15, 1)',
            borderRadius: '0',
            textAlign: 'center',
            borderWidth: '0',
            width: '100px',
            fontSize: '16px',
            borderStyle: 'solid',
          }"
          class="form-label"
          >用户账号：</label
        >
        <input
          :style="{
            padding: '0 10px',
            boxShadow: '0 0 6px #fff',
            borderColor: '#ccc',
            backgroundColor: 'rgba(255, 255, 255, 0.63)',
            color: '#333',
            borderRadius: '0',
            textAlign: 'left',
            borderWidth: '0',
            width: '260px',
            fontSize: '14px',
            borderStyle: 'solid',
            height: '44px',
          }"
          type="text"
          id="yonghuzhanghao"
          name="yonghuzhanghao"
          placeholder="请输入用户账号"
          autocomplete="off"
          class="layui-input"
        />
      </div>
      <div
        :style="{
          padding: '0',
          boxShadow: '0 0 0px #FF47D9',
          margin: '20px auto',
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
            color: 'rgba(16, 15, 15, 1)',
            borderRadius: '0',
            textAlign: 'center',
            borderWidth: '0',
            width: '100px',
            fontSize: '16px',
            borderStyle: 'solid',
          }"
          class="form-label"
          >密码：</label
        >
        <input
          :style="{
            padding: '0 10px',
            boxShadow: '0 0 6px #fff',
            borderColor: '#ccc',
            backgroundColor: 'rgba(255, 255, 255, 0.63)',
            color: '#333',
            borderRadius: '0',
            textAlign: 'left',
            borderWidth: '0',
            width: '260px',
            fontSize: '14px',
            borderStyle: 'solid',
            height: '44px',
          }"
          type="password"
          name="mima"
          required
          lay-verify="required"
          placeholder="请输入密码"
          autocomplete="off"
          class="layui-input"
        />
      </div>
      <div
        :style="{
          padding: '0',
          boxShadow: '0 0 0px #FF47D9',
          margin: '20px auto',
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
            color: 'rgba(16, 15, 15, 1)',
            borderRadius: '0',
            textAlign: 'center',
            borderWidth: '0',
            width: '100px',
            fontSize: '16px',
            borderStyle: 'solid',
          }"
          class="form-label"
          >确认密码：</label
        >
        <input
          :style="{
            padding: '0 10px',
            boxShadow: '0 0 6px #fff',
            borderColor: '#ccc',
            backgroundColor: 'rgba(255, 255, 255, 0.63)',
            color: '#333',
            borderRadius: '0',
            textAlign: 'left',
            borderWidth: '0',
            width: '260px',
            fontSize: '14px',
            borderStyle: 'solid',
            height: '44px',
          }"
          type="password"
          name="mima2"
          required
          lay-verify="required"
          placeholder="请再次输入密码"
          autocomplete="off"
          class="layui-input"
        />
      </div>
      <div
        :style="{
          padding: '0',
          boxShadow: '0 0 0px #FF47D9',
          margin: '20px auto',
          borderColor: 'rgba(153, 153, 153, 1)',
          borderRadius: '8px',
          borderWidth: '1px',
          width: '80%',
          borderStyle: 'solid',
          height: '50px',
        }"
        class="form-item layui-form-text"
      >
        <label
          v-if="true"
          :style="{
            padding: '0 10px',
            boxShadow: '0 0 6px rgba(255,0,0,0)',
            borderColor: 'rgba(0,0,0,0)',
            backgroundColor: 'transparent',
            color: 'rgba(16, 15, 15, 1)',
            borderRadius: '0',
            textAlign: 'center',
            borderWidth: '0',
            width: '100px',
            fontSize: '16px',
            borderStyle: 'solid',
          }"
          class="form-label"
          >用户姓名：</label
        >
        <input
          :style="{
            padding: '0 10px',
            boxShadow: '0 0 6px #fff',
            borderColor: '#ccc',
            backgroundColor: 'rgba(255, 255, 255, 0.63)',
            color: '#333',
            borderRadius: '0',
            textAlign: 'left',
            borderWidth: '0',
            width: '260px',
            fontSize: '14px',
            borderStyle: 'solid',
            height: '44px',
          }"
          type="text"
          id="yonghuxingming"
          name="yonghuxingming"
          placeholder="请输入用户姓名"
          autocomplete="off"
          class="layui-input"
        />
      </div>
      <div
        :style="{
          padding: '0',
          boxShadow: '0 0 0px #FF47D9',
          margin: '20px auto',
          borderColor: 'rgba(153, 153, 153, 1)',
          borderRadius: '8px',
          borderWidth: '1px',
          width: '80%',
          borderStyle: 'solid',
          height: '50px',
        }"
        class="form-item layui-form-text"
      >
        <label
          v-if="true"
          :style="{
            padding: '0 10px',
            boxShadow: '0 0 6px rgba(255,0,0,0)',
            borderColor: 'rgba(0,0,0,0)',
            backgroundColor: 'transparent',
            color: 'rgba(16, 15, 15, 1)',
            borderRadius: '0',
            textAlign: 'center',
            borderWidth: '0',
            width: '100px',
            fontSize: '16px',
            borderStyle: 'solid',
          }"
          class="form-label"
          >手机号码：</label
        >
        <input
          :style="{
            padding: '0 10px',
            boxShadow: '0 0 6px #fff',
            borderColor: '#ccc',
            backgroundColor: 'rgba(255, 255, 255, 0.63)',
            color: '#333',
            borderRadius: '0',
            textAlign: 'left',
            borderWidth: '0',
            width: '260px',
            fontSize: '14px',
            borderStyle: 'solid',
            height: '44px',
          }"
          type="text"
          id="shoujihaoma"
          name="shoujihaoma"
          placeholder="请输入手机号码"
          autocomplete="off"
          class="layui-input"
        />
      </div>
      <button
        :style="{
          padding: '0 10px',
          boxShadow: '0 0 0px #fff',
          margin: '10px auto',
          borderColor: '#ccc',
          backgroundColor: 'rgba(201, 165, 72, 1)',
          color: '#fff',
          borderRadius: '0',
          borderWidth: '0',
          width: '60%',
          fontSize: '14px',
          borderStyle: 'solid',
          height: '44px',
        }"
        class="layui-btn layui-btn-fluid layui-btn-danger btn-submit"
        lay-submit
        lay-filter="register"
        style="width: 280px"
      >
        注册
      </button>
      <p
        :style="{
          color: 'rgba(23, 22, 22, 1)',
          textAlign: 'center',
          fontSize: '12px',
        }"
        class="txt"
      >
        <a
          style="color: inherit"
          href="javascript:window.location.href='../login/login.html'"
          >已有账号登录</a
        >
      </p>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<script>
layui.use(
  ["layer", "element", "carousel", "form", "http", "jquery"],
  function () {
    var layer = layui.layer;
    var element = layui.element;
    var carousel = layui.carousel;
    var form = layui.form;
    var http = layui.http;
    var jquery = layui.jquery;

    var tablename = http.getParam("tablename");

    // 注册
    form.on("submit(register)", function (data) {
      data = data.field;
      if (!data.yonghuzhanghao) {
        layer.msg("用户账号不能为空", {
          time: 2000,
          icon: 5,
        });
        return false;
      }
      if (!data.mima) {
        layer.msg("密码不能为空", {
          time: 2000,
          icon: 5,
        });
        return false;
      }
      if (!isMobile(data.shoujihaoma)) {
        layer.msg("手机号码应输入手机格式", {
          time: 2000,
          icon: 5,
        });
        return false;
      }

      if (data.mima != data.mima2) {
        layer.msg("两次密码输入不一致", {
          time: 2000,
          icon: 5,
        });
        return false;
      }

      var url = tablename + "/register";
      http.requestJson(url, "post", data, function (res) {
        layer.msg(
          "注册成功",
          {
            time: 2000,
            icon: 6,
          },
          function () {
            // 路径访问设置
            window.location.href = "../login/login.html";
          }
        );
      });
      return false;
    });
  }
);
</script>

<style lang="scss">
.page-register {
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
.page-register form {
  box-sizing: border-box;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center !important;
}
.page-register .logo,
.page-register .title {
  box-sizing: border-box;
}
.page-register .logo img {
  display: block;
}
.page-register .title {
  text-align: center;
}
.page-register .form-item {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  box-sizing: border-box;
}
.page-register .form-item input,
.page-register .form-label {
  box-sizing: border-box;
}
.page-register .btn-submit {
  display: block;
  box-sizing: border-box;
}
.page-register form p.txt {
  width: 100%;
  margin: 0;
  box-sizing: border-box;
}
</style>