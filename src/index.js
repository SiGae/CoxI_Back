const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
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

/*
작성자 : SiGae
일자 : 20/08/17
설명 : db커넥션 생성 후 아이디 존재여부 확인후 패스워드 일치여부에 따라 true/false반환
*/
router.post('/loginmember', async (ctx) => {
  const pg = conn.conn;
  pg.connect();
  const res = await pg.query(
    `select password from userinfo where userId='${ctx.request.body.id}'`,
  );
  if (res.rowCount > 0) {
    ctx.body = {
      valid: true,
      result: res.rows[0].password === ctx.request.body.password,
    };
  } else {
    ctx.body = {
      valid: false,
    };
  }
});

app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(4000, () => {});
