const state = {
  content: '', shake: false, count: 0,
};
const getters = {};
const actions = {};
const mutations = {
  create (state, context) {
  	state.count++;
  	state.shake = context.shake || false;
  	state.content = context.content || '自闭中···';
  }
};
export default {
  namespaced: true, state,
  getters, actions, mutations,
}