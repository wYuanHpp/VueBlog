<template>
	<div id="blog">
	<transition name="slide" mode='out-in' >
		<router-view ></router-view>
	</transition>
	<profile></profile>
		
	</div>
</template>
<style lang="scss">
	@import "../assets/theme/theme.scss";
	#blog{
		height: 100%;

	}
	h1{
		width: 100%;
		font-size: 30px;
		text-align: center;
		margin:0;
	}
	button{
		width: 100%;
		display:block;
		margin: 0 auto；
	}
	.slide-enter-active, .slide-leave-active {
	  	transition: .3s;
	}
	.slide-leave-active {
		transform:translateY(50px);
	   	opacity:0;
	}
	.slide-enter{
		transform:translateY(-50px);
	   	opacity:0;
	}
</style>
<script>
	import { mapState,mapGetters,mapActions } from 'vuex';
	import profile from './Profile.vue'
	
	export default{
		data(){
			return{
				a:1,
				
			}
		},
		methods:{
			...mapActions([
				'addcount'	
			]),
		},
		computed: {
				b(a){
					return this.a+3;
				},
		},
		components:{
			profile
			
		}
		
	}
</script>x