import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

import App from './App.vue';
import routerConfig from "./router.config.js";
import store from './store'

Vue.use(VueRouter);
Vue.use(Vuex);
const router = new VueRouter(routerConfig );
/*const store = new Vuex.Store({
	state:{
		count: 0,
	},
	mutations:{
		increment(state){
			state.count++;
		}
	},
	getters:{
		isCount: state => {
			return state.count + 1;
		}
	}

});*/


var vm = new Vue({
	store,
	router,
	el: '#app',
	render: h => h(App),
	components:{
	}
})