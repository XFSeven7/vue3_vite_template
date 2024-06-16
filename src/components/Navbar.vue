<template>

  <div class="content">
    <div class="nav_item click" :class="{nav_item_active:navIndex==0}" @click="switchIndex(0)">home</div>
    <div class="nav_item click" :class="{nav_item_active:navIndex==1}" @click="switchIndex(1)">about</div>
    <div class="nav_item click" :class="{nav_item_active:navIndex==2}" @click="switchIndex(2)">mine</div>
  </div>

</template>

<script setup lang="ts">

import {Page, pageJump} from "@/router/Page";
import {useTestStore} from "@/store/app/testStore";
import {storeToRefs} from "pinia";

const useTest = useTestStore();

const {navIndex} = storeToRefs(useTest);

function switchIndex(index: number) {
  navIndex.value = index;
  if (navIndex.value == 0) {
    pageJump(Page.home);
  } else if (navIndex.value == 1) {
    pageJump(Page.about);
  } else if (navIndex.value == 2) {
    pageJump(Page.mine);
  }
}

</script>

<style scoped>

.content {
  position: absolute;
  display: flex;
  width: 100%;
  height: 44rem;
  justify-content: center;
  background: #daf3da
}

.nav_item {
  line-height: 100%;
  font-size: 22rem;
  margin: 10rem;
  cursor: pointer;
}

.nav_item_active {
  color: #42b983;
}

</style>
