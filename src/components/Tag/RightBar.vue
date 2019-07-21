<template>
  <ul class="rightBar">
    <li>
      <div class="box" v-for="(group, index) in groups">
        <div class="cell">
          #Tags
          <span
            v-for="(name, index) in group.tagNames"
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
</template>
<script>
export default {
  props: {
    groups: Array
  },
}
</script>
<style>
  .rightBar {
    display: inline-block;
    width: 595px;
    margin-left: 20px;
    vertical-align: top;
  }
  .rightBar .box {
    border-left: 5px solid #ddd;
    margin-bottom: 25px;
  }
  .rightBar .cell {
    background: #ddd;
    margin-left: 5px;
    padding: 7px 0;
    padding-left: 16px;
  }
  .rightBar .cell span {
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
</style>