<script setup lang="ts">

import { onBeforeUpdate, ref } from 'vue'

const props = defineProps<{
  text?: string         // Text to display
  placeholder?: string  // Sample text when the display is empty
  disabled?: boolean    // Whether the display is read-only
}>()

const emit = defineEmits<{
  (e: 'textChange', text: string): void     // broadcasts the new value of the Display component
}>()

// Can't bind directly props.text because when it's passed empty, it disables input in the text area
// Feels a bit messy but could not make it work better
let content = ref<string>()

onBeforeUpdate(() => {
  if (props.text !== undefined) {
    content.value = props.text
  }
})

function onTextChange(event: Event): void {
  var value = "";
  if (event.target) {
    value = (event.target as HTMLTextAreaElement).value;
  }

  emit('textChange', value);
}

</script>

<template>
  <v-container>
    <v-textarea class="display-input" autofocus :readonly="disabled" :placeholder="props.placeholder" v-model="content"
      @input="onTextChange" hide-details auto-grow> </v-textarea>
  </v-container>
</template>

<style scoped>
.display-input {
  :deep(textarea) {
    height: 100%;
  }
}
</style>
