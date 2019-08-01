import Func from '../../../static/common.js';

const limit = function () {
  const { type, content } = this.filter;
  if (type === -1) {
    this.groups.limited = this.groups.sorted;
    return false;
  }
  const sortedGroups = [...this.groups.sorted];
  const limitedGroups = [];
  const { containLevels, notContainLevels, name } = content;
  let id = -1;

  for (let i = 0; i < this.staffs.length; i++) {
    if (this.staffs[i].name == name) {
      id = i;
    }
  }

  for (let i = 0; i < sortedGroups.length; i++) {
    const group = sortedGroups[i];
    if (type == 1) {
      for (let j = 0; j < containLevels.length; j++) {
        if (group.levels.indexOf(containLevels[j]) !== -1) {
          limitedGroups.push(group);
          break;
        }
      }
    }
    if (type == 2) {
      for (let j = 0; j < notContainLevels.length; j++) {
        if (group.levels.indexOf(notContainLevels[j]) !== -1) {              
          break;
        }
        if (j == notContainLevels.length - 1) {
          limitedGroups.push(sortedGroups[i]);
        }
      }
    }
    if (type == 0) {
      if (group.ids.indexOf(id) !== -1) {
        limitedGroups.push(sortedGroups[i]);
      }
    }
  }
  this.groups.limited = limitedGroups;
};
const sort = function () {
  const veryHigh = [];
  const high = [];
  const middle = [];
  const normal = [];
  const newhand = [];
  for (let i = 0; i < this.groups.filtered.length; i++) {
    const group = this.groups.filtered[i];
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

  this.groups.sorted = [...veryHigh, ...high, ...middle, ...normal, ...newhand];
};
const filter = function () {
  const filtered = [];
  for (let i = 0; i < this.groups.raw.length; i++) {
    const group = this.groups.raw[i];
    filtered[i] = {
      tagNames: [], staffs: [],
      ids: group.ids, tagIds: group.tagIds, levels: group.levels
    };
    for (let j = 0; j < group.tagIds.length; j++) {
      const id = group.tagIds[j];
      filtered[i].tagNames.push(this.tags[id].name);
    }
    for (let j = 0; j < group.staffs.length; j++) {
      const staffId = group.staffs[j];
      const staff = this.staffs[staffId];
      filtered[i].staffs.push({
        id: staffId,
        name: staff.name,
        level: staff.level,
      });
    }
  }
  this.groups.filtered = filtered;
};

export default { filter, sort, limit };