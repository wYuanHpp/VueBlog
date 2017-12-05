import type from "./type"
export default {
	
	[type.OPEN_MODAL](state){
		state.isModalOpen = true;
	},
	[type.CLOSE_MODAL](state){
		state.isModalOpen = false;
	}
}