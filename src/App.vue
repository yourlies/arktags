<template>
  <div id="app">
    <Tag />
  </div>
</template>

<script>
import Tag from './components/Tag';

export default {
  name: 'app',
  components: {
    Tag
  },
  mounted () {
    switch (true) {
        case window.innerWidth < 1000:
          this.screenMode = 1;
          break;
        case window.innerWidth >= 1000:
          this.screenMode = 0;
          break;
        default:
          break;
        }
    window.onresize = () => {
      switch (true) {
        case window.innerWidth < 1000:
          this.screenMode = 1;
          break;
        case window.innerWidth >= 1000:
          this.screenMode = 0;
          break;
        default:
          break; 
      }
    }
  }
}
</script>
<style>
  @import './assets/css/icon.css';
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
  .pointer {
    cursor: pointer;
    user-select: none;
  }
  span {
    background: #ddd;
    display: inline-block;
    margin: 5px;
    padding: 7px 10px;
    border-radius: 2px;
    user-select: none;
  }
</style>