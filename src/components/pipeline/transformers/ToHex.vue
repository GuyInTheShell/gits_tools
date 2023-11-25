<script setup lang="ts">
import BaseTransformer from './BaseTransformer.vue'


const props = defineProps<{
  input?: string
}>()

const emit = defineEmits<{
  valueChange: [text: string]     // broadcasts the new value of the transformer
}>()

function transform(payload: string): string {
  let hex = '';
  for (let i = 0; i < payload.length; i++) {
    const charCode = payload.charCodeAt(i)
    const hexValue = charCode.toString(16)

    // Pad with zeros to ensure two-digit representation
    hex += hexValue.padStart(2, '0')
  }

  return hex
}

</script>

<template>
  <BaseTransformer :input="props.input" @value-change="(out) => emit('valueChange', out)" title="To Hex"
    :transform="transform" />
</template>

<style scoped></style>
