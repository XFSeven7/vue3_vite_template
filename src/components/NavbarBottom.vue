<template>

  <div class="content">
    <div class="nav_item click" :class="{nav_item_active:currItem==0}" @click="switchIndex(0)">
      <img src="@/assets/images/logo.png" style="width: 24px;height: 24px"/>
      <div>home</div>
    </div>
    <div class="nav_item click" :class="{nav_item_active:currItem==1}" @click="switchIndex(1)">
      <img src="@/assets/images/logo.png" style="width: 24px;height: 24px"/>
      <div>about</div>
    </div>
    <div class="nav_item click" :class="{nav_item_active:currItem==2}" @click="switchIndex(2)">
      <img src="@/assets/images/logo.png" style="width: 24px;height: 24px"/>
      <div>mine</div>
    </div>
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

.content {
  bottom: 0;
  position: fixed;
  display: flex;
  width: 100%;
  height: fit-content;
  justify-content: space-evenly;
  background: #5f6b5f
}

.nav_item {
  line-height: 100%;
  align-items: center;
  font-size: 22px;
  display: flex;
  margin: 10px;
  cursor: pointer;
  flex-direction: column;
}

.nav_item_active {
  color: #42b983;
}

</style>
