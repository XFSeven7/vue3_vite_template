<template>
  <div class="about">
    <h1>This is an about page</h1>
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


</style>
