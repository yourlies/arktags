<template>
  <div id="app">
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>
<style>
  body {
    margin: 0;
    padding: 0;
  }
  .df {
    display: flex;
  }
  .df.center {
    align-items: center;
  }
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .dib {
    display: inline-block;
  }
  .tc {
    text-align: center;
  }
  .min25 {
    min-width: 25px;
  }
  .min60 {
    min-width: 60px;
  }
  .max300 {
    max-width: 300px;
  }
  .pointer {
    cursor: pointer;
  }
</style>