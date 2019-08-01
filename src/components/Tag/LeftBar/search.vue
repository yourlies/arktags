<template>
  <div class="section" @click="gestures">
    <span class="pointer" @click="clear">清空</span>
    <input
      @blur="search"
      v-model="inputStaff"
      placeholder="筛选干员"
      maxlength="4" />
  </div>
</template>
<script>
export default {
  data () {
    return {
      timestamp: 0,
      inputStaff: '',
    }
  },
  methods: {
    search () {
      if (this.inputStaff != '') {
        const recycle = () => {
          this.inputStaff = '';
        }
        this.$store.commit('filter/limit', {
          type: 0, content: this.inputStaff,
          recycleId: 'search/0', recycle,
        });
      }
    },
    clear () {
      this.$store.commit('filter/limit', { type: -1 });
      this.$store.commit('group/clear');
    },
    gestures (e) {
      const timestamp = new Date().getTime();
      if ((timestamp - this.timestamp) < 300 && e.target.nodeName == 'DIV') {
        this.$store.commit('infotip/create', {
          content: '盲点你发现了华生，此操作将清空筛选条件', shake: true,
        });
        this.$store.commit('filter/limit', { type: -1 });
        this.timestamp = 0;        
      } else {
        this.timestamp = timestamp;        
      }
    }
  },
}
</script>

<style scoped>
  .section {
    padding: 10px 20px;
    background-color: #333;
    box-shadow: 1px 1px 3px #888;
    margin-bottom: 10px;
    border-bottom-left-radius: 20px;
    user-select: none;
  }
  .section span {
    background-color: #f90;
    color: #000;
    border-radius: 0;
    padding: 5px 10px;
    box-shadow: 4px 4px 0 rgba(255, 153, 0, .4);
  }
  input {
    width: 70px;
    border: 0;
    padding: 6px 10px;
    margin: 5px;
    font-size: 16px;
    position: relative;
    top: -1px;
    outline: none;
    z-index: 1;
    box-shadow: 4px 4px 0 #888;
  }
  .touch-area-wrap {
    position: absolute;
    z-index: 2;
  }
</style>