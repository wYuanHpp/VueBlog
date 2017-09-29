var koa = require("koa");
var app = new koa();
var hello = (cxt)=>{cxt.body = "hello world"}
app.use(hello)
app.listen(3000);