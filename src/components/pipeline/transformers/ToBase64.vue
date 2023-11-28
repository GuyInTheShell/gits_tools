<script setup lang="ts">
import BaseTransformer from './BaseTransformer.vue'


const props = defineProps<{
  input?: string
}>()

const emit = defineEmits<{
  valueChange: [text: string]     // broadcasts the new value of the transformer
}>()

// https://web.dev/articles/base64-encoding
function transform(payload: string): string {
  const bytes = new TextEncoder().encode(payload)
  const binString = String.fromCodePoint(...bytes)
  return btoa(binString)
}

</script>

<template>
  <BaseTransformer :input="props.input" @value-change="(out) => emit('valueChange', out)" title="To Base64"
    :transform="transform" />
</template>

<style scoped></style>
