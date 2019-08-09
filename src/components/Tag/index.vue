<template>
  <div class="container">
    <TagSearch class="tag-search" v-show="screenMode == 1" />
  	<LeftBar @select="handle" />
  	<RightBar :groups="groups">
      <Infotip />
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
      content: '点击保底/双击此处，过滤结果为保底'
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