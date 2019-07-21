<template>
  <div class="contain">
    <TagSearch
      @filterGroups="filterGroups"
      :selectedGroups="selectedGroups"
      :clearCount="clearCount"
      :eventCount="eventCount">
      <span class="pointer bcrRed" @click="clear">清空</span>
    </TagSearch>
    <TagSelect
      @selectGroups="selectGroups"
      :clearCount="clearCount"/>
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
}
</script>
<style scoped>
  .contain {
    background: #eee;
    padding: 10px 20px;
    padding-bottom: 15px;
    border-left: 5px solid #ddd;
    display: inline-block;
  }
  .section span {
    padding: 5px 10px;
    border: 2px solid #d9d9d9;
  }

  .section span.selected {
    background: #007bff;
    color: #fff;
  }

  .box .inner {
    border-bottom: 1px dashed #999;
    margin-bottom: 5px;
    width: 330px;
  }
</style>