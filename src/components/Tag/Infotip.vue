<template>
  <div class="content">
    <div class="cell" ref="cell">
      #Artificial &nbsp;&nbsp;&nbsp;作者 / 因雨而生
      <span
        :key="index"
        v-for="(btn, index) in buttons"
        @click="operate(btn)"
        class="pointer">{{ btn.name }}</span>
    </div>
    <div class="inner" @click="gestures">
      作者の忠言：{{ content }}
    </div>
  </div>
</template>
<script>
  import { mapState } from 'vuex';

  export default {
    data () {
      return {
        content: '',
        timestamp: 0,
        buttons: [
          {
            id: 'infotip/0',
            name: '保底', isSelect: false,
            payload: {},
            cancel () {
              this.name = '保底';
              this.payload = { mutation: 'filter/limit', type: -1 };
            },
            select () {
              this.name = '取消保底';
              this.payload = { mutation: 'filter/limit', type: 2, content: [3] };
            },
            recycle () {
              this.name = '保底';
              this.isSelect = false;
            }
          },
        ],
      }
    },
    computed: mapState({
      info: (state) => state.infotip,
    }),
    methods: {
      shake () {
        const ref = this.$refs.cell;
        let index = 0;
        const count = this.count;
        let deg = [2, 3, -2, -3, 2, 3, -2, -3, 2, 3, -2, -3];
        const raf = () => {
          index++;
          if (index > deg.length || count != this.count) {
            ref.style = '';
            return false;
          }
          ref.style = `position:relative;transform:rotate(${deg[index]}deg);`;
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
      },
      operate (btn) {
        btn.isSelect = !btn.isSelect;
        btn.isSelect ? btn.select() : btn.cancel();
        const { mutation } = btn.payload;
        const recycle = function () {
          btn.recycle();
        }
        this.$store.commit(mutation, { ...btn.payload, recycle, recycleId: btn.id });
      },
      displayInfotip () {
        if (this.info.shake) {
          this.shake();
        }
        this.content = '';
        let frameCount = 0;
        const content = this.info.content || '自闭中···';
        const count = this.info.count;

        const raf = () => {
          frameCount++;
          if (this.content.length >= content.length || count != this.info.count) {
            return false;
          }
          if (frameCount % 4 == 0) {
            this.content += content[(frameCount / 4) - 1];
            requestAnimationFrame(raf);
          } else {
            requestAnimationFrame(raf); 
          }
        }
        requestAnimationFrame(raf);
      },
      gestures () {
        const timestamp = new Date().getTime();
        if (timestamp - this.timestamp < 300) {
          const btn = this.buttons[0];
          this.operate(btn);
          this.timestamp = 0;          
        } else {
          this.timestamp = timestamp;          
        }
      }
    },
    mounted () {
      this.displayInfotip();
    },
    watch: {
      'info.count' () {
        this.displayInfotip();
      }
    }
  }
</script>
<style scoped>
  .content {
    border-left: 5px solid #333;
    margin-bottom: 25px;
  }
  .content span {
    padding: 0;
    border: 0;
    margin: 0;
    background-color: transparent;
  }
  .content .ball {
    position: absolute;
  }
  .content .cell {
    border-radius: 3px;
    box-shadow: 2px 2px 2px #888;
    color: #fff;
    background-color: #333;
    padding: 15px;
    margin-left: 5px;
    margin-bottom: 6px;
  }
  .content .inner {
    box-sizing: border-box;
    margin-left: 5px;
    border-bottom: 2px dashed #666;
    padding: 10px;
    min-height: 44px;
    user-select: none;
  }
  .content .inner span {
    box-shadow: 2px 2px 2px #888;
    background-color: #333;
    color: #fff;
  }
</style>