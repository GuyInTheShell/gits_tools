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
  <p v-if="components.length === 0" class="empty pa-1">No transformations</p>
  <draggable v-bind="$attrs" v-model="components" :group="{ name: 'transformers' }" item-key="id">
    <template #item="{ element, index: idx }">
      <component class="trans" :is="element" :input="stepValues[idx]"
        @value-change="(value: any) => stepValues[idx + 1] = value" :key="idx" />
    </template>
  </draggable>
</template>

<style scoped>
.trans {
  border-style: inset;
  border-width: 1px;
}

p.empty {
  font-weight: 500;
  font-size: 2rem;
  text-align: center;
  color: #4F6F52;
}
</style>
