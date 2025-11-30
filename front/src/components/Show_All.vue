<style scoped>
* {
  box-sizing: border-box;
}

.show-all-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
}

.header-bar {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 20px 30px;
  margin-bottom: 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-left {
  font-size: 24px;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 20px;
}

.balance-info {
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  color: #333;
  background: #f5f5f5;
  padding: 10px 20px;
  border-radius: 25px;
}

.balance-info i {
  margin-right: 8px;
  color: #ffd04b;
  font-size: 18px;
}

.recharge-link {
  font-weight: 600;
  font-size: 15px;
}

.recharge-link i {
  margin-left: 5px;
}

.user-button {
  width: 57px;
  height: 53px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  font-size: 20px;
  transition: all 0.3s ease;
}

.user-button:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.user-popover-content {
  padding: 10px 0;
}

.user-info {
  padding: 10px 15px;
  margin-bottom: 10px;
  font-size: 15px;
  color: #333;
  border-bottom: 1px solid #e8e8e8;
}

.manage-button,
.logout-button {
  width: 100%;
  margin-top: 8px;
  border-radius: 8px;
  font-weight: 600;
}

.main-content {
  display: flex;
  gap: 30px;
}

.sidebar {
  flex-shrink: 0;
  width: 220px;
}

.category-menu {
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.category-menu :deep(.el-menu) {
  border: none;
}

.category-menu :deep(.el-menu-item) {
  font-size: 16px;
  font-weight: 500;
  padding-left: 25px !important;
  height: 56px;
  line-height: 56px;
  transition: all 0.3s ease;
}

.category-menu :deep(.el-menu-item:hover) {
  background-color: rgba(255, 208, 75, 0.1) !important;
}

.category-menu :deep(.el-menu-item.is-active) {
  background-color: rgba(255, 208, 75, 0.2) !important;
}

.product-section {
  overflow: auto;
  flex: 1;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.product-table :deep(.el-table) {
  background: transparent;
  border-radius: 10px;
  overflow: hidden;
}

.product-table :deep(.el-table__header-wrapper) {
  border-radius: 10px 10px 0 0;
}

.product-table :deep(.el-table th) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-weight: 600;
  font-size: 15px;
  border: none;
}

.product-table :deep(.el-table td) {
  border-bottom: 1px solid #f0f0f0;
  padding: 20px 0;
}

.product-table :deep(.el-table__row:hover) {
  background-color: rgba(102, 126, 234, 0.05);
}

.product-image {
  max-width: 150px;
  max-height: 150px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.product-image:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.product-name {
  margin-top: 10px;
  font-size: 15px;
  font-weight: 600;
  color: #333;
}

.recharge-form {
  padding: 10px 0;
}

.recharge-form :deep(.el-form-item__label) {
  font-weight: 600;
  color: #333;
}

.recharge-form :deep(.el-input__wrapper) {
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.recharge-options {
  margin-left: 20px;
}

.recharge-options :deep(.el-radio.is-bordered) {
  border-radius: 8px;
  margin-bottom: 10px;
  transition: all 0.3s ease;
}

.recharge-options :deep(.el-radio.is-bordered.is-checked) {
  border-color: #667eea;
  background: rgba(102, 126, 234, 0.1);
}

.dialog-footer {
  text-align: right;
  padding-top: 15px;
}

.cancel-button {
  margin-right: 10px;
}
</style>

<template>
  <div class="show-all-container">
    <!-- 頂部導航欄 -->
    <div class="header-bar">
      <div class="header-left"><i class="el-icon-trophy"></i> 線上夾娃娃機</div>
      <div class="header-right">
        <div class="balance-info">
          <i class="el-icon-coin"></i>目前餘額：{{ user_money }}$
        </div>

        <!-- 會員按鈕 -->
        <el-popover trigger="hover" width="220" placement="bottom">
          <div class="user-popover-content">
            <div class=""><i class="el-icon-user"></i> {{ user }}</div>
            <div>
              <el-button
                type="primary"
                icon="el-icon-setting"
                class="manage-button"
                @click="manage"
                >後台管理</el-button
              >
            </div>
            <div>
              <el-button
                type="danger"
                icon="el-icon-switch-button"
                class="logout-button"
                @click="logout"
                >登出</el-button
              >
            </div>
          </div>
          <el-button
            class="user-button"
            slot="reference"
            icon="el-icon-s-custom"
          ></el-button>
        </el-popover>
      </div>
    </div>

    <!-- 主要內容區 -->
    <div class="main-content">
      <!-- 側邊欄分類 -->
      <div class="sidebar">
        <div class="category-menu">
          <el-menu default-active="全部" @select="select_menu">
            <el-menu-item index="全部">
              <i class="el-icon-s-grid"></i>
              <span slot="title">全部</span>
            </el-menu-item>
            <el-menu-item index="生活">
              <i class="el-icon-goods"></i>
              <span slot="title">生活</span>
            </el-menu-item>
            <el-menu-item index="遊戲">
              <i class="el-icon-monitor"></i>
              <span slot="title">遊戲</span>
            </el-menu-item>
            <el-menu-item index="手機">
              <i class="el-icon-mobile-phone"></i>
              <span slot="title">手機</span>
            </el-menu-item>
            <el-menu-item index="食物">
              <i class="el-icon-food"></i>
              <span slot="title">食物</span>
            </el-menu-item>
            <el-menu-item index="口罩">
              <i class="el-icon-first-aid-kit"></i>
              <span slot="title">口罩</span>
            </el-menu-item>
            <el-menu-item index="娃娃">
              <i class="el-icon-present"></i>
              <span slot="title">娃娃</span>
            </el-menu-item>
          </el-menu>
        </div>
      </div>

      <!-- 商品區域 -->
      <div class="product-section">
        <div class="product-table">
          <el-table :data="table_data" max-height="700" fit>
            <el-table-column align="center" width="300px">
              <template slot="header">
                <div style="font-size: 16px">商品</div>
              </template>
              <template slot-scope="scope">
                <img
                  :src="scope.row.url"
                  class="product-image"
                  @click="cell_click(scope.row)"
                />
                <p class="product-name">{{ scope.row.name }}</p>
              </template>
            </el-table-column>

            <el-table-column
              align="center"
              label="價格"
              prop="price"
              sortable
              width="150"
            >
              <template slot-scope="scope">
                <span style="color: #667eea; font-weight: 600; font-size: 16px"
                  >{{ scope.row.price }}$</span
                >
              </template>
            </el-table-column>

            <el-table-column
              align="center"
              label="數量"
              prop="amount"
              sortable
              width="150"
            >
              <template slot-scope="scope">
                <el-tag
                  :type="
                    scope.row.amount > 10
                      ? 'success'
                      : scope.row.amount > 0
                      ? 'warning'
                      : 'danger'
                  "
                >
                  {{ scope.row.amount }}
                </el-tag>
              </template>
            </el-table-column>

            <el-table-column
              align="center"
              label="熱門度"
              prop="hot"
              sortable
              width="150"
            >
              <template slot-scope="scope">
                <el-rate
                  v-model="scope.row.hot"
                  disabled
                  show-score
                  text-color="#ff9900"
                  :max="5"
                ></el-rate>
              </template>
            </el-table-column>

            <el-table-column
              align="center"
              label="上架時間"
              prop="time"
              sortable
            >
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Show_All',
  data() {
    return {
      user: '',
      user_money: '',
      search_text: '',
      product_data: [],
      table_data: [],
      recharge: {
        number: '',
        digtal3: '',
        money: '',
      },
    }
  },
  created() {
    if (sessionStorage['user'] != undefined) {
      this.user = JSON.parse(sessionStorage['user'])

      this.axios
        .get('/get_all_product', {
          params: {
            user: this.user,
          },
        })
        .then((response) => {
          this.product_data = response.data
          this.axios.post('/get_all_product_url').then((response) => {
            for (let i in response.data) {
              this.product_data[i]['url'] = response.data[i]
            }
            this.table_data = this.product_data
          })
        })

      this.axios.post('/get_all_user', {}).then((response) => {
        let db_user = response.data.filter((item) => {
          return item['user'] == this.user
        })
        this.user_money = db_user[0]['setting']
      })
    }
  },
  watch: {},
  methods: {
    manage() {
      this.$router.push({ name: 'manage' })
    },
    logout() {
      sessionStorage.clear()
      this.$router.push('/login')
    },
    select_menu(index) {
      switch (index) {
        case '全部':
          this.table_data = this.product_data
          break
        case '生活':
          this.table_data = this.product_data.filter((item) => {
            return item['group'] == '生活'
          })
          break
        case '遊戲':
          this.table_data = this.product_data.filter((item) => {
            return item['group'] == '遊戲'
          })
          break
        case '手機':
          this.table_data = this.product_data.filter((item) => {
            return item['group'] == '手機'
          })
          break
        case '食物':
          this.table_data = this.product_data.filter((item) => {
            return item['group'] == '食物'
          })
          break
        case '口罩':
          this.table_data = this.product_data.filter((item) => {
            return item['group'] == '口罩'
          })
          break
        case '娃娃':
          this.table_data = this.product_data.filter((item) => {
            return item['group'] == '娃娃'
          })
          break
        case '成人':
          this.table_data = this.product_data.filter((item) => {
            return item['group'] == '成人'
          })
          break
      }
    },
    cell_click(row) {
      sessionStorage.setItem('play_info', JSON.stringify(row))
      this.$router.push({ name: 'play' })
    },
    search() {
      this.table_data = this.product_data.filter((item) => {
        return item['name'].includes(this.search_text)
      })
    },
    set_user_money() {
      this.axios
        .post('/set_user_money', {
          user: this.user,
          money: this.recharge.money,
        })
        .then((response) => {
          location.reload()
          this.$message('加值成功')
        })
    },
  },
}
</script>
