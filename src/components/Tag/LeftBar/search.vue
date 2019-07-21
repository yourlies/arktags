<template>
  <ul class="section">
    <li class="box">
      <slot></slot>
      <input
        @blur="search"
        v-model="inputStaff"
        placeholder="筛选干员"
        maxlength="4">
        联系作者：958142428
    </li>
    <li class="box">
      <span class="pointer bcrRed">店长推荐</span>
      <span
        @click="addLimitation(0, 1, [1])"
        :class="['pointer', currentIndex == 0 ? 'selected' : '']">赌小车</span>
      <span
        @click="addLimitation(1, 2, [3])"
        :class="['pointer', currentIndex == 1 ? 'selected' : '']">保底</span>
    </li>
    <li class="box">
      <span class="pointer bcrRed">公招限定</span>
      <span
        @click="addLimitation(2, 0, '因陀罗')"
        :class="['pointer', currentIndex == 2 ? 'selected' : '']">因陀罗</span>
      <span
        @click="addLimitation(3, 0, '火神')"
        :class="['pointer', currentIndex == 3 ? 'selected' : '']">火神</span>
    </li>
  </ul>
</template>
<script>
import staffs from '../../../static/staffs.json';

export default {
  data () {
    return {
      currentIndex: -1,
      limitation: {
        id: -1, containLevels: [], notContainLevels: [],
      },
      limitType: -1,
      inputStaff: '',
      filteredGroups: '',
      staffs
    }
  },
  props: ['selectedGroups', 'eventCount', 'clearCount'],
  methods: {
    clear() {
      this.clearLimitation();
    },
    search () {
      if (this.inputStaff != '') {
        this.addLimitation(-2, 0, this.inputStaff);
      } else {
        this.clearLimitation();
      }
    },
    clearLimitation () {
      this.currentIndex = -1;
      this.inputStaff = '';
      this.limitType = -1;
    },
    addLimitation (currentIndex, type, limit) {
      if (currentIndex != -2) {
        this.inputStaff = '';
      }
      if (this.currentIndex == currentIndex && currentIndex != -2) {
        this.clearLimitation();
      } else {
        this.currentIndex = currentIndex;
        this.limitType = type;
      }
      switch (type) {
        case 2:
          this.limitation.notContainLevels = limit;
          break;
        case 1:
          this.limitation.containLevels = limit;
          break;
        case 0:
          for (let i = 0; i < this.staffs.length; i++) {
            if (this.staffs[i].name == limit) {
              this.limitation.id = i;
            }
          }
      }
      this.filterSelectedGroups();
    },
    filterSelectedGroups () {
      if (this.limitType === -1) {
        this.$emit('filterGroups', this.selectedGroups);
        return false;
      }
      const rawGroups = [...this.selectedGroups];
      const filteredGroups = [];
      const { containLevels, notContainLevels, id } = this.limitation;
      for (let i = 0; i < rawGroups.length; i++) {
        const group = rawGroups[i];
        if (this.limitType == 1) {
          for (let j = 0; j < containLevels.length; j++) {
            if (group.levels.indexOf(containLevels[j]) !== -1) {
              filteredGroups.push(group);
              break;              
            }
          }
        }
        if (this.limitType == 2) {
          for (let j = 0; j < notContainLevels.length; j++) {
            if (group.levels.indexOf(notContainLevels[j]) !== -1) {              
              break;              
            }
            if (j == notContainLevels.length - 1) {
              filteredGroups.push(rawGroups[i]);
            }
          }
        }
        if (this.limitType == 0) {
          if (group.ids.indexOf(id) !== -1) {
            filteredGroups.push(rawGroups[i]);
          }
        }
      }
      this.filteredGroups = filteredGroups;
      this.$emit('filterGroups', this.filteredGroups);
    },
  },
  watch: {
    eventCount () {
      this.filterSelectedGroups();
    },
    clearCount () {
      this.clear();
    },
  }
}
</script>

<style scoped>
  .section span {
    padding: 5px 10px;
    border: 2px solid #d9d9d9;
  }
  .section span.selected {
    background: #007bff;
    color: #fff;
  }
  .box input {
    width: 70px;
    border: 0;
    padding: 6px 10px;
    margin: 5px;
    font-size: 16px;
    border-radius: 5px;
    position: relative;
    outline: none;
    top: -1px;
  }
</style>