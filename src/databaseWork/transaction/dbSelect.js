const conn = require('../connection/dbconnection');

/*
작성자 : SiGae
일자 : 20/08/25
설명 : 인자로 넘어온 select문을 db에서 실행 후 결과 반환
*/
module.exports.selec = async (query) => {
  const pg = conn.conn;
  pg.connect();
  return pg.query(query);
};
