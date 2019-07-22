<template>
  <div style="display: inline-block;">
    <div class="contain" v-show="screenMode == 0">
      <TagSearch
        @filterGroups="filterGroups"
        :selectedGroups="selectedGroups"
        :screenMode="screenMode"
        :clearCount="clearCount"
        :eventCount="eventCount">
        <span class="pointer bcrRed" @click="clear">清空</span>
      </TagSearch>
      <TagSelect
        @selectGroups="selectGroups"
        :screenMode="screenMode"
        :clearCount="clearCount"/>
    </div>
    <div v-show="screenMode == 1">
      <TagSelect
        @selectGroups="selectGroups"
        :screenMode="screenMode"
        :clearCount="clearCount"/>
    </div>
  </div>
</template>
<script>
import TagSelect from './select.vue';
import TagSearch from './search.vue';

export default {
  data () {
    return {
      selectedGroups: [],
      eventCount: 0,
      clearCount: 0,
      screenMode: 0,
    }
  },
  components: {
    TagSelect, TagSearch
  },
  methods: {
    clear() {
      this.clearCount++;
      this.selectedGroups = [];
      this.$emit('selected', []);
    },
    selectGroups (selectedGroups) {
      this.selectedGroups = selectedGroups;
      this.eventCount++;
    },
    filterGroups (filteredGroups) {
      this.$emit('selected', filteredGroups);
    },
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
<style scoped>
  @media screen and (max-width: 1000px) {
    .contain {
      background: #eee;
      padding: 10px 20px;
      padding-bottom: 15px;
      border-left: 5px solid #ddd;
      margin-bottom: 10px;
    }
  }
  @media screen and (min-width: 1000px) {
    .contain {
      background: #eee;
      padding: 10px 20px;
      padding-bottom: 15px;
      border-left: 5px solid #ddd;
      display: inline-block;
    }
  }
</style>