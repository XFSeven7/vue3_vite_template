<template>
  <div>
    <h1 style="text-align: center">This is an home page</h1>
    <div style="padding: 12px;display: flex;flex-wrap: wrap">
      <div v-for="item in 30" class="frame_1">{{item}}</div>
    </div>
  </div>
</template>

<script lang="ts">
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
  line-height: 180px;
  text-align: center;
  font-size: 50px;
  color: var(--theme);
  margin: 8px;
  width: 160px;
  height: 180px;
  border-radius: 8px;
  background-color: rgb(178, 223, 220);
}
</style>
