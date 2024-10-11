<template>
  <div>
    <div style="text-align: center;font-size: 22rem">This is an home page</div>
    <div style="padding: 12rem;display: flex;flex-wrap: wrap">
      <div v-for="item in 30" class="frame_1">{{ item }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">

import {onMounted} from "vue";
import {getData} from "@/api/home";

onMounted(() => {

  // 演示： 模拟数据请求
  getData({
    page: 1,
    size: 20
  }).then(data => {
  }).catch(error => {
  }).finally(() => {
  });

})

</script>

<style scoped>
.frame_1 {
  line-height: 180rem;
  text-align: center;
  font-size: 50rem;
  color: var(--theme);
  margin: 8rem;
  width: 150rem;
  height: 180rem;
  border-radius: 8rem;
  background-color: rgb(178, 223, 220);
}
</style>
