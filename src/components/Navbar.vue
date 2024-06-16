<template>

  <div style="display: flex;margin: auto;justify-content: center">
    <div class="nav_item click" :class="{nav_item_active:currItem==0}" @click="switchIndex(0)">home</div>
    <div class="nav_item click" :class="{nav_item_active:currItem==1}" @click="switchIndex(1)">about</div>
  </div>

</template>

<script setup lang="ts">

import {ref} from "vue";
import {pageJump} from "@/router/Page";

const currItem = ref(0);

function switchIndex(index: number) {
  currItem.value = index;
  if (currItem.value == 0) {
    pageJump("home");
  }else if (currItem.value == 1) {
    pageJump("about");
  }
}

</script>

<style scoped>

.nav_item {
  font-size: 22px;
  margin: 10px;
  cursor: pointer;
}

.nav_item_active {
  color: #42b983;
}

</style>
