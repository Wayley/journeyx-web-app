<script setup lang="ts"></script>

<template>
  <RouterView />
  <van-tabbar route fixed>
    <van-tabbar-item to="/galleries" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item to="/trips" icon="flag-o">旅程</van-tabbar-item>
    <van-tabbar-item to="/trips/add">
      <van-icon name="add" size="40" color="#1989fa" />
    </van-tabbar-item>
    <van-tabbar-item to="/discoveries" icon="aim" badge="6">发现</van-tabbar-item>
    <van-tabbar-item to="/mine" icon="user-circle-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<style scoped></style>
