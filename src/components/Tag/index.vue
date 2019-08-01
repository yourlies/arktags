<template>
  <div class="container">
  	<LeftBar @select="handle" />
  	<RightBar :groups="groups">
      <Infotip />
    </RightBar>
  </div>
</template>
<script>
import Infotip from './Infotip.vue';
import LeftBar from './LeftBar';
import RightBar from './RightBar.vue';

export default {
  data () {
  	return {
      groups: [],
  	}
  },
  components: {
  	LeftBar, RightBar, Infotip,
  },
  methods: {
  	handle (groups) {
      this.groups = groups;
  	}
  },
  mounted () {
    this.$store.commit('infotip/create', {
      shake: false,
      count: this.insurCount,
      content: '点击上方保底按钮/快速双击此处，切换筛选结果为四星以上'
    });
  }
}
</script>
<style scoped>
  @media screen and (max-width: 1000px) {
    .container {
      padding: 15px;
      padding-top: 60px;
    }
  }
  @media screen and (min-width: 1000px) {
    .container {
      padding-top: 30px;
      width: 1000px;
      margin: auto;
    }
  }
</style>