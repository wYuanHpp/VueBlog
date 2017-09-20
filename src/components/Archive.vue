<template>
	<div id="archive">
		<div id="archivecontent"></div>
	</div>
</template>
<style lang="scss" scoped>
	@import "../assets/theme/theme.scss";
	#archive{
		position: absolute;
		top: 0px;
		right: -17px;
		height: 100%;
		width: 76%;
		padding-left:34%;
		overflow: scroll;
		overflow-x:hidden;
		#archivecontent{
			width: 900px;
			height: 95%;
			margin: 15px auto;
			background: $white;

		}
	
	}	
</style>
