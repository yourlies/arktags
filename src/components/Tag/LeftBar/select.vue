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
import Tags from '../../../static/tags.json';
import Staffs from '../../../static/staffs.json';
import Groups from '../../../static/groups.json';

export default {
  data () {
    return {
      rareId: 2,
      staffs: Staffs,
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
    filterDividedGroups (groups) {
      const filteredGroups = [];
      for (let i = 0; i < groups.length; i++) {
        const group = groups[i];
        const isRare = (group.ids.indexOf(this.rareId) !== -1);
        filteredGroups[i] = { tagIds: group.ids, staffs: [], levels: [], ids: [] };
        for (let j = 0; j < group.sets.length; j++) {
          const staffId = group.sets[j];
          const staff = this.staffs[staffId];
          switch (true) {
            case !isRare && staff.level == 6:
            case staff.hidden:
              break;
            default:
              filteredGroups[i].staffs.push(staffId);
              filteredGroups[i].levels.push(staff.level);
              filteredGroups[i].ids.push(staffId);
              break;
          }
        }
      }
      for (let i = 0; i < filteredGroups.length; i++) {
        if (filteredGroups[i].staffs.length == 0) {
          filteredGroups.splice(i, 1);
          i--
        }
      }
      return filteredGroups;
    },
    divideGroups () {
      // here handling complex grouping operation
      // --hooks
      const splice = function (param) {
        param.kindId = Tags[param.id].kindId;
      }
      const beforeMount = function () {
        const specialKind = this.kinds.k4;
        if (specialKind && specialKind.length > 0) {
          const sk2 = this.divide(specialKind, 2);
          const sk3 = this.divide(specialKind, 3);
          if (sk2) {
            // add two spcial tags orders
            this.rawOrders = this.rawOrders.concat(sk2);
            // add two spcial tags and one normal tag orders
            let tagIds = [];
            for (let [key, value] of Object.entries(this.kinds)) {
              if (key != 'k4') {
                // add all normal tags id
                tagIds = tagIds.concat(value);
              }
            }
            if (tagIds.length > 0) {
              // combination normal tag and special tag
              const orders = Func.combination([tagIds, sk2]);
              for (let i = 0; i < orders.length; i++) {
                const order = orders[i];
                // order[0] have one normal tag, order[1] have two special tags
                this.rawOrders.push([order[0], ...order[1]]);
              }
            }
          }
          if (sk3) {
            // add three spcial tags orders
            this.rawOrders = this.rawOrders.concat(sk3);
          }
        }
      }
      const mount = function (kindOrder) {
        let staffs = Groups[kindOrder[0]];
        let index = 1;
        while (index < kindOrder.length) {
          const res = [];
          for (let i = 0; i < staffs.length; i++) {
            if (Groups[kindOrder[index]].indexOf(staffs[i]) !== -1) {
              res.push(staffs[i]);
            }
          }
          staffs = res;
          index++;
        }
        return staffs;
      };
      // instance divide object
      const tagsDivide = new Divide(this.selectedTags, { splice, beforeMount, mount });
      tagsDivide.setArrangementNumberArr([1, 2, 3]);
      tagsDivide.divides();
      tagsDivide.render();

      const groups = tagsDivide.orders;
      this.selectedGroups = this.filterDividedGroups(groups);
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
      this.divideGroups();
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
  .section span {
    padding: 5px 10px;
    border: 2px solid #d9d9d9;
  }

  .section span.selected {
    background: #007bff;
    color: #fff;
  }

  .box .inner {
    border-bottom: 2px dashed #ccc;
    margin-bottom: 5px;
    width: 330px;
  }
</style>