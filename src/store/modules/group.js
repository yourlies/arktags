const state = {
  content: '', count: 0, type: 0,
};
const getters = {};
const actions = {};
const mutations = {
  store (state, context) {
  	state.count++;
  	state.content = context.content || [];
  },
  clear (state) {
  	state.count++;
    state.type = -1;
  	state.content = [];
  },
  recover (state) {
    state.count++;
    state.type = 0;
  },
};
export default {
  namespaced: true, state,
  getters, actions, mutations,
}