<script setup lang="ts">
import { ref } from 'vue'

import BaseTransformer from './BaseTransformer.vue'

const prefix = ref<boolean>(false)

const props = defineProps<{
  input?: string
}>()

const emit = defineEmits<{
  valueChange: [text: string]     // broadcasts the new value of the transformer
}>()

function transform(payload: string): string {
  let hex = '';
  if (prefix.value) {
    hex += "0x"
  }

  for (let i = 0; i < payload.length; i++) {
    const charCode = payload.charCodeAt(i)
    const hexValue = charCode.toString(16)

    // Pad with zeros to ensure two-digit representation
    hex += hexValue.padStart(2, '0')
  }

  return hex
}

function on0xChange(value: any) {
  value = value as boolean
  prefix.value = value
  recompute()
}

function recompute() {
  emit('valueChange', transform(props.input || ""))
}

</script>

<template>
  <BaseTransformer :input="props.input" @value-change="(out) => emit('valueChange', out)" title="To Hex"
    :transform="transform">
    <template #config>
      <v-checkbox label="With '0x' prefix" @update:model-value="on0xChange"></v-checkbox>
    </template>
  </BaseTransformer>
</template>

<style scoped></style>
