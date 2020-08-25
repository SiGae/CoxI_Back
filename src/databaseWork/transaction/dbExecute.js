const conn = require('../connection/dbconnection');

/*
작성자 : SiGae
일자 : 20/08/25
설명 : 인자로 넘어온 insert문과 update문을 db에서 실행
*/
module.exports.exec = async (query) => {
  const pg = conn.conn;
  pg.connect();
  pg.query(query);
};
