<template>
   <div id="manage">
       <div class="manageListWrap">
           <div class="addNewBlog">
               <router-link class="addNewBlogBtn" tag="a" to="/manage/blogedit/new">
                   <i class="fa fa-plus login-icon"></i>
               </router-link>
           </div>
           <transition-group name="list-complete" class="bloglist" tag="ul">
               <li ref="blogs"  v-for="blog in this.blogList" :key="blog" class="manageBlog list-complete-item">
                   <div class="manageBlogTitle">{{blog.title}}</div>
                   <div class="manageToolBar">
                       <keep-alive>
                           <router-link  tag="button" :to="`/manage/blogedit/${blog.id}`">
                               <i class="fa fa-edit"></i>编辑
                           </router-link>
                       </keep-alive>
                       <keep-alive>
                           <router-link tag="button" to="/manage/blogedit/2">
                               <i class="fa fa-comment">评论</i>
                           </router-link>
                       </keep-alive>
                       <button class="delBlog" @click="delBlog(blog.id, blog)">
                           <i class="fa fa-remove"></i>删除
                       </button>
                   </div>
               </li>
           </transition-group>
       </div>
       <div  class="manageEditorWrap">
               <router-view @save="loadAllBlogAbstract"></router-view>
       </div>
   </div>
</template>
<script>
    import editor from '../bases/editormd.vue'
    import manageBlogEdit from './ManageBlogEdit.vue'
    import manageApi from '../api/manage';
    import animate from '../util/animate'

    export default {
    	data(){
    		return {
    		    blogList:null
            }
        },
        mounted(){
    		this.loadAllBlogAbstract();
    		console.log(animate);
        },
        methods:{
        	loadAllBlogAbstract(){
		        manageApi.getAllBlogsAbstract()
			        .then((data) => {
				        console.log(data.data);
				        this.blogList = data.data;
			        })
            },
            delBlog(id, blog){
        		console.log('del')
	            manageApi.delBlog(id)
		            .then((data) => {
			            console.log(data);
//			            animate(this.$refs.blogs, 0.5, ()=>{
////                            this.$refs.blogs.splice(this.blogList.indexOf(blog) , 1);
//                            console.log(this.$refs.blogs)
//                        }, ()=>{
//				            this.blogList.splice(this.blogList.indexOf(blog), 1);
//                        })
			            this.blogList.splice(this.blogList.indexOf(blog), 1);
		            })
            }
        },
	    components:{
            manageBlogEdit
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    @import "../assets/theme/theme.scss";
    #manage {
        width:100%;
        height:100%;
        perspective: 1800px;
    }
    .addNewBlog{
        position: relative;
        width:80%;
        height:30px;
        margin:20px;
        a{
            display: inline-block;
            position:absolute;
            top:10px;
            right:10px;
            width:auto;
            height:auto;
            line-height:26px;
            font-size:20px;
            text-align: center;
            color:$white-bg;
            i{
                display:inline-block;
                font-size: 30px;
                line-height: 40px;
                color:white;
                width: 40px;
                height: 40px;
                text-align: center;
                vertical-align: bottom;
            }
            &:hover > i{
                text-align: center;
            transition:.5s;
            transform: rotateZ(180deg);
                /*color: #000000;*/
        }
        }

    }
    .manageListWrap {
        position: relative;
        float: left;
        margin-left:54px;
        width: calc(40% - 54px);
        height:100%;
    }
    .manageBlog{
        margin:20px;
        width: 80%;
        height:80px;
        .manageBlogTitle{
            box-sizing: border-box;
            width:100%;
            height:45px;
            padding:10px 10px;
            border-radius: 10px 10px 0 0;
            background-color: $white;
        }
        .manageToolBar{
            box-sizing: border-box;
            width:100%;
            height:35px;
            padding:6px 5px;
            border-radius: 0 0 10px 10px;
            background-color: $black-bg;
            button {
                @include btn-small;
                float: right;
            }
        }
    }
    .manageEditorWrap {
        position: absolute;
        top:0;
        right:0;
        margin:{
            left:20px;
            top: 20px;
            bottom:20px;
        };
        width:calc(60% - 20px);
        height: calc(100% - 40px);
        #editormd{
            position: absolute;
            top:0;
            width:100%;
            height:100%;
        }
    }
    .list-complete-item {
        transition: all .7s;
        margin-right: 10px;
    }
    .list-complete-enter, .list-complete-leave-to
        /* .list-complete-leave-active for below version 2.1.8 */ {
        opacity: 0;
        transform: translateX(-30px);
    }
    .list-complete-leave-active {
        position: absolute;
    }

</style>