<script setup lang="ts">
import { ref } from 'vue'
import Display from './Display.vue'
import TransformerStack from './TransformerStack.vue'
import ToBase64 from './transformers/ToBase64.vue'

var input = ref<string>("")
var output = ref<string>("")
</script>

<template>
  <div class="pipeline">
    <Display class="input" text="Your input here" @text-change="newtext => input = newtext" />
    <TransformerStack class="stack" :input="input" :components="[ToBase64, ToBase64, ToBase64]"
      @done="value => output = value" />
    <Display class="output" :text="output" disabled />
    <div class="library">Available transformers</div>
  </div>
</template>

<style scoped>
.pipeline {
  display: flex;
  width: 100%;
  height: 100%;
}

.stack {
  min-width: 350px;
  max-width: 350px;
}

.library {
  background-color: darkred;
  min-width: 350px;
  max-width: 350px;
}

.input,
.output {
  flex-grow: 1;
  background-color: cyan;
}
</style>
