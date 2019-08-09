<template>
  <div class="content">
    <TagSearch v-show="screenMode == 0" />
    <TagSelect :clearCount="clearCount" />
  </div>
</template>
<script>
import tags from '../../../static/tags.json';
import staffs from '../../../static/staffs.json';
import processor from './processor';

import { mapState } from 'vuex';
import TagSelect from './select';
import TagSearch from './search.vue';

export default {
  data () {
  	return {
      staffs, tags,
      clearCount: 0,
      groups: {
      	raw: [], filtered: [], sorted: [], limited: [],
      },
  	}
  },
  computed: mapState({
  	group: (state) => state.group,
    filter: (state) => state.filter,
    screenMode: (state) => state.common.screenMode,
  }),
  components: {
    TagSelect, TagSearch
  },
  methods: {
    limitGroups: processor.limit,
  	sortGroups: processor.sort,
    filterGroups: processor.filter,
  },
  watch: {
  	'group.count' () {
      if (this.group.type === -1) {
        this.clearCount++;
        this.$store.commit('group/recover');
        return false;
      }

  	  this.groups.raw = this.group.content;
  	  this.filterGroups();
  	  this.sortGroups();

      this.limitGroups();
  	  this.$emit('select', this.groups.limited);
  	},
    'filter.count' () {
      this.limitGroups();
      this.$emit('select', this.groups.limited);
    }
  }
}
</script>
<style scoped>
  @media screen and (min-width: 1000px) {
    .content {
      display: inline-block;
    }
  }
</style>