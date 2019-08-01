const state = {
  content: { name: 0, containLevels: [], notContainLevels: [] },
  type: -1,
  count: 0,
  recycleId: '',
  recycle: function () {},
};

const getters = {};
const actions = {};
const mutations = {
  limit (state, context) {
    const { type, content, recycle, recycleId } = context;
  	state.count++;
    state.type = type;

    if (state.recycleId != recycleId) {
      state.recycle();
    }

    if (recycleId) {
      state.recycleId = recycleId;
      state.recycle = recycle;
    } else {
      state.recycle = function () {};
      state.recycleId = '';
    }

  	switch (type) {
      case 2:
        state.content.notContainLevels = content;
        break;
      case 1:
        state.content.containLevels = content;
        break;
      case 0:
        state.content.name = content;
        break;
      case -1:
      default:
        break;
    }
  }
};
export default {
  namespaced: true, state,
  getters, actions, mutations,
}