<template>

  <div style="display: flex;margin: auto;justify-content: center;background: #daf3da">
    <div class="nav_item click" :class="{nav_item_active:currItem==0}" @click="switchIndex(0)">home</div>
    <div class="nav_item click" :class="{nav_item_active:currItem==1}" @click="switchIndex(1)">about</div>
    <div class="nav_item click" :class="{nav_item_active:currItem==2}" @click="switchIndex(2)">mine</div>
  </div>

</template>

<script setup lang="ts">

import {ref} from "vue";
import {Page, pageJump} from "@/router/Page";

const currItem = ref(0);

function switchIndex(index: number) {
  currItem.value = index;
  if (currItem.value == 0) {
    pageJump(Page.home);
  } else if (currItem.value == 1) {
    pageJump(Page.about);
  } else if (currItem.value == 2) {
    pageJump(Page.mine);
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
