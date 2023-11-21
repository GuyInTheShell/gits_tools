<script setup lang="ts">
import { computed } from 'vue'


const props = defineProps<{
  input: string
}>()

const emit = defineEmits<{
  (e: 'valueChange', text: string): void     // broadcasts the new value of the transformer
}>()

// Used to react to any change of the input to emit the output
const output = computed(() => {
  var out = btoa(props.input);
  emit('valueChange', out);
  return out;
})

</script>

<template>
  <div>
    <p>To Base64 transformer </p>
    <p>Input: {{ props.input }}</p>
    <!-- the computed property needs to be used if we want the emit it contains to be triggered -->
    <p>Output: {{ output }}</p>
  </div>
</template>

<style scoped></style>
