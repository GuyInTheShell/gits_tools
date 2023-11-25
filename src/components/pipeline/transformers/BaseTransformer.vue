<script>
</script>
<script setup lang="ts">
import { ref, onBeforeUpdate } from 'vue'

const props = defineProps<{
  // Component setup
  title: string
  transform: Function
  // Reactive transformer
  input?: string
}>()

const emit = defineEmits<{
  valueChange: [text: string]     // broadcasts the new value of the transformer
}>()

let out = ref<string>("")

// Reacts to input changes which is the only prop we expect to actually change
onBeforeUpdate(() => {
  if (props.input === undefined || !props.input) {
    return ""
  }
  out = props.transform(props.input)
  emit('valueChange', out);
})
</script>

<template>
  <v-card color="#ECE3CE">
    <v-card-title>{{ title }}</v-card-title>
    <v-card-subtitle>bin <v-icon icon="mdi-arrow-right" /> str</v-card-subtitle>
    <v-card-text v-if="props.input">
      <p>Input: {{ props.input.substring(0, 10) }}...</p>
      <!-- the computed property needs to be used if we want the emit it contains to be triggered -->
      <p>Output: {{ out.substring(0, 10) }}...</p>
    </v-card-text>
  </v-card>
</template>

<style scoped></style>
