<script setup lang="ts">
import Pipeline from './components/pipeline/Pipeline.vue'
</script>

<template>
  <div id="page">
    <header>
      You did it!
    </header>

    <div id="content">
      <nav>
        Menu
      </nav>

      <main>
        <Pipeline />
      </main>
    </div>

    <footer>
      You did it!
    </footer>
  </div>
</template>

<style scoped>
#page {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;

  height: 100vh;
  width: 100vw;

  >header {
    min-height: 75px;
    background: lightgray;
    line-height: 1.5;
  }

  >footer {
    min-height: 50px;
    background: lightgreen;
    line-height: 1.5;
  }

  >#content {
    flex-grow: 1;

    display: flex;
    flex-wrap: nowrap;

    >nav {
      background: lightblue;
      width: 200px;
    }

    >main {
      flex-grow: 1;

      background: red;
      width: 100px;
    }
  }
}
</style>
