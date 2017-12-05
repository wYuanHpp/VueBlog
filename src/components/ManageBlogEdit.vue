<template>
    <div ref="manageBlogEdit" id="manageBlogEdit" :class="{loading:!isLoaded, loaded: isLoaded}">
        <div class="info-wrapper">
            <div class="left-container">
                <div class="info title"> <label>title:</label><input type="text" name="title" v-model="title" >
                </div>
                <div class="info tags">
                    <div class="tag-input">
                        <label>tags:</label><input type="text" name="tags" v-model="tag" @keydown.enter="addTag"><button @click="addTag">添加</button>
                    </div>
                    <transition-group tag="div" name="list-tags" class="tags-container">
                        <span v-for="tag in tags" :key="tag" class="list-tags-item">{{tag}}<i class="fa fa-times-circle" @click="removeTag(tag)"></i></span>
                        <!--<span v-for="tag in tags" :key="tag" class="list-tags-item">{{tag}}</span>-->
                    </transition-group>
                </div>
            </div>
            <div class="right-container">
                <div class="info description">
                    <label>description:</label>
                    <label for="description"></label>
                    <textarea name="description" id="description" v-model="description"></textarea>
                </div>
            </div>
        </div>
        <div class="editor-wrapper">
            <editor ref="editor" :content="content" @isloaded="fetchBlog" width="94%" height="100%"></editor>
        </div>
        <div class="btn-wrapper">
            <span>{{fileName}}</span>
            <button @click="fileUpload">上传</button>
            <button v-if="isNew" @click="save">保存</button>
            <button v-else="isNew" @click="update">更新</button>
            <input ref="fileUpload" type="file" value="文件上传" @change="fileUploadHandle" hidden >

        </div>
    </div>
</template>
<script>
	import editor from '../bases/editormd.vue'
    import manage from '../api/manage';
	import {mapMutations} from 'vuex';
	import type from '../store/type';
	export default {
		data(){
			return {
				id:'',
				content:'',
                title:'',
                tag:'',
                description:'',
                fileName:'',
                tags:[],
                isLoaded:false,
                isNew:false
			}
		},
		components:{
			editor
		},
		mounted(){
			console.log("mounted")
			let id = this.$route.params.id
				this.isLoaded = false;
				if(id == 'new') {
					this.createNewBlog();
					this.replace();
				}else{
				this.fetchBlog(id);
				this.id = parseInt(id);
				}
		},
        methods:{
            ...mapMutations([type.OPEN_MODAL, type.CLOSE_MODAL]),
		    fileUpload(){
		    	this.$refs.fileUpload.click();
            },
            fileUploadHandle(ev){
		        let files = ev.target.files;
		        let file = files[0];
		        file && (this.fileName= file.name);
		        console.log(file);
		        let reader = new FileReader();
		        reader.onload = function(e){
		        	let result = e.target.result;
		        	result !== undefined && result.length>0 && (this.content = result);
		        	console.log(this.content)
                }.bind(this);

                reader.readAsText(file);
            },
            addTag(){
                if(this.tags.indexOf(this.tag) === -1)	{
                	if(this.tag === "") return;
                    this.tags.push(this.tag);
                }
                console.log(this.$store.state)
                this.tag = '';
                var self = this
                window.remove = function(){
                	self.tags.splice(1,1);
                }
            },
            removeTag(tag){
               this.tags.splice(this.tags.indexOf(tag),1);
            },
            save(){
            	let data = {
            		title:this.title,
                    description:this.description,
                    tags:this.tags,
                    content:this.$refs.editor.getContent(),
                }
                manage.createBlog(data).then(data =>{
                	console.log(data)
                    this.$emit('save',data)
                })
            },
            update(){
	            let data = {
	            	id:this.id,
		            title:this.title,
		            description:this.description,
		            tags:this.tags,
		            content:this.$refs.editor.getContent(),
	            }
	            console.log(data)
	            manage.updateBlog(data).then(data =>{
	            	if(data.code === 0 ){
			            this.$emit('save',data)
                    }
	            })
            },
            fetchBlog(id){
		            this.new = false;
		            manage.getBlogById(parseInt(id)).then(data => {
			            console.log(data)
			            if(data.code === 0){
				            data = (data.data)[0]
				            this.content = data.content;
				            this.title = data.title;
				            this.tags = data.tags;
				            this.description = data.description;
			            }
			            setTimeout(() => {
				            this.isLoaded = true;
			            },500);
		            })
            },
            createNewBlog(){
            	this.replace();
	            this.isNew = true;
	            setTimeout(() => {
		            this.isLoaded = true;
	            },500);
            },
	        replace(){
            	this.content = this.title = this.description = '';
                this.tags = [];

            }
        },
		watch:{
			'$route'(to, from){
				let id = to.params.id;
				this.id = id;
				if(from.name === 'blogedit'){
					this.isLoaded = false;
                    if(id == 'new'){
                        this.createNewBlog();
                        this.replace();
                    }
                    this.fetchBlog(id);
				}

			}
		}
	}
</script>
<style type="text/scss" lang="scss" scoped>
    @import '../assets/theme/theme';
    .loaded{
        transition: .5s ease-in-out;
        transform: translateX(0);
        opacity:1;
    }
    .loading{
        transition: .3s;
        transform: translateX(100%);
        opacity:0;
    }
    #manageBlogEdit{
        position: relative;
        box-sizing: border-box;
        padding:10px;
        width:95%;
        height:100%;
        border-radius: 10px;
        background: $white-bg;
    }
    .info-wrapper{
        margin:{
            top:10px;
            left:5%;
            right:5%;
            bottom:10px;
        }
        height:100px;
    }
    .left-container,.right-container{
        float: left;
        width:50%;
    }
    .info-wrapper::after{
        content: '';
        display: block;
        clear: both;
        height:0;
    }
    .info{
        float: left;
    }
    .title{
        margin-bottom: 6px;
        input{
            @include input;
        }

    }
    .tags{
        input{
            @include input
        }
        button{
            @include btn-small
        }
        .tags-container{
            position: relative;
            margin-top: 10px;

            span{
                display: inline-block;
                line-height:14px;
                /*float: left;*/
                padding:{
                    left:10px;
                    right:10px;
                    top:4px;
                    bottom:4px;
                };
                margin:{
                    right:8px;
                    bottom:8px;
                }
                border-radius: 6px;
                background: $black-bg;
                font-size: 12px;
                color: $white;
                i{
                    position: absolute;
                    top:-7px;
                    right:-7px;
                    margin-left:3px;
                    font-size: 14px;
                    color:$red;
                }
            }
        }
    }
    .description{
        width:100%;
        label{
            display: block; 
        }
        textarea{
            display: block;
            outline: none;
            width:100%;
            height:80px;
            resize: none;
        }
    }
    .editor-wrapper{
        height:calc(100% - 160px);
    }
    .btn-wrapper{
        margin:{
            top:14px;
            right:5%;
        }
        text-align: right;
        span{font-size: 12px;}
        button{
            @include btn-small
        }
    }
    .list-tags-item {
        display: inline-block;
        position: relative;
        transition: all .7s;
        margin-right: 10px;
    }
    .list-tags-enter, .list-tags-leave-to
        /* .list-tags-leave-active for below version 2.1.8 */ {
        opacity: 0;
        transform: translateY(-30px);
    }
    .list-tags-leave-active {
        position: absolute;
    }

</style>