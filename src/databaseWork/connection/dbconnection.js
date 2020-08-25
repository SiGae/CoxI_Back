const { Client } = require('pg');
const DbInfo = require('./dbconfig');

/*
작성자 : SiGae
일자 : 20/08/14
설명 : db커넥션모듈
*/

module.exports = {
  conn: new Client({
    user: DbInfo.id,
    host: DbInfo.host,
    database: DbInfo.db,
    password: DbInfo.pw,
    port: DbInfo.port,
  }),
};
