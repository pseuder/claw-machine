<style scoped>
.login-container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
}

.login-card {
  width: 100%;
  max-width: 450px;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  background: #ffffff;
}

.login-content {
  padding: 50px 40px;
}

.title {
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  color: #333;
  margin-bottom: 40px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.form-group {
  margin-bottom: 24px;
}

.caption {
  font-size: 14px;
  font-weight: 600;
  color: #555;
  margin-bottom: 8px;
  letter-spacing: 0.5px;
}

.input {
  width: 100%;
}

.input :deep(.el-input__wrapper) {
  border-radius: 10px;
  padding: 12px 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.input :deep(.el-input__wrapper:hover) {
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.2);
}

.input :deep(.el-input__wrapper.is-focus) {
  box-shadow: 0 4px 16px rgba(102, 126, 234, 0.4);
  border-color: #667eea;
}

.input :deep(.el-input__inner) {
  font-size: 15px;
}

.button {
  width: 100%;
  height: 50px;
  font-size: 18px;
  font-weight: 600;
  border-radius: 10px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  color: #ffffff !important;
  margin-top: 8px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
}

.button:active {
  transform: translateY(0);
}

.signup-container {
  text-align: center;
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid #e8e8e8;
}

.signup-text {
  font-size: 14px;
  color: #666;
}

.signup-link {
  border: none;
  background: none;
  color: #667eea;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  margin-left: 6px;
  transition: all 0.3s ease;
  padding: 0;
}

.signup-link:hover {
  color: #764ba2;
  text-decoration: underline;
}
</style>

<template>
  <div class="login-container">
    <el-card class="login-card" :body-style="{ padding: 0 }">
      <div class="login-content">
        <div class="title">登入您的帳號</div>

        <div class="form-group">
          <div class="caption">帳號</div>
          <el-input
            class="input"
            v-model="user[0]"
            placeholder="請輸入帳號(使用者名稱)"
            size="large"
          ></el-input>
        </div>

        <div class="form-group">
          <div class="caption">密碼</div>
          <el-input
            class="input"
            v-model="user[1]"
            placeholder="請輸入密碼"
            type="password"
            show-password
            size="large"
          ></el-input>
        </div>

        <el-button class="button" @click="login">登入</el-button>

        <div class="signup-container">
          <span class="signup-text">還沒有帳號嗎？</span>
          <button class="signup-link" @click="signup">立即註冊</button>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'login',
  data: function () {
    return {
      user: ['Admin', 'Admin'],
    }
  },
  created() {
    this.$router.replace({ query: '' }).catch(() => {})
  },
  mounted() {
    //監聽enter 若按enter則觸發login
    let _this = this
    document.onkeydown = function (e) {
      if (_this.$route.name == 'login') {
        let key = window.event.keyCode
        if (key == 13) _this.login()
      }
    }
  },
  methods: {
    login() {
      this.axios
        .get('/login', {
          params: {
            user: JSON.stringify(this.user),
            mode: 'login',
          },
        })
        .then((response) => {
          let res = response.data
          if (res.msg == '登入成功!') {
            this.$message({ message: res.msg, type: 'success' })
            sessionStorage.setItem('user', JSON.stringify(this.user[0])) //驗證器
            sessionStorage.setItem('token', 'ImLogin') //驗證器
            this.$router.push({ name: 'show' })
          } else this.$message({ message: res.msg, type: 'error' })
        })
    },
    signup() {
      this.$router.push({ name: 'signup' })
    },
    resetPassword() {
      this.$router.push({ name: 'resetPassword' })
    },
  },
}
</script>
