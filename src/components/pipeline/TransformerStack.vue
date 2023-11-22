<script setup lang="ts">
import { onBeforeMount, onBeforeUpdate, onUpdated, ref, shallowRef } from 'vue'
import type { Component } from "vue"
import draggable from 'vuedraggable'


var stepValues = ref<any[]>([])

const props = defineProps<{
  input: string               // The input value to be converted through the chain
}>()

const emit = defineEmits<{
  done: [value: string]
}>()

// The chain of transformation to apply to the input. Don't try to have deep reactivity.
// The components in the list are already reactive
var components = shallowRef<Component[]>([])

onBeforeUpdate(() => {
  stepValues.value[0] = props.input
})

onBeforeMount(() => {
  for (let i = 0; i < components.value.length; i++) {
    stepValues.value.push("")
  }
})

onUpdated(() => {
  emit('done', stepValues.value[stepValues.value.length - 1])
})

</script>

<template>
  <draggable v-model="components" :group="{ name: 'transformers' }" item-key="id">
    <template #item="{ element, index: idx }">
      <component class="trans" :is="element" :input="stepValues[idx]"
        @value-change="(value: any) => stepValues[idx + 1] = value" :key="idx" />
    </template>
  </draggable>
</template>

<style scoped>
.stack {
  display: flex;
  flex-direction: column;
}

.trans {
  border-style: inset;
  border-width: 1px;
}
</style>
