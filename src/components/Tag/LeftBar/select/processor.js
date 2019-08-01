import Func from '../../../../static/common.js';
import Tags from '../../../../static/tags.json';
import Divide from './divide.js';
import Staffs from '../../../../static/staffs.json';
import Groups from '../../../../static/groups.json';

const filterDividedGroups = function (groups) {
  const filteredGroups = [];
  for (let i = 0; i < groups.length; i++) {
    const group = groups[i];
    const isRare = (group.ids.indexOf(this.rareId) !== -1);
    filteredGroups[i] = { tagIds: group.ids, staffs: [], levels: [], ids: [] };
    for (let j = 0; j < group.sets.length; j++) {
      const staffId = group.sets[j];
      const staff = Staffs[staffId];
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
};
const divideGroups = function () {
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
};

export default { filterDividedGroups, divideGroups };