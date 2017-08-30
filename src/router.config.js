import home from "./components/Home.vue"
import blog from "./components/Blog.vue"
import tags from "./components/Tags.vue"
import bloglist from './components/Bloglist.vue'
import archive from './components/Archive.vue'
import login from './components/Login.vue'

export default{
	routes:[
		{path:"/home",name:"home",component:home},
		{path:"/blog",component:blog,
			children:[
				{path:'',redirect:"bloglist"},
				{path:'tags',name:"tags",component:tags},
				{path:'bloglist',name:"bloglist",component:bloglist},
				{path:'archive',name:"archive",component:archive},
			]
		},
		{path:"/login",component:login},
		{path:"*",redirect:"/home"}
		
	]
}