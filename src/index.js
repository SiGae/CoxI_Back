const Koa = require('koa');
const Router = require('koa-router');
const conn = require('./dbconnection');

const app = new Koa();
const router = new Router();

/*
작성자 : SiGae
일자 : 20/08/14
설명 : db커넥션 생성 후 아이디 중복여부 조회
*/
router.get('/idduplicate', async (ctx) => {
  const pg = conn.conn;
  pg.connect();
  const res = await pg.query(
    `select userId from userinfo where userId ='${ctx.query.id}'`,
  );
  ctx.body = { result: res.rowCount === 0 };
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(4000, () => {
  console.log('running on port 4000');
});
