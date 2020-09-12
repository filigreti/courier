import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		email: '',
	},
	mutations: {
		giveEmail(state, payload) {
			state.email = payload;
		},
	},
	actions: {},
	modules: {},

	plugins: [createPersistedState()],
});
