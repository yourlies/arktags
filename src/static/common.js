const Func = {};
Func.arrangement = function (arr, pickNumber) {
  if (pickNumber >= arr.length) {
    return [arr];
  }
  const tempArr = [...arr];
  const resParam = tempArr.splice(0, pickNumber);
  const resArr = tempArr;

  let resParamCopy = [...resParam];
  let resArrCopy = [...resArr];

  const orders = [];
  const recursive = function (arr, param, index = 2, level = 2) {
    const tempArr = [...arr];
    const tempParam = [...param] || [tempArr.shift()];
    for (let i = 0; i < tempArr.length; i++) {
      const order = [...tempParam, tempArr[i]];
      orders.push(order);
    }
    if (arr.length > 1) {
      tempParam.pop();
      tempParam.push(tempArr.shift());
      recursive(tempArr, tempParam, index, level);
    } else if ((resArr.length - index) >= 0 && pickNumber > 1) {
      const tempParam = [...resParam];
      const tempArr = [...resArr];
      tempParam.splice(tempParam.length - level, index - 1);
      const fixParam = tempArr.splice(0, index - 1);
      if ((index - 1 - level) > 0) {
        fixParam.splice(0, index - 1 - level);
      }
      resParamCopy = tempParam.concat(fixParam);
      resArrCopy = tempArr;
      recursive(resArrCopy, resParamCopy, index + 1, level);
    } else if ((pickNumber - level) > 0) {
      recursive(resArrCopy, resParamCopy, 2, level + 1);
    }
  }
  recursive(resArr, resParam);
  return orders;
}
Func.combination = function (arr) {
  const orders = [];
  const recursive = function (arr, order = []) {
    const tempArr = [...arr];
    const tempParam = tempArr.shift();
    const tempOrder = [...order];
    if (tempParam) {
      for (let i = 0; i < tempParam.length; i++) {
        if (tempArr.length >= 0) {
          recursive(tempArr, [...tempOrder, tempParam[i]]);
        }
      }
    } else {
      orders.push(order);
    }
  }
  recursive(arr);
  return orders;
}
Func.compare = function (property, reverse) {
  return function (a, b) {
    const value1 = a[property];
    const value2 = b[property];
    if (reverse) {
      return value2 - value1;
    } else {
      return value1 - value2;      
    }
  }
}
export default Func;