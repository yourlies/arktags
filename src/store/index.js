import Vue from 'vue';
import Vuex from 'vuex';
import infotip from './modules/infotip';
import filter from './modules/filter';
import group from './modules/group';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: { infotip, filter, group },
  strict: debug,
});