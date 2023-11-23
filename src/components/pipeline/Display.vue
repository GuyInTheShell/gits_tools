<script setup lang="ts">

const props = defineProps<{
  text?: string         // Text to display
  placeholder?: string  // Sample text when the display is empty
  disabled?: boolean    // Whether the display is read-only
}>()

const emit = defineEmits<{
  (e: 'textChange', text: string): void     // broadcasts the new value of the Display component
}>()

function onTextChange(event: Event): void {
  var value = "";
  if (event.target) {
    value = (event.target as HTMLTextAreaElement).value;
  }

  emit('textChange', value);
}

</script>

<template>
  <textarea class="input" :placeholder="props.placeholder" :value="props.text" @input="onTextChange"
    :disabled="disabled" />
</template>

<style scoped>
.input {
  padding: 5px;
}

textarea:focus-visible {
  outline: none;
}
</style>
