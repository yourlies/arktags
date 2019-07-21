import Func from '../../../static/common.js';

const Index = function (sets, hooks) {
  this.hooks = hooks;
  this.sets = sets;
  this.kinds = {};
  this.kindOrders = [];

  this.rawOrders = [];
  this.orders = [];
  this.arrangementNumberArr = [];
  this._spliceRawSets();
};

Index.prototype._spliceRawSets = function () {
  for (let i = 0; i < this.sets.length; i++) {
    if (typeof this.hooks.splice == 'function') {
      this.hooks.splice(this.sets[i]);
    }
    const { id, kindId } = this.sets[i];
    this.kinds[`k${kindId}`] = this.kinds[`k${kindId}`] || [];
    this.kinds[`k${kindId}`].push(id);
  }
}

Index.prototype.setArrangementNumberArr = function (numberArr) {
  this.arrangementNumberArr = numberArr;
}

Index.prototype.divides = function () {
  const kindsValues = Object.values(this.kinds);
  for (let i = 0; i < this.arrangementNumberArr.length; i++) {
    const number = this.arrangementNumberArr[i];
    const kindOrders = this.divide(kindsValues, number);
    if (kindsValues.length > number - 1) {
      this.kindOrders = this.kindOrders.concat(kindOrders);
    }
  }

  for (let i = 0; i < this.kindOrders.length; i++) {
    const divides = Func.combination(this.kindOrders[i]);
    this.rawOrders = this.rawOrders.concat(divides);
  }
}

Index.prototype.divide = function (kindsValues, number) {
  if (kindsValues.length > number - 1) {
    return Func.arrangement(kindsValues, number - 1);
  }
}

Index.prototype.render = function () {
  if (typeof this.hooks.beforeMount == 'function') {
    this.beforeMount = this.hooks.beforeMount;
    this.beforeMount();
  }
  for (let j = 0; j < this.rawOrders.length; j++) {
    const ids = this.rawOrders[j];

    if (typeof this.hooks.mount == 'function') {
      this.mount = this.hooks.mount;
      const sets = this.mount(ids);
      this.orders.push({ ids, sets });
    }
  }
}

export default Index;