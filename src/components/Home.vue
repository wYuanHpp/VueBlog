<template>
	<div id='home'>
		<div id="home_title">
			<h6>前端工程师-伪后端爱好者</h6>
			<div id="title_loop">
				<h4 :class='{"current": now == 1}'><span>Hello，</span><span class="blue" >我是Yuan</span></h4>
				<h4 :class='{"current": now == 2}'><span>书山有路勤为径 </span><span class="blue" >学海无涯苦作舟</span></h4>
				<h4 :class='{"current": now == 3}'><span class="blue">再不努力 </span><span  >我们就老了</span></h4>
			</div>
		</div>
		<div id="home_button">
				<router-link tag="input" type="button" to="blog" value='Blog'/>
				<router-link tag="input" type="button" to="music" value='Musci'/>
			</div>
		<copyright></copyright>
	</div>	
</template>
<script>
	import copyright from "./CopyRight.vue";
	export default {
		name:"home",
		data(){
			return {
				now:1,
				loop:"",
			}
		},
		mounted:function(){
			let _this = this;
			this.loop = setInterval(function(){
				_this.now>=3?_this.now=1:_this.now++;	
			},3000);
		
		},
		destroyed:function(){
		 	clearInterval(this.loop);
		},
		components:{
			copyright
		}

		 	
	}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	@import "../assets/theme/theme.scss";
	.blue{
		color:$blue;
	}
	.current{
		display:block;
		opacity:1;
	}
	h4{
		position:absolute;
		top: 0;
		width:100%; 
		margin-top:5px;
		font-size:26px;
		opacity: 0;
		transition:all ease .7s;

	}
	h6{
		width:300px;
		margin:10px auto;
		border-bottom:2px $white solid;
		padding-bottom: 5px;
		letter-spacing: 2px;
		font-size: 16px;
	}
	#home{
		height : 100%;
		width : 100%;
		position: absolute;
		background: radial-gradient(ellipse at center,transparent 0,rgba(0,0,0,.8) 100%);
	}
	#home_title{
		width: 100%;
		color:$white;
		text-align: center;
		position: absolute;
		top:20%;
		#title_loop{
			position: relative;
		}
	}
	#home_button{
		position: absolute;
		top:80%;
		text-align: center;
		width: 100%;
		input{
			margin:0 10px 0 10px;
			outline: none;
			user-select: none;
            -webkit-user-select: none;
            border-radius: 20px;
            border:none;
			background-color: $black-bg;
			color: $white;
			width: 110px;
			height: 40px;
			font-size: 18px;
			transition:.3s;
			&:hover{
				background-color: $blue;
			}
		}
	}
</style>