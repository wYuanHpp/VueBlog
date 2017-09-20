<template>
	<div id="bloglistcontent">
		<div class="blogpreview">
			<h2 class="blogpreview-title">{{content.title}}</h2>
			<p class="blogpreview-abstract">{{content.abstruct}}
			</p>
			<div class="blogpreview-tools">
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		props:[
			"content"
		],
		mounted(){
			}
	}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
	@import "../assets/theme/theme.scss";
	#bloglistcontent{
			width:100%;
			cursor: pointer;
			&:hover .blogpreview-title{
					color:$red !important;
			}
			.blogpreview{
				position: relative;
				width: 900px;
				height: 130px;
				background: $white;
				margin: 15px auto 65px;
				padding:8px 0 0 0;
				font-size:16px;
				.blogpreview-title{
					padding:0 5px; 
					color: $black-bg;
					text-align: right;

					
				}
				.blogpreview-abstract{
					padding:0 5px; 
				}
				.blogpreview-tools{
					position:absolute;	
					bottom:-50px;
					width: 100%;
					height: 50px;
					background: $black-bg;
				}
			}	
		}
</style>