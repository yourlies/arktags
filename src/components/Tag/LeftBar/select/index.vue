<template>
  <div>
    <ul class="section" @click="gestures">
      <li class="box df title">
        <div
          class="pointer cell"
          v-for="(career, index) in careers"
          @click="selectTag(career)"
          :key="index">
          <div v-show="career.isSelect" class="shadow"></div>
          <i :class="['icon', `i-${career.ename}`]"></i>          
        </div>
      </li>
      <li :key="index" class="box" v-for="(kind, index) in kinds">
        <div class="inner">
          <span
            @click="selectTag(tag)"
            v-for="(tag, index) in kind"
            :key="index"
            :class="[`kind-${tag.kindId}`, 'unified', 'pointer', tag.isSelect ? 'selected' : '']">
            {{ tag.name }}
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import Func from '../../../../static/common.js';
import processor from './processor.js';

export default {
  data () {
    return {
      rareId: 2,
      timestamp: 0,
      careers: [
        { name: '先锋', ename: 'vanguard', isSelect: false, id: 7 },
        { name: '狙击', ename: 'sniper', isSelect: false, id: 8 },
        { name: '医疗', ename: 'medic',  isSelect: false, id: 9 },
        { name: '术师', ename: 'caster', isSelect: false, id: 10 },
        { name: '近卫', ename: 'guard', isSelect: false, id: 11 },
        { name: '重装', ename: 'defender', isSelect: false, id: 12 },
        { name: '辅助', ename: 'supporter', isSelect: false, id: 13 },
        { name: '特种', ename: 'specialist', isSelect: false, id: 14 },
      ],
      kinds: [
        [
          { name: '新手', isSelect: false, id: 0 },
          { name: '资深干员', isSelect: false, id: 1 },
          { name: '高资资深干员', isSelect: false, id: 2 },
        ],
        [
          { name: '男性', isSelect: false, id: 5 },
          { name: '女性', isSelect: false, id: 6 },
          { name: '远程位', isSelect: false, id: 3 },
          { name: '近战位', isSelect: false, id: 4 },
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
    filterDividedGroups: processor.filterDividedGroups,
    divideGroups: processor.divideGroups,
    gestures (e) {
      const timestamp = new Date().getTime();
      const nodeName = e.target.nodeName;
      const className = e.target.className;

      const hasClassName = className.indexOf('shadow') !== -1
        || className.indexOf('pointer') !== -1;
      if ((timestamp - this.timestamp) < 300 && !hasClassName) {
        if (nodeName == 'DIV' || nodeName == 'LI' || nodeName == 'UL') {
          this.$store.commit('infotip/create', {
            content: '盲点你发现了华生，此操作将清空筛选标签', shake: true,
          });
          this.$store.commit('group/clear');
          this.timestamp = 0;
        }
      } else {
        this.timestamp = timestamp;        
      }
    },
    selectTag (tag) {
      tag.isSelect = !tag.isSelect;
      if (tag.isSelect) {
        this.selectedTags.push(tag);
      }
      if (this.selectedTags.length > 5) {
        tag.isSelect = false;
        this.$store.commit('infotip/create', { shake: true, content: '标签最多只能选择五个' });
      }
      this.clearUnSelectedTags();
      this.divideGroups();
      this.$store.commit('group/store', { content: this.selectedGroups });
    },
  },
  watch: {
    clearCount () {
      this.unSelectedTags();
      this.clearUnSelectedTags();
    }
  }
}
</script>
<style scoped>
  @media screen and (min-width: 1000px) {
    .box {
      user-select: none;
    }
    .box.title .cell .shadow {
      position: absolute;
      margin-top: 4px;
      margin-left: 4px;
      background-color: #cd5c5c;
      height: 40px;
      width: 40px;
      z-index: 1;
      opacity: .5;
    }
    .box i.icon {
      margin: 3px;
      padding: 2px;
      border: 1px dashed #888;
    }
    .box span {
      border: 0;
      padding: 5px;
      margin: 2px 5px;
      border-bottom: 1px dashed #888;
      border-radius: 0;
      background-color: #fff;
    }
    .box span.selected {
      color: #007bff;
    }
    .box .inner {
      margin-bottom: 5px;
      width: 360px;
    }
  }
</style>