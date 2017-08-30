<template>
	<div id="sidebar">
		<div id="sidebar_nav">
			<router-link class="home" to="/home"><i class="fa fa-home" ></i></router-link>	
			<router-link class="blog" to="/blog"><i class="fa fa-bold" ></i></router-link>
			<router-link class="music" to="/music"><i class="fa fa-headphones" ></i></router-link>
		</div>
		<div id="sidebar_author">
			<router-link class="author" to="/profile"><i class="fa fa-user" ></i></router-link>	
			<router-link class="login" to="/login"><i class="fa fa-sign-in"></i></router-link>
		</div>	
	</div>
</template>
<script>
	export default {
		name:"sidebar",
	}
</script>

<style rel="stylesheet/scss" lang="scss">
	@import "../assets/theme/theme.scss";
	#sidebar {
		position: fixed;
		height: 100%;
		width: 54px;
		background-color: $black-bg;
		color: $white;
		z-index:1000;
		.router-link-active i{
			color: $blue;
		}
		a{
			display:block;
			color: $white;
			text-align: center;
			margin-top:20px;
			font-size:18px;
			position:relative;

			&:link {
	  	 		text-decoration: none;
  	 			color:$white;
			}
			&:visited {
				text-decoration: none;
				color:$white;
			}
			&:active {
				text-decoration: none;
				color:$white;
			}
			&:hover{
				color:$blue;
				&:after{
					transition:.3s;
					opacity:1;
					color:$white;
				}
			}
			&::after{
				display:block;
				position: absolute;
				padding:5px;
				line-height: 14px;
				top:3px;
				left:60px;
				background-color: $black-bg;
				font-size: 12px;
				border-radius: 4px;
				// border: 1px  solid;
				opacity:0;
			
			}
		}	
	}
	.home{&:after{content:"home";}}	
	.blog{&:after{content:"blog";}}	
	.music{&:after{content:"music";}}	
	.author{&:after{content:"author";}}	
	.login{&:after{content:"login";}}	
	#sidebar_nav{
		width: 100%;
		position:absolute;
		margin-top:30px;
		
	}
	#sidebar_author{
		width: 100%;
		position:absolute;
		bottom: 0;
		margin-bottom: 30px;
	}	
</style>