<template>
    <div :id="id" class="main-editor">
        <textarea v-model="content"></textarea>
    </div>
</template>

<script>
	if (typeof window !== 'undefined') {
		var $s = require('scriptjs');
	}
	export default {
		name: 'Editor',
		props: {
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
				default: 'src/assets/lib/editor.md/'
			},
			editorConfig: {
				type: Object,
				default() {
					return {
						width: this.width,
						height: 530,
						path: 'src/assets/lib/editor.md/lib/',
						codeFold: true,
						saveHTMLToTextarea: true,
						searchReplace: true,
						htmlDecode: 'style,script,iframe|on*',
						emoji: true,
						onload: () => {
							console.log('onload');
						},
					};
				},
			},
		},
		data() {
			return {
				instance: null,
			};
		},
		computed: {
		},
		mounted() {
			console.log('mounted')
			//加载依赖
			$s([
				`src/assets/lib/jquery/dist/jquery.min.js`,
				`${this.editorPath}/lib/marked.min.js`,
				`${this.editorPath}/lib/prettify.min.js`,
				`${this.editorPath}/lib/raphael.min.js`,
				`${this.editorPath}/lib/underscore.min.js`,
			], () => {
				console.log('finish load js')
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
							console.log('editor')
							this.instance = editorMD(this.id, this.editorConfig);
						} else {
							console.log('html')
							this.instance = editorMD.markdownToHTML(this.id, this.editorConfig)
						}
					}
				});
			}
		},
	};
</script>
<style>
    @import "../assets/lib/editor.md/css/editormd.css";
</style>