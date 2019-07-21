<template>
  <div class="container">
  	<LeftBar @selected="selected" />
  	<RightBar :groups="displayGroups" />
  </div>
</template>
<script>
import Func from '../../static/common.js';
import tags from '../../static/tags.json';
import staffs from '../../static/staffs.json';
import LeftBar from './LeftBar';
import RightBar from './RightBar.vue';

export default {
  data () {
  	return {
      displayGroups: [],
  	  selectedGroups: [], tags, staffs,
  	}
  },
  components: {
  	LeftBar, RightBar
  },
  methods: {
    sortSelectedGroups () {
      const veryHigh = [];
      const high = [];
      const middle = [];
      const normal = [];
      const newhand = [];
      for (let i = 0; i < this.displayGroups.length; i++) {
        const group = this.displayGroups[i];
        for (let j = 0; j < group.staffs.length; j++) {
          const staff = group.staffs[j];
          group.count = group.count || 0;
          group[`l${staff.level}`] = group[`l${staff.level}`] || 0;
          group.count++;
          group[`l${staff.level}`]++;
        }
        switch (true) {
          case group.l6 > 0:
            veryHigh.push(group);
            break;
          case !group.l4 && !group.l3 && !group.l2:
            high.push(group);
            break;
          case !group.l3 && !group.l2 > 0:
            middle.push(group);
            break;
          case group.l5 > 0:
            normal.push(group);
            break;
          default:
            newhand.push(group);
            break;
        }
      }
      veryHigh.sort(Func.compare('l6'));
      high.sort(Func.compare('l5'));
      middle.sort(Func.compare('l4'));
      normal.sort(Func.compare('l3'));
      newhand.sort(Func.compare('count'));
      
      for (let i = 0; i < middle.length; i++) {
        middle[i].staffs.sort(Func.compare('level', true));
      }
      for (let i = 0; i < normal.length; i++) {
        normal[i].staffs.sort(Func.compare('level', true));
      }
      for (let i = 0; i < newhand.length; i++) {
        newhand[i].staffs.sort(Func.compare('level', true));
      }

      this.displayGroups = [...veryHigh, ...high, ...middle, ...normal, ...newhand];
    },
    filterSelectedGroups () {
      const displayGroups = [];
      for (let i = 0; i < this.selectedGroups.length; i++) {
        const group = this.selectedGroups[i];
        const isRare = (group.tagIds.indexOf(this.rareId) !== -1);
        displayGroups[i] = { tagNames: [], staffs: [] };
        for (let j = 0; j < group.tagIds.length; j++) {
          const id = group.tagIds[j];
          displayGroups[i].tagNames.push(this.tags[id].name);
        }
        for (let j = 0; j < group.staffs.length; j++) {
          const staffId = group.staffs[j];
          const staff = this.staffs[staffId];
          displayGroups[i].staffs.push({
            id: staffId,
            name: staff.name,
            level: staff.level,
          });
        }
      }
      this.displayGroups = displayGroups;
    },
  	selected (selectedGroups) {
      this.selectedGroups = selectedGroups;
      this.filterSelectedGroups();
      this.sortSelectedGroups();
  	}
  }
}
</script>
<style scoped>
  .container {
    padding-top: 30px;
    width: 1000px;
    margin: auto;
  }
</style>