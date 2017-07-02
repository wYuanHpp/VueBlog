import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations.js'
import getters from './getters.js'
import actions from './actions.js'
Vue.use(Vuex);

export default new Vuex.Store({
	state:{
		bloglist:[{id:0,"title":"Vue2.0之去掉组件click事件的native修饰","abstruct":"根据Vue2.0官方文档关于父子组件通讯的原则，父组件通过prop传递数据给子组件，子组件触发事件给父组件。但父组件想在子组件上监听自己的click的话，需要加上native修饰符，故写法就像上面这样。"},{"id":1,"title":"Vue2.0之去掉组件click事件的native修饰","abstruct":"根据Vue3.0官方文档关于父子组件通讯的原则，父组件通过prop传递数据给子组件，子组件触发事件给父组件。但父组件想在子组件上监听自己的click的话，需要加上native修饰符，故写法就像上面这样。"}],
		count:0
	},
	mutations,
	getters,
	actions
})