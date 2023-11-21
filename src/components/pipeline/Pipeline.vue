<script setup lang="ts">
import { ref } from 'vue'
import Display from './Display.vue'
import TransformerStack from './TransformerStack.vue'

var input = ref("")
var output = ref("")
</script>

<template>
  <div class="pipeline">
    <Display class="left" text="Your input here" @text-change="newtext => input = newtext" />
    <TransformerStack class="center" :input="input" :components="['a']" @done="value => output = value" />
    <Display class="right" :text="output" disabled />
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
