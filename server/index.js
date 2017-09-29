const Koa = require("koa");
const Router = require('koa-router');
const logger = require('koa-logger');
const bodyParser = require('koa-bodyparser');
const getAllBlogs = require('./src/api/getAllBlogs');
const getAllBlogsAbstract = require('./src/api/getAllBlogsAbstract');
const getOneBlog = require('./src/api/getOneBlog') ;
const createBlog = require('./src/api/createBlog');
const delBlogById = require('./src/api/delBlogById');
const port = process.env.port | 3000;

const router = new Router();
const app = new Koa();


router.get('/api/getallblogsabstract', getAllBlogsAbstract);
router.get('/api/getallblogs', getAllBlogs);
router.post('/api/getoneblog', getOneBlog);
router.post('/api/createblog', createBlog);
router.del('/api/delblogbyid', delBlogById);

app.use(logger());
app.use(bodyParser());
app.use(router.routes())
app.listen(port);
console.log("server started on port 3000")