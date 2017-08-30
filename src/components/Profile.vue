<template>
	<div id="profile">
		<div id="avatar">
		</div>
		<h2 class="name">wYuanHpp</h2>
		<div class="link">
			<router-link tag="input" type="button" :to="{name:'tags'}" value="Tags" />
			<router-link tag="input" type="button" :to="{name:'bloglist'}" value="bloglist"/>
			<router-link tag="input" type="button" :to="{name: 'archive'}" value="archive"/>
		</div>

	</div>
</template>
<style lang="scss" rel="stylesheet/scss" scoped>
	@import "../assets/theme/theme.scss";
	#profile{
		position: absolute;
		width: 20%;
		height: 100%;
		padding-left: 54px;
		padding-top: 70px;
		background: rgba(12,12,12,0.6);
		#avatar{
			height: 130px;
			width: 130px;
			margin: 0 auto;
			border: 1px solid gray;
			border: 1px solid gray;
			background: url("../assets/img/avatar.jpg") center center;
			background-size: cover;
		}
		.name{
			font-size: 26px;
			color: $white;
			text-align: center;
		}
		@at-root{
			.link{
				width:100%;
				text-align: center;
				input{
					width:80px;
					font-size: 16px;
					outline: none;
					user-select: none;
					border-radius: 15px;
					border:none;
					transition:0.5s;
					&:hover{
						background-color: $black-bg;
						color: $white;
					}
				}

				.router-link-active{
					background-color: $black-bg;
					color: $white;
				}
			}
		}
	}
	
</style>