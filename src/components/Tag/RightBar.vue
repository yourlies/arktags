<template>
  <ul class="rightBar">
    <li><slot></slot></li>
    <li
      :ref="`g${groupIndex}`"
      :class="['box', group.isTag ? 'reverse' : '']"
      v-for="(group, groupIndex) in groups">
      <div class="cell" v-if="!group.isTag">
        #Tags
        <span
          v-for="(name, index) in group.tagNames"
          :key="index">
          {{ name }}
        </span>
        </div>
      <div class="inner" v-if="!group.isTag">
        <span
          @click="animate(groupIndex, staff.id)"
          :class="[`level-${staff.level}`, 'pointer']"
          v-for="(staff, index) in group.staffs">
          {{ staff.level == 1 ? '*' : '' }} {{ staff.name }}
        </span>
      </div>
      <div class="cell reverse pointer"
        v-if="group.isTag"
        @click="animateReverse(groupIndex)">
        #Name &nbsp;&nbsp;&nbsp;{{ group.name }}
      </div>
      <div class="inner reverse pointer"
        v-if="group.isTag"
        @click="animateReverse(groupIndex)">
        <span v-for="(tag, index) in group.tags">
          {{ tag.name }}
        </span>
      </div>
    </li>
  </ul>
</template>
<script>
import Staffs from '../../static/staffs.json';
import Tags from '../../static/tags.json';

export default {
  data () {
    return {
      groupCopy: {},
      groupIndex: -1,
    }
  },
  props: {
    groups: Array
  },
  methods: {
    animate (groupIndex, staffId) {
      const ref = this.$refs[`g${groupIndex}`][0];
      let dis = 0;
      let opacity = 1;
      const raf = () => {
        dis++;
        opacity -= 0.05;
        ref.style = `opacity:${opacity};position:relative;top:${dis}px;`;
        if (opacity >= 0) {
          requestAnimationFrame(raf);
        } else {
          if (this.groupIndex != -1) {
            this.groups.splice(this.groupIndex, 1, this.group);
          }
          ref.style = '';
          const staff = Staffs[staffId];
          const tags = [];
          for (let i = 0; i < staff.tags.length; i++) {
            tags.push(Tags[staff.tags[i]]);
          }
          const replaceGroup = { isTag: true, name: staff.name, tags };
          this.groupIndex = groupIndex;
          this.group = this.groups.splice(groupIndex, 1, replaceGroup)[0];
        }
      }
      ref.style = "position:relative;";
      const rafId = requestAnimationFrame(raf);
    },
    animateReverse (groupIndex) {
      const ref = this.$refs[`g${groupIndex}`][0];
      let dis = 0;
      let opacity = 1;
      const raf = () => {
        dis++;
        opacity -= 0.05;
        if (opacity > 0) {
          ref.style = `opacity:${opacity};position:relative;top:${dis}px;`;
          requestAnimationFrame(raf);
        } else {
          this.groups.splice(groupIndex, 1, this.group);
          ref.style = '';
          this.groupIndex = -1;
        }
      }
      ref.style = "position:relative;";
      const rafId = requestAnimationFrame(raf);
    }
  },
}
</script>
<style scoped>
  .rightBar {
    margin-left: 20px;
    vertical-align: top;
  }
  .reverse.box {
    border-left: 5px solid #333;
  }
  .reverse.cell {
    box-shadow: 2px 2px 2px #888;
    color: #fff;
    background-color: #333;
    padding: 15px;
  }
  .reverse.inner {
    box-sizing: border-box;
    margin-left: 5px;
    border-bottom: 2px dashed #333;
    padding: 5px 0;
  }
  .reverse.inner span {
    box-shadow: 2px 2px 2px #888;
    background-color: #333;
    color: #fff;
  }
  .cell {
    border-radius: 3px;
    background: #ddd;
    margin-left: 5px;
    margin-bottom: 6px;
    padding: 7px 0;
    padding-left: 16px;
  }
  .cell span {
    padding: 0;
    padding-bottom: 2px;
    border-bottom: 1px dashed #666;
  }
  .level-6 {
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
  @media screen and (max-width: 1000px) {
    .rightBar {
      margin: 0;
    }
    .box {
      padding-bottom: 10px;
    }
    .cell {
      margin-left: 0;
      border-radius: 0;
      padding: 5px 7px;
      border-left: 8px solid #bfbfbf;
    }
    .inner {
      padding-left: 5px;
    }
  }
  @media screen and (min-width: 1000px) {
    .rightBar {
      display: inline-block;
      width: 595px;
    }
    .box {
      border-left: 5px solid #ddd;
      margin-bottom: 25px;
    }
    .cell {
      box-shadow: 3px 3px 3px #cacaca;
    }
  }
</style>