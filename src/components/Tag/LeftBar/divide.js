import Func from '../../../static/common.js';
import tags from '../../../static/tags.json';
import groups from '../../../static/groups.json';
import staffs from '../../../static/staffs.json';

const Index = function (sets) {
  this.rawSets = sets;
  this.sets = [];
  this.rawKinds = {};
  this.kinds = {};
  this.arrangementNumberArr = [];

  this.tagIds = [];
};

Index.prototype.setArrangementNumberArr = function (numberArr) {
  this.arrangementNumberArr = numberArr;
}

Index.prototype._filterKindOrder = function (kindOrder) {
  let staffs = groups[kindOrder[0]];
  let index = 1;
  while (index < kindOrder.length) {
    const res = [];
    for (let i = 0; i < staffs.length; i++) {
      if (groups[kindOrder[index]].indexOf(staffs[i]) !== -1) {
        res.push(staffs[i]);
      }
    }
    staffs = res;
    index++;
  }
  return staffs;
};

Index.prototype.spliceRawSets = function () {
  for (let i = 0; i < this.rawSets.length; i++) {
    const tagId = this.rawSets[i].id;
    this.tagIds.push(tagId);
    const kindId = tags[tagId].kindId;
    this.rawKinds[`k${kindId}`] = this.rawKinds[`k${kindId}`] || [];
    this.rawKinds[`k${kindId}`].push(tagId);
  }
  this.kinds = { ...this.rawKinds };
}

Index.prototype.divides = function () {
  this.spliceRawSets();
  const kindsValues = Object.values(this.rawKinds);
  for (let i = 0; i < this.arrangementNumberArr.length; i++) {
    const number = this.arrangementNumberArr[i];
    const sets = this.divide(kindsValues, number);
    if (kindsValues.length > number - 1) {
      this.sets = this.sets.concat(sets);
    }
  }
  this.results = [];
  this.rawDivides = [];
  for (let i = 0; i < this.sets.length; i++) {
    const divides = Func.combination(this.sets[i]);
    this.rawDivides = this.rawDivides.concat(divides);
  }
}

Index.prototype.divide = function (kindsValues, number) {
  if (kindsValues.length > number - 1) {
    return Func.arrangement(kindsValues, number - 1);
  }
}

Index.prototype.run = function () {
  for (let j = 0; j < this.rawDivides.length; j++) {
    const divideIds = this.rawDivides[j];
    const results = this._filterKindOrder(divideIds);
    if (results.length > 0) {
      this.results.push({ ids: divideIds, results })
    }
  }
}

export default Index;