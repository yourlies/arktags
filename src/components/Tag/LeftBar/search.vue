<template>
  <div>
    <div class="section" @click="gestures" v-show="screenMode == 0">
      <span class="pointer" @click="clear">清空</span>
      <input
        @blur="search"
        v-model="inputStaff"
        placeholder="筛选干员"
        maxlength="4" />
    </div>
    <div class="section" @click="gestures" v-show="screenMode == 1">
      <div class="logo">
        <span class="head">公开招募</span>      
        <span class="foot">计算器</span>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  data () {
    return {
      timestamp: 0,
      inputStaff: '',
    }
  },
  computed: mapState({
    screenMode: (state) => state.common.screenMode,
  }),
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
  @media screen and (max-width: 600px) {
    .section {
      border-bottom-left-radius: 10px;
    }
    .logo span {
      padding: 2px 5px;
      margin: 0;
      box-shadow: 0 0 0;
    }
    .logo span.head {
      background-color: transparent;
      color: #fff;
    }
    .logo span.foot {
      border-radius: 2px;
    }
  }
</style>