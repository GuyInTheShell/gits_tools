import { ref } from 'vue'
import { defineStore } from 'pinia'


export const useTodoStore = defineStore('todo', () => {
  const todo = ref({})

  function load() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => todo.value = json)
  }

  return { todo, load }
})
