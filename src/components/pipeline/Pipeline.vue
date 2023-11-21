<script setup lang="ts">
import { ref } from 'vue'
import Display from './Display.vue'

var input = ref("")
</script>

<template>
  <div class="pipeline">
    <Display class="left" text="Your input here" @text-change="newtext => input = newtext" />
    <div class="center">Center</div>
    <Display class="right" :text="input" disabled />
  </div>
</template>

<style scoped>
.pipeline {
  display: flex;
  width: 100%;
  height: 100%;
}

.center {
  flex-grow: 1;
}

.left,
.right {
  min-width: 250px;
  background-color: cyan;
}
</style>
