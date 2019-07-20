<template>
  <ul class="section">
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
import Func from '../../../static/common.js';
import Divide from './divide.js';
import staffs from '../../../static/staffs.json';

export default {
  data () {
    return {
      rareId: 2,
      staffs,
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
  props: ['clearCount'],
  methods: {
    clear () {
      this.unSelectedTags();
      this.clearUnSelectedTags();
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
    filterSelectedGroups () {
      const rawGroups = [];
      for (let i = 0; i < this.selectedGroups.length; i++) {
        const group = this.selectedGroups[i];
        const isRare = (group.ids.indexOf(this.rareId) !== -1);
        rawGroups[i] = { ids: group.ids, staffs: [] };
        for (let j = 0; j < group.results.length; j++) {
          const staffId = group.results[j];
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
      for (let i = 0; i < rawGroups.length; i++) {
        if (rawGroups[i].staffs.length == 0) {
          rawGroups.splice(i, 1);
          i--
        }
      }
      this.selectedGroups = rawGroups;
    },
    selectTag (tag) {
      tag.isSelect = !tag.isSelect;
      if (tag.isSelect) {
        this.selectedTags.push(tag);
      }
      if (this.selectedTags.length > 5) {
        tag.isSelect = false;
      }
      this.clearUnSelectedTags();

      // 
      const rawDivide = new Divide(this.selectedTags);
      rawDivide.setArrangementNumberArr([1, 2, 3]);
      rawDivide.divides();
      const k4 = rawDivide.kinds.k4;
      if (k4 && k4.length > 0) {
        const k42 = rawDivide.divide(k4, 2);
        const k43 = rawDivide.divide(k4, 3);
        if (k42) {
          rawDivide.rawDivides = rawDivide.rawDivides.concat(k42);
          let ids = [];
          for (let [key, value] of Object.entries(rawDivide.kinds)) {
            if (key != 'k4') {
              ids = ids.concat(value);
            }
          }
          if (ids.length > 0) {
            const arrs = Func.combination([ids, k42]);
            for (let i = 0; i < arrs.length; i++) {
              const arr = arrs[i];
              rawDivide.rawDivides.push([arr[0], ...arr[1]]);
            }
          }
        }
        if (k43) {
          rawDivide.rawDivides = rawDivide.rawDivides.concat(k43);
        }
      }
      rawDivide.run();
      this.selectedGroups = rawDivide.results;
      // 

      this.filterSelectedGroups();
      this.$emit('selectGroups', this.selectedGroups);
    }
  },
  watch: {
    clearCount () {
      this.clear();
    }
  }
}
</script>
<style scoped>
  .contain {
    background: #eee;
    padding: 10px 20px;
    padding-bottom: 15px;
    border-radius: 5px;
    vertical-align: top;
    border: 4px solid #eaeaea;
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