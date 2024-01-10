<script setup lang="ts">
import { ref } from 'vue'
import { useCounterStore } from '@/stores/counter'

import Display from './Display.vue'
import TransformerStack from './TransformerStack.vue'
import Library from './Library.vue'

const store = useCounterStore()

var input = ref<string>("")
var output = ref<string>("")
</script>

<template>
  <v-container fluid class="pipeline d-flex flex-grow-1">
    <v-sheet class="input pa-1 ma-4" elevation=10 rounded>
      <Display class="display" placeholder="Your input here" @text-change="newtext => input = newtext" />
      <v-btn @click="store.increment">++</v-btn>
      <v-btn>Load data</v-btn>
    </v-sheet>
    <v-sheet class="stack bg-blue-grey-lighten-5 flex-grow-1">
      <v-card color="#739072">
        <v-card-title>Processing pipeline</v-card-title>
      </v-card>
      <TransformerStack style="height: 100%;" :input="input" @done="value => output = value" />
    </v-sheet>
    <v-sheet class="output pa-1 ma-4" elevation=10 rounded>
      <Display class="display" placeholder="Output will be shown here" :text="output" disabled />
    </v-sheet>
    <v-sheet class="library bg-blue-grey-lighten-5 flex-grow-1">
      <v-card color="#4F6F52">
        <v-card-title>Available transformers</v-card-title>
      </v-card>
      <Library class="bg-blue-grey-lighten-5" />
    </v-sheet>
  </v-container>
</template>

<style scoped>
.pipeline {
  height: 100%;
}

.stack,
.library {
  min-width: 350px;
}

.input,
.output {
  flex-grow: 3;
}
</style>
