<script setup lang="ts">
import { ref } from 'vue'

import Display from './Display.vue'
import TransformerStack from './TransformerStack.vue'
import Library from './Library.vue'


var input = ref<string>("")
var output = ref<string>("")
</script>

<template>
  <div class="pipeline">
    <v-sheet class="input" elevation=10 rounded>
      <Display class="display" placeholder="Your input here" @text-change="newtext => input = newtext" />
    </v-sheet>
    <div class="stack bg-blue-grey-lighten-5">
      <v-card color="#739072">
        <v-card-title>Processing pipeline</v-card-title>
      </v-card>
      <TransformerStack style="height: 100%;" :input="input" @done="value => output = value" />
    </div>
    <v-sheet class="output" elevation=10 rounded>
      <Display class="display" placeholder="Output will be shown here" :text="output" disabled />
    </v-sheet>
    <div class="library bg-blue-grey-lighten-5">
      <v-card color="#4F6F52">
        <v-card-title>Available transformers</v-card-title>
      </v-card>
      <Library class="bg-blue-grey-lighten-5" />
    </div>
  </div>
</template>

<style scoped>
.pipeline {
  display: flex;
  height: 100%;
  flex-grow: 1;
}

.stack {
  min-width: 350px;
  flex-grow: 1;
}

.library {
  min-width: 350px;
  flex-grow: 1;
}

.input,
.output {
  flex-grow: 3;
  padding: 5px;
  margin: 15px;

  >.display {
    height: 100%;
    width: 100%;
  }
}

p.title {
  padding: 5px;
  color: #ECE3CE;
  font-weight: 900;
}
</style>
