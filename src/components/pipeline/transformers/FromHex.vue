<script setup lang = "ts" >
import BaseTransformer from './BaseTransformer.vue'


const props = defineProps<{
  input?: string
}>()

const emit = defineEmits<{
  valueChange: [text: string]     // broadcasts the new value of the transformer
}>()

function transform(payload: string): string {
  let str = ''
  for (let i = 0; i < payload.length; i += 2) {
    const hexValue = payload.substring(i, i + 2)
    const decimalValue = parseInt(hexValue, 16)
    str += String.fromCharCode(decimalValue)
  }

  return str
}

</script>

<template>
  <BaseTransformer :input="props.input" @value-change="(out) => emit('valueChange', out)" title="From Hex"
    :transform="transform" />
</template>

<style scoped></style>
