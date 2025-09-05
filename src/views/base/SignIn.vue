<script setup lang="ts">
import { reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()

function onSubmit() {
  const path = (route.query.from || '/') as string
  router.replace({ path })
}

const formState = reactive({
  account: '',
  password: '',
  code: '',
})
</script>

<template>
  <img src="@/assets/images/logo.png" class="logo" />
  <van-form class="main" @submit="onSubmit">
    <van-cell-group inset>
      <van-field
        v-model="formState.account"
        name="account"
        label="账号"
        placeholder="用户名/手机号"
        :rules="[{ required: true, message: '请填写账号' }]"
      />
      <van-field
        v-model="formState.password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
    </van-cell-group>
    <div style="margin: 16px">
      <van-button round block type="primary" native-type="submit"> 提交 </van-button>
    </div>
  </van-form>
</template>

<style scoped>
.logo {
  width: 100px;
  height: 100px;
}
.main {
  margin-top: 30px;
}
</style>
