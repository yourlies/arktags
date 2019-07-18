<template>
  <div id="app">
    <Tag />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Tag from './components/Tag';

export default {
  name: 'app',
  components: {
    Tag
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

  span {
    background: #ddd;
    display: inline-block;
    margin: 5px;
    padding: 7px 10px;
    border-radius: 2px;
    user-select: none;
  }
  .bcrRed {
    background-color: #dc3545;
    color: #fff;
  }
</style>