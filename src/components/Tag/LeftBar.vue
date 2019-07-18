<template>
  <ul class="contain">
    <li class="box">
      <span class="pointer bcrRed" @click="clear">清空</span>
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
        @click="addLimitation(1, 2, [1, 2, 3])"
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
    <li class="box">
      <div :key="index" class="df" v-for="(kind, index) in kinds">
        <div class="inner">
          <span
            @click="selectTag(tag)"
            v-for="(tag, index) in kind"
            :key="index"
            :class="['unified', 'pointer', tag.isSelect ? 'selected' : '']">
            {{ tag.name }}
          </span>
        </div>
      </div>
    </li>
  </ul>
</template>
<script>
import Func from '../../static/common.js';
import tags from '../../static/tags.json';
import groups from '../../static/groups.json';
import staffs from '../../static/staffs.json';

export default {
  data () {
    return {
      rareId: 2,
      currentIndex: -1,
      limitation: {
        id: -1, containLevels: [], notContainLevels: [],
      },
      limitCount: 0,
      limitType: -1,
      inputStaff: '',
      tags, groups, staffs,
      kinds: [
        [
          { name: '新手', isSelect: false, id: 0 },
          { name: '资深干员', isSelect: false, id: 1 },
          { name: '高级资深干员', isSelect: false, id: 2 },
        ],
        [
          { name: '男性', isSelect: false, id: 5 },
          { name: '女性', isSelect: false, id: 6 },
          { name: '远程位', isSelect: false, id: 3 },
          { name: '近战位', isSelect: false, id: 4 },
        ],
        [
          { name: '先锋', isSelect: false, id: 7 },
          { name: '狙击', isSelect: false, id: 8 },
          { name: '医疗', isSelect: false, id: 9 },
          { name: '术师', isSelect: false, id: 10 },
          { name: '近卫', isSelect: false, id: 11 },
          { name: '重装', isSelect: false, id: 12 },
          { name: '辅助', isSelect: false, id: 13 },
          { name: '特种', isSelect: false, id: 14 },
        ],
        [
          { name: '治疗', isSelect: false, id: 15 },
          { name: '支援', isSelect: false, id: 16 },
          { name: '输出', isSelect: false, id: 17 },
          { name: '群攻', isSelect: false, id: 18 },
          { name: '减速', isSelect: false, id: 19 },
          { name: '生存', isSelect: false, id: 20 },
          { name: '防护', isSelect: false, id: 21 },
          { name: '削弱', isSelect: false, id: 22 },
          { name: '位移', isSelect: false, id: 23 },
          { name: '控场', isSelect: false, id: 24 },
          { name: '爆发', isSelect: false, id: 25 },
          { name: '召唤', isSelect: false, id: 26 },
          { name: '快速复活', isSelect: false, id: 27 },
          { name: '费用回复', isSelect: false, id: 28 },
        ]
      ],
      selectedGroups: [],
      selectedTags: [],
    }
  },
  methods: {
    clear() {
      this.unSelectedTags();
      this.clearUnSelectedTags();
      this.clearLimitation();
      this.selected();
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
      this.limitCount++;
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
      this.limitCount++;
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
    },
    filterSelectedGroups () {
      const rawGroups = [];
      for (let i = 0; i < this.selectedGroups.length; i++) {
        const group = this.selectedGroups[i];
        const isRare = (group.ids.indexOf(this.rareId) !== -1);
        rawGroups[i] = { ids: group.ids, staffs: [] };
        for (let j = 0; j < group.staffs.length; j++) {
          const staffId = group.staffs[j];
          const staff = this.staffs[staffId];
          switch (true) {
            case !isRare && staff.level == 6:
            case staff.hidden:
              continue;
              break;
            default:
              rawGroups[i].staffs.push(staffId);
              break;
          }
        }
      }

      if (this.limitType == -1) {
        this.selectedGroups = rawGroups;
        return false;
      }

      const filterGroups = [];
      for (let i = 0; i < rawGroups.length; i++) {
        const group = rawGroups[i];
        for (let j = 0; j < group.staffs.length; j++) {
          const level = this.staffs[group.staffs[j]].level;
          if (this.limitType == 1) {
            const staffId = staffs[j];
            if (this.limitation.containLevels.indexOf(level) !== -1) {
              filterGroups.push(rawGroups[i]);
              continue;
            }
          }
          if (this.limitType == 2) {
            if (this.limitation.notContainLevels.indexOf(level) == -1) {
              filterGroups.push(rawGroups[i]);
            }
            break;
          }
          if (this.limitType == 0) {
            if (group.staffs.indexOf(this.limitation.id) !== -1) {
              filterGroups.push(rawGroups[i]);
            }
            break;
          }
        }
      }

      this.selectedGroups = filterGroups;
    },
    searchSelectedTags () {
      this.selectedGroups = [];
      for (let i = 0; i < this.selectedTags.length; i++) {
        const id = this.selectedTags[i].id;
        const staffs = [...this.groups[this.selectedTags[i].id]];
        this.selectedGroups.push({ ids: [id], staffs });
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
        return staffs;
      };
      const kinds = {};
      for (let i = 0; i < this.selectedTags.length; i++) {
        const tag = this.selectedTags[i];
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
            this.selectedGroups.push({
              ids: [kindOrder[0], kindOrder[1]],
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
            this.selectedGroups.push({
              ids: [kindOrder[0], kindOrder[1], kindOrder[2]],
              staffs
            });
          }
        }
      }
    },
    unSelectedTags () {
      for (let i = 0; i < this.selectedTags.length; i++) {
        this.selectedTags[i].isSelect = false;
      }
    },
    clearUnSelectedTags () {
      for (let i = 0; i < this.selectedTags.length; i++) {
        const selectedTag = this.selectedTags[i];
        if (!selectedTag.isSelect) {
          this.selectedTags.splice(i, 1);
          i--;
        }
      }
    },
    selected () {
      this.searchSelectedTags();
      this.searchSelectedTagsGroup();
      this.filterSelectedGroups();
      this.$emit('selected', this.selectedGroups);
    },
    selectTag (tag) {
      tag.isSelect = !tag.isSelect;
      if (tag.isSelect) {
        this.selectedTags.push(tag);
      }
      if (this.selectedTags.length > 6) {
        tag.isSelect = false;
      }
      this.clearUnSelectedTags();
      this.selected();
    }
  },
  watch: {
    limitCount () {
      this.selected();
    }
  }
}
</script>
<style>
  .contain {
    background: #eee;
    display: inline-block;
    padding: 10px 20px;
    padding-bottom: 15px;
    border-radius: 5px;
    vertical-align: top;
    border: 4px solid #eaeaea;
    border-left: 5px solid #ddd;
  }
  .contain span {
    padding: 5px 10px;
    border: 2px solid #d9d9d9;
  }

  .contain span.selected {
    background: #007bff;
    color: #fff;
  }

  .box .inner {
    border-bottom: 1px dashed #999;
    margin-bottom: 5px;
    width: 330px;
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