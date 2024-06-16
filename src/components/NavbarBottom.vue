<template>

  <div class="content">
    <div class="nav_item click" :class="{nav_item_active:navIndex==0}" @click="switchIndex(0)">
      <img src="@/assets/images/logo.png" style="width: 24px;height: 24px"/>
      <div>home</div>
    </div>
    <div class="nav_item click" :class="{nav_item_active:navIndex==1}" @click="switchIndex(1)">
      <img src="@/assets/images/logo.png" style="width: 24px;height: 24px"/>
      <div>about</div>
    </div>
    <div class="nav_item click" :class="{nav_item_active:navIndex==2}" @click="switchIndex(2)">
      <img src="@/assets/images/logo.png" style="width: 24px;height: 24px"/>
      <div>mine</div>
    </div>
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
