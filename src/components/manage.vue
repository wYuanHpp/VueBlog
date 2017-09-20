<template>
   <div id="manage">
       <div class="manageListWrap">
           <div class="manageBlog">
               <div class="manageBlogTitle">title</div>
               <div class="manageToolBar">
                   <button>
                       <i class="fa fa-edit"></i>编辑
                   </button>
                   <button>
                       <i class="fa fa-comment">评论</i>
                   </button>
               </div>
           </div>
       </div>
       <div  class="manageEditorWrap">
           <editor></editor>
       </div>
   </div>
</template>
<script>
    import editor from '../bases/editormd.vue'
    export default {
    	data(){
    		return {
            }
        },
	    components:{
    		editor
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    @import "../assets/theme/theme.scss";
    #manage {
        width:100%;
        height:100%;
    }
    .manageListWrap {
        position: relative;
        float: left;
        margin-left:54px;
        width: calc(50% - 54px);
        height:100%;
    }
    .manageBlog{
        margin:20px;
        width: 80%;
        height:120px;
        .manageBlogTitle{
            width:100%;
            height:60px;
            padding:10px;
            border-radius: 10px 10px 0 0;
            background-color: $white;
        }
        .manageToolBar{
            width:100%;
            height:40px;
            padding:5px 10px;
            border-radius: 0 0 10px 10px;
            background-color: $black-bg;
            button {
                @include btn-default;
                float: right;
            }
        }
    }
    .manageEditorWrap {
        position: absolute;
        top:0;
        right:0;
        margin-left:20px;
        width:calc(50% - 20px);
        height: 100%;
        #editormd{
            position: absolute;
            top:0;
            width:100%;
            height:100%;
        }
    }
</style>