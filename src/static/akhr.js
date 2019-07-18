import staffs from './staffs.json';
import groups from './groups.json';

const Akhr = function () {};
Akhr.prototype.tags = [
  { name: '新手', id: 0, kindId: 0 },
  { name: '资深干员', id: 1, kindId: 0 },
  { name: '高级资深干员', id: 2, kindId: 0 },
  { name: '远程位', id: 3, kindId: 1 },
  { name: '近战位', id: 4, kindId: 1 },
  { name: '男性干员', id: 5, kindId: 2 },
  { name: '女性干员', id: 6, kindId: 2 },
  { name: '先锋干员', id: 7, kindId: 3 },
  { name: '狙击干员', id: 8, kindId: 3 },
  { name: '医疗干员', id: 9, kindId: 3 },
  { name: '术师干员', id: 10, kindId: 3 },
  { name: '近卫干员', id: 11, kindId: 3 },
  { name: '重装干员', id: 12, kindId: 3 },
  { name: '辅助干员', id: 13, kindId: 3 },
  { name: '特种干员', id: 14, kindId: 3 },
  { name: '治疗', id: 15, kindId: 4 },
  { name: '支援', id: 16, kindId: 4 },
  { name: '输出', id: 17, kindId: 4 },
  { name: '群攻', id: 18, kindId: 4 },
  { name: '减速', id: 19, kindId: 4 },
  { name: '生存', id: 20, kindId: 4 },
  { name: '防护', id: 21, kindId: 4 },
  { name: '削弱', id: 22, kindId: 4 },
  { name: '位移', id: 23, kindId: 4 },
  { name: '控场', id: 24, kindId: 4 },
  { name: '爆发', id: 25, kindId: 4 },
  { name: '召唤', id: 26, kindId: 4 },
  { name: '快速复活', id: 27, kindId: 4 },
  { name: '费用回复', id: 28, kindId: 4 },
];
Akhr.prototype.kinds = [
  {
    id: 0,
    name: '资质',
    tags: [
      { name: '新手', isSelect: false, id: 0 },
      { name: '资深干员', isSelect: false, id: 1 },
      { name: '高级资深干员', isSelect: false, id: 2 },
    ]
  },
  {
    id: 1,
    name: '位置',
    tags: [
      { name: '远程位', isSelect: false, id: 3 },
      { name: '近战位', isSelect: false, id: 4 },
    ]
  },
  {
    id: 2,
    name: '性别',
    tags: [
      { name: '男性干员', isSelect: false, id: 5 },
      { name: '女性干员', isSelect: false, id: 6 },
    ]
  },
  {
    id: 3,
    name: '种类',
    tags: [
      { name: '先锋', isSelect: false, id: 7 },
      { name: '狙击', isSelect: false, id: 8 },
      { name: '医疗', isSelect: false, id: 9 },
      { name: '术师', isSelect: false, id: 10 },
      { name: '近卫', isSelect: false, id: 11 },
      { name: '重装', isSelect: false, id: 12 },
      { name: '辅助', isSelect: false, id: 13 },
      { name: '特种', isSelect: false, id: 14 },
    ]
  },
  {
    id: 4,
    name: '词缀',
    tags: [
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
  }
];
Akhr.prototype.levels = [
  { name: 2, selected: false },
  { name: 3, selected: false },
  { name: 4, selected: false },
  { name: 5, selected: false },
  { name: 6, selected: false },
];
Akhr.prototype.groups = groups;
Akhr.prototype.staffs = staffs;

export default new Akhr;