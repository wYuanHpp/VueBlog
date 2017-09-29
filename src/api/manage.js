import axios from 'axios';

export default{
	
	getAllBlogsAbstract(){
		return new Promise((resolve, reject) => {
			axios.get('/api/getallblogsabstract')
				.then(data => {resolve(data.data)})
				.catch(err => {reject(err)});
		})
	},
	
	getBlogById(id){
		return new Promise((resolve, reject) => {
			axios.post('/api/getoneblog',{"id":id})
				.then(data => {resolve(data.data)})
				.catch(err => {reject(err)});
		})
	},
	
	delBlog(id){
		return new Promise((resolve, reject) => {
			axios.delete('api/delblogbyid',{
				data:{"id":id}
			})
				.then(data => resolve(data.data))
				.catch(err => reject(err));
		})
	},
	
	createBlog(data){
		return new Promise((resolve, reject) => {
			axios.post('api/createblog',data)
				.then(data => resolve(data.data))
				.catch(err => reject(err));
		})
	}
}