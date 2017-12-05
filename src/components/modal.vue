<template>
   <div v-if="isModalOpen" class="modal-wrapper">
      <div class="dialog-box">
         <p>{{text}}</p>
         <button class="btn-info" @click="click(true)">确定</button>
         <button class="btn-danger" @click="click(false)">取消</button>
      </div>
   </div>
</template>
<script>
   import {mapGetters} from "vuex"
	export default {
		props:{
			text:""
		},
		data(){
			return {

			}
		},
        mounted(){
			console.log(this.isModalOpen)
        },
        computed:{
            ...mapGetters(["isModalOpen"])
//            isModalOpen(){
//            	return this.$store.getters.isModalOpen;
//            }
        },
		methods:{
			click(param){
				if(param){
					this.$emit("choosed",true);
				}else{
					this.$emit("choosed",false);
				}
			}
		}

	}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
   .modal-wrapper{
      position: absolute;
      width:100%;
      top:0;
      right:0;
      left:0;
      bottom:0;
      background-color: rgba(0, 0, 0, 0.53);
   }
   .dialog-box{
      border:1px solid red;
      width:320px;
      height:120px;
      position: absolute;
      left:50%;
      top:25%;
      transform:translate(-50%,-50%)
   }
</style>