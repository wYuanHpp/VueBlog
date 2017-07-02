<template>
	<div id="bloglist">
		<bloglistcontent v-for="list in bloglist" :content="list"></bloglistcontent>
	</div>
</template>
<style lang="scss">
	@import "../assets/theme/theme.scss";
	#bloglist{
		position: absolute;
		top: 0px;
		right: -17px;
		height: 100%;
		width: 76%;
		padding-left:34%;
		overflow: scroll;
		overflow-x:hidden;
		
	}	
</style>
<script>
	import bloglistcontent from './Bloglistcontent.vue'
	import {mapState} from "vuex"
	export default{
		computed:{
			...mapState({
				bloglist:state=>state.bloglist,
				count:state=>state.count,
			})
		},
		components:{
			bloglistcontent,
		},
		methods:{
			getblog(){
				console.log(this.bloglist);
			}
		}
	}
</script>