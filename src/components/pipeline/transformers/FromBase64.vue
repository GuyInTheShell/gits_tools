<script setup lang="ts">
import BaseTransformer from './BaseTransformer.vue'


const props = defineProps<{
  input?: string
}>()

const emit = defineEmits<{
  valueChange: [text: string]     // broadcasts the new value of the transformer
}>()

function transform(payload: string): string {
  return atob(payload)
}

</script>

<template>
  <BaseTransformer :input="props.input" @value-change="(out) => emit('valueChange', out)" title="From Base64"
    :transform="transform" />
</template>

<style scoped></style>
