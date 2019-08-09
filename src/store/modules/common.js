const state = {
  screenMode: 0,
};
const getters = {};
const actions = {};
const mutations = {
  switchMode (state, context) {
  	state.screenMode = context.screenMode;
  }
};
export default {
  namespaced: true, state,
  getters, actions, mutations,
}