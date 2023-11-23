<script setup lang="ts">
import { computed } from 'vue'


const props = defineProps<{
  input?: string
}>()

const emit = defineEmits<{
  valueChange: [text: string]     // broadcasts the new value of the transformer
}>()

// Used to react to any change of the input to emit the output
const output = computed(() => {
  if (props.input === undefined || !props.input) {
    return ""
  }

  let str = ''
  for (let i = 0; i < props.input.length; i += 2) {
    const hexValue = props.input.substring(i, i+2)
    const decimalValue = parseInt(hexValue, 16)
    str += String.fromCharCode(decimalValue)
  }

  emit('valueChange', str)
  return str
})

</script>

<template>
  <v-card color="#ECE3CE">
    <v-card-title>From Hex</v-card-title>
    <v-card-subtitle>str <v-icon icon="mdi-arrow-right" /> bin</v-card-subtitle>
    <v-card-text v-if="props.input">
      <p>Input: {{ props.input.substring(0, 10) }}...</p>
      <!-- the computed property needs to be used if we want the emit it contains to be triggered -->
      <p>Output: {{ output.substring(0, 10) }}...</p>
    </v-card-text>
  </v-card>
</template>

<style scoped></style>
