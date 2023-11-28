<script setup lang="ts">
import BaseTransformer from './BaseTransformer.vue'


const props = defineProps<{
  input?: string
}>()

const emit = defineEmits<{
  valueChange: [text: string]     // broadcasts the new value of the transformer
}>()

// https://web.dev/articles/base64-encoding
function transform(payload: string): any {
  const binString = atob(payload);
  const bytes = Uint8Array.from(binString, (m) => m.codePointAt(0) || 0)
  return new TextDecoder().decode(bytes);
}

</script>

<template>
  <BaseTransformer :input="props.input" @value-change="(out) => emit('valueChange', out)" title="From Base64"
    :transform="transform" />
</template>

<style scoped></style>
