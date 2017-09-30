<template>
    <div :id="id" class="main-editor">
        <!--<textarea v-model="content" value="123321"></textarea>-->
    </div>
</template>

<script>
	if (typeof window !== 'undefined') {
		var $s = require('scriptjs');
	}
	export default {
		name: 'Editor',
		props: {
			height:'',
			width: '',
			content:{
				type: String,
				default: ''
			},
			type: {
				type:String,
				default: 'editor'
			},
			id: {
				type: String,
				default: 'editor-md'
			},
			editorPath: {
				type: String,
				default: 'node_modules/editor.md/'
			},
			editorConfig: {
				type: Object,
				default() {
					return {
						width: this.width,
						height: this.height,
						watch : false,
						toolbarIcons : function() {
							return ["undo", "redo", "|", "bold", "hr", "|", "watch"]
						},
						disabledKeyMaps : [
							"Ctrl-K","Ctrl-F","Ctrl-B","Ctrl-E", "F11", "F10"  // disable some default keyboard shortcuts handle
						],
						path: 'node_modules/editor.md/lib/',
						codeFold: true,
						saveHTMLToTextarea: true,
						searchReplace: true,
						htmlDecode: 'style,script,iframe|on*',
						emoji: true,
                        onchange: () => {
							console.log("change")
                        },
                        onload:() => {
							console.log(this)
							this.$emit('isloaded');
							this.instance.setMarkdown(this.content)
                        }
					};
				},
			},
		},
		data() {
			return {
				instance: null,
			};
		},
	    watch:{
		    content(newVal,oldVal){
		        if(newVal !== oldVal){
		        	console.log('change')
                    if(this.instance){
	                    this.instance.setMarkdown(newVal);
                    }
                }
            }
        },
		mounted() {
			//加载依赖
			$s([
				`node_modules/jquery/dist/jquery.min.js`,
				`${this.editorPath}/lib/marked.min.js`,
				`${this.editorPath}/lib/prettify.min.js`,
				`${this.editorPath}/lib/raphael.min.js`,
				`${this.editorPath}/lib/underscore.min.js`,
			], () => {
				$s(`${this.editorPath}editormd.js`, () => {
					console.log('init Editor')
					this.initEditor();
				});
			});

		},
		beforeDestroy() {

		},
		methods: {
			initEditor() {
				this.$nextTick((editorMD = window.editormd) => {
					if (editorMD) {
						if (this.type == 'editor'){
							this.instance = editorMD(this.id, this.editorConfig);
						} else {
							this.instance = editorMD.markdownToHTML(this.id, this.editorConfig)
						}
					}
				});
			},
            getContent(){
				return this.instance.getMarkdown();
            }
		},
	};
</script>
<style>
    @import "../assets/lib/editor.md/css/editormd.css";
</style>