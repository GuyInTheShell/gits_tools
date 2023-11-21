<script setup lang="ts">

import ToBase64 from './transformers/ToBase64.vue'

const props = defineProps<{
  input: string           // The input value to be converted through the chain
  components: string[]    // The chain of transformation to apply to the input
}>()

const emit = defineEmits<{
  (e: 'done', value: string): void     // broadcasts the final value at the end of the transformation chain
}>()

</script>

<template v-for="comp in props.components">
  <ToBase64 :input="props.input" @value-change="value => $emit('done', value)" />
</template>

<style scoped></style>
