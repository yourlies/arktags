<template>
  <div class="container">
    <ul class="leftBar">
      <li class="display">
        <span class="pointer bcrRed" @click="clear">清空</span>
        <input
          v-model="inputStaff"
          placeholder="筛选干员"
          @blur="search"
          maxlength="4">
          联系作者：958142428
      </li>
      <li class="display">
        <span class="pointer bcrRed">店长推荐</span>
        <span
          :class="['pointer', currentIndex == 1 ? 'selected' : '']"
          @click="filterSelectedGroup([1], 1)">赌小车</span>
        <span
          :class="['pointer', currentIndex == 2 ? 'selected' : '']"
          @click="filterSelectedGroup([1, 2, 3], 2, true)">保底</span>
      </li>
      <li class="display">
        <span class="pointer bcrRed">公招限定</span>
        <span
          @click="filterSelectedStaff('因陀罗', 5)"
          :class="['pointer', currentIndex == 5 ? 'selected' : '']">因陀罗</span>
        <span
          @click="filterSelectedStaff('火神', 6)"
          :class="['pointer', currentIndex == 6 ? 'selected' : '']">火神</span>
      </li>
      <li>
        <div :key="index" class="df" v-for="(kind, index) in kinds">
          <div class="inner">
            <span
              v-for="(tag, index) in kind.tags"
              :key="index"
              :class="['unified', 'pointer', tag.isSelect ? 'selected' : '']"
              @click="selectTag(tag)">
                {{ tag.name }}
              </span>
          </div>
        </div>
      </li>
    </ul>
    <ul class="rightBar">
      <li>
        <div class="box" v-for="(group, index) in selected.display">
          <div class="cell">
            #Tags
            <span
              v-for="(name, index) in group.names"
              :key="index">
              {{ name }}
            </span>
          </div>
          <div>
            <span
              :class="`level-${staff.level}`"
              v-for="(staff, index) in group.staffs">
              {{ staff.level == 1 ? '*' : '' }} {{ staff.name }}
            </span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import Akhr from '../static/akhr.js';
import Func from '../static/common.js';

export default {
  data () {
    return {
      tags: Akhr.tags,
      kinds: Akhr.kinds,
      levels: Akhr.levels,
      staffs: Akhr.staffs,
      groups: Akhr.groups,
      currentIndex: 0,
      rareId: 2,
      selected: {
        tags: [],
        groups: [],
        display: [],
      },
      textContent: '',
      inputStaff: '',
    }
  },
  methods: {
    clear () {
      this.clearSelectedTags();
      this.selected.tags = [];
      this.selected.groups = [];
      this.selected.display = [];
      this.inputStaff = '';
      this.currentIndex = 0;
    },
    search () {
      if (this.inputStaff != '') {
        this.filterSelectedStaff(this.inputStaff, -1);
      } else {
        this.currentIndex = 0;
        this.selected.display = [...this.selected.groups];
      }
    },
    clearSelectedTags () {
      for (let i = 0; i < this.selected.tags.length; i++) {
        this.selected.tags[i].isSelect = false;
      }
    },
    clearUnselectedTags () {
      for (let i = 0; i < this.selected.tags.length; i++) {
        const selectedTag = this.selected.tags[i];
        if (!selectedTag.isSelect) {
          this.selected.tags.splice(i, 1);
          i--;
        }
      }
    },
    searchSelectedTags () {
      for (let i = 0; i < this.selected.tags.length; i++) {
        const tag = this.selected.tags[i];
        const tagGroup = [...this.groups[tag.id]];
        const staffs = [];
        for (let j = 0; j < tagGroup.length; j++) {
          const staff = this.staffs[tagGroup[j]];
          switch (true) {
            case tag.id != this.rareId && staff.level == 6:
            case staff.hidden:
              continue;
              break;
            default:
              staffs.push({ name: staff.name, level: staff.level, id: tagGroup[j] });
              break;
          }
        }
        this.selected.groups.push({
          names: [this.tags[tag.id].name], staffs
        });
      }
    },
    searchSelectedTagsGroup () {
      const filterKindOrder = (kindOrder) => {
        let staffs = this.groups[kindOrder[0]];
        let index = 1;
        while (index < kindOrder.length) {
          const res = [];
          for (let i = 0; i < staffs.length; i++) {
            if (this.groups[kindOrder[index]].indexOf(staffs[i]) !== -1) {
              res.push(staffs[i]);
            }
          }
          staffs = res;
          index++;
        }

        const isRare = (kindOrder.indexOf(this.rareId) !== -1);
        const res = [];
        for (let i = 0; i < staffs.length; i++) {
          const staff = this.staffs[staffs[i]];
          switch (true) {
            case !isRare && staff.level == 6:
            case staff.hidden:
              continue;
              break;
            default:
              res.push({ name: staff.name, id: staffs[i], level: staff.level });
              break;
          }
        }
        return res;
      };
      const kinds = {};
      for (let i = 0; i < this.selected.tags.length; i++) {
        const tag = this.selected.tags[i];
        const kindId = this.tags[tag.id].kindId;
        kinds[`k${kindId}`] = kinds[`k${kindId}`] || [];
        kinds[`k${kindId}`].push(tag.id);
      }
      const kindsValues = Object.values(kinds);

      if (kindsValues.length < 2) {
        return false;
      }
      const kindsDoubleValuesOrders = Func.arrangement(kindsValues, 1);
      for (let i = 0; i < kindsDoubleValuesOrders.length; i++) {
        const kindValueOrders = kindsDoubleValuesOrders[i];
        const kindOrders = Func.combination(kindValueOrders);
        for (let j = 0; j < kindOrders.length; j++) {
          const kindOrder = kindOrders[j];
          const staffs = filterKindOrder(kindOrders[j]);
          if (staffs.length > 0) {
            this.selected.groups.push({
              names: [
                this.tags[kindOrder[0]].name,
                this.tags[kindOrder[1]].name
              ],
              staffs
            });
          }
        }
      }
      if (kindsValues.length < 3) {
        return false;
      }
      const kindsTribleValuesOrders = Func.arrangement(kindsValues, 2);
      for (let i = 0; i < kindsTribleValuesOrders.length; i++) {
        const kindValueOrders = kindsTribleValuesOrders[i];
        const kindOrders = Func.combination(kindValueOrders);
        for (let j = 0; j < kindOrders.length; j++) {
          const kindOrder = kindOrders[j];
          const staffs = filterKindOrder(kindOrders[j]);
          if (staffs.length > 0) {
            this.selected.groups.push({
              names: [
                this.tags[kindOrder[0]].name,
                this.tags[kindOrder[1]].name,
                this.tags[kindOrder[2]].name
              ],
              staffs
            });
          }
        }
      }
    },
    sortSelectedGroup () {
      const veryHigh = [];
      const high = [];
      const middle = [];
      const normal = [];
      const newhand = [];
      for (let i = 0; i < this.selected.groups.length; i++) {
        const group = this.selected.groups[i];
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

      this.selected.groups = [...veryHigh, ...high, ...middle, ...normal, ...newhand];
    },
    filterSelectedGroup (conditions, currentIndex, onlyContion = false) {
      this.selected.display = [...this.selected.groups];
      if (this.currentIndex == currentIndex) {
        this.currentIndex = 0;
      } else {
        for (let i = 0; i < this.selected.display.length; i++) {
          const group = this.selected.display[i];
          for (let j = 0; j < conditions.length; j++) {
            const condition = conditions[j];
            if (group[`l${condition}`] && onlyContion) {
              this.selected.display.splice(i, 1);
              i--;
              break;
            }
            if (!group[`l${condition}`] && !onlyContion) {
              this.selected.display.splice(i, 1);
              i--;
              break;
            }
          }
        }
        this.currentIndex = currentIndex;
      }
    },
    filterSelectedStaff (staffName, currentIndex) {
      this.selected.display = [...this.selected.groups];
      this.currentIndex = currentIndex;
      const res = [];
      for (let i = 0; i < this.selected.display.length; i++) {
        const group = this.selected.display[i];
        let hasStaff = false;
        for (let j = 0; j < group.staffs.length; j++) {
          const staff = group.staffs[j];
          if (staff.name == staffName) {
            hasStaff = true;
            break;
          }
        }
        if (!hasStaff) {
          this.selected.display.splice(i, 1);
          i--;
        }
      }
    },
    selectTag (tag) {
      tag.isSelect = !tag.isSelect;
      if (tag.isSelect) {
        this.selected.tags.push(tag);
      }
      if (this.selected.tags.length > 6) {
        tag.isSelect = false;
      }
      this.selected.groups = [];
      this.clearUnselectedTags();
      this.searchSelectedTags();
      this.searchSelectedTagsGroup();
      this.sortSelectedGroup();

      this.selected.display = [...this.selected.groups];
    }
  },
  mounted () {
  }
}
</script>
<style scoped>
  .container {
    margin: auto;
    margin-top: 30px;
    width: 1000px;
  }
  span {
    background: #ddd;
    display: inline-block;
    margin: 5px;
    padding: 10px 15px;
    border-radius: 2px;
    user-select: none;
  }
  span.bcrGray {
    background: #999;
    color: #fff;
  }
  span.unified {
    text-align: center;
  }
  span.selected {
    background: #007bff;
    color: #fff;
  }
  .leftBar {
    background: #eee;
    display: inline-block;
    padding: 16px;
    border-radius: 5px;
    vertical-align: top;
    border: 4px solid #ececec;
  }
  .leftBar span {
    border: 2px solid #d9d9d9;
  }
  .rightBar {
    display: inline-block;
    width: 580px;
    margin-left: 20px;
    vertical-align: top;
  }
  .leftBar .inner {
    width: 360px;
  }
  .rightBar .box {
    border-left: 5px solid #ddd;
    margin-bottom: 25px;
  }
  .rightBar .cell {
    background: #ddd;
    margin-left: 5px;
    padding: 10px 0;
    padding-left: 16px;
  }
  .rightBar .cell span {
    padding: 0;
    padding-bottom: 5px;
    border-bottom: 1px dashed #666;
  }
  .display span {
    padding: 10px;
  }
  .display input {
    width: 70px;
    border: 0;
    padding: 10px;
    margin: 5px;
    font-size: 16px;
    border-radius: 5px;
    position: relative;
    outline: none;
    top: -1px;
  }
  .level-6, .bcrRed {
    background-color: #dc3545;
    color: #fff;
  }
  .level-5 {
    background-color: #ffc107;
  }
  .level-4 {
    background-color: #17a2b8;
    color: #fff;
  }
  .level-3 {
    background-color: #808080;
    color: #fff;
  }
  .level-2 {
    background-color: #ccc;
  }
</style>