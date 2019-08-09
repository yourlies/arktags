<template>
  <div class="container">
    <TagSearch class="tag-search" v-show="screenMode == 1" />
  	<LeftBar @select="handle" />
  	<RightBar :groups="groups">
      <Infotip v-show="screenMode == 0" />
    </RightBar>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import Infotip from './Infotip.vue';
import TagSearch from './LeftBar/search.vue';
import LeftBar from './LeftBar';
import RightBar from './RightBar.vue';

export default {
  data () {
  	return {
      groups: [],
  	}
  },
  computed: mapState({
    screenMode: (state) => state.common.screenMode,
  }),
  components: {
  	LeftBar, RightBar, Infotip, TagSearch
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
      padding: 0;
      padding-top: 0;
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