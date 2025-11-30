<style scoped>
.signup-container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
}

.signup-card {
  width: 100%;
  max-width: 500px;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  background: #ffffff;
  position: relative;
}

.close-button {
  position: absolute;
  right: 15px;
  top: 15px;
  z-index: 10;
  background: #f5f5f5;
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.close-button:hover {
  background: #e0e0e0;
  transform: rotate(90deg);
}

.signup-content {
  padding: 60px 40px 40px;
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

.required {
  color: #f56c6c;
  margin-left: 4px;
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

.login-container {
  text-align: center;
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid #e8e8e8;
}

.login-text {
  font-size: 14px;
  color: #666;
}

.login-link {
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

.login-link:hover {
  color: #764ba2;
  text-decoration: underline;
}
</style>

<template>
  <div class="signup-container">
    <el-card class="signup-card" :body-style="{ padding: 0 }">
      <div class="close-button-wrapper">
        <el-button
          class="close-button"
          icon="el-icon-close"
          circle
          @click="exit"
        ></el-button>
      </div>
      <div class="signup-content">
        <div class="title">建立您的帳號</div>

        <div class="form-group">
          <div class="caption">帳號<span class="required">*</span></div>
          <el-input
            class="input"
            v-model="form.user"
            placeholder="請輸入帳號(使用者名稱)"
            size="large"
          ></el-input>
        </div>

        <div class="form-group">
          <div class="caption">密碼<span class="required">*</span></div>
          <el-input
            class="input"
            v-model="form.password"
            placeholder="請輸入密碼"
            type="password"
            show-password
            size="large"
          ></el-input>
        </div>

        <div class="form-group">
          <div class="caption">電子信箱<span class="required">*</span></div>
          <el-input
            class="input"
            v-model="form.email"
            placeholder="請輸入信箱"
            size="large"
          ></el-input>
        </div>

        <el-button class="button" @click="signup">註冊</el-button>

        <div class="login-container">
          <span class="login-text">已經有帳號了嗎？</span>
          <button class="login-link" @click="exit">立即登入</button>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import * as THREE from 'three'
export default {
  name: 'signup',
  data: function() {
    return {
      user_data: [],
      form: {
        id: 0,
        user: '',
        password: '',
        mypassword: '',
        email: '',
        groups: '',
        region: '',
        myregion: '',
        record: '',
        description: '',
        admin_mail: ''
      }
    }
  },
  created() {
    this.axios.get('/get_all_user', {}).then(response => {
      this.user_data = response.data
    })
  },
  mounted() {
    //監聽enter 若按enter則觸發login
    let _this = this
    document.onkeydown = function(e) {
      if (_this.$route.name == 'signup') {
        let key = window.event.keyCode
        if (key == 13) _this.signup()
      }
    }
  },
  methods: {
    signup() {
      if (this.form.user == '') {
        this.$message({ message: '請填入使用者名稱', type: 'error' })
        return
      }
      if (this.form.password == '') {
        this.$message({ message: '請填入使用者密碼', type: 'error' })
        return
      }
      if (this.form.email == '') {
        this.$message({ message: '請填入使用者信箱', type: 'error' })
        return
      }
      if (this.form.email.split('@')[1] == undefined) {
        this.$message({ message: '請填入正確email格式', type: 'error' })
        return
      }
      for (let user of this.user_data) {
        if (this.form.user == user['user']) {
          this.$message({
            message: '使用者 ' + this.form.user + ' 已存在!',
            type: 'error'
          })
          return
        }
      }

      this.axios
        .get('/operator_user', {
          params: {
            operator: 'add',
            form: JSON.stringify(this.form)
          }
        })
        .then(response => {
          this.$message({ message: '帳號建立成功', type: 'success' })
          this.$router.push({ name: 'login' })
        })
    },
    exit() {
      this.$router.push({ name: 'login' })
    }
  }
}
</script>
