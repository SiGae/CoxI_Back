const Koa = require('koa')
const app = new Koa();

app.use(ctx => {
	ctx.body = 'Hello Worlds';
});

app.listen(4000, () => {
	console.log('running on port 4000');
});
