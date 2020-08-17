const { Client } = require('pg');
const DbInfo = require('./dbconfig');

module.exports = {
  conn: new Client({
    user: DbInfo.id,
    host: DbInfo.host,
    database: DbInfo.db,
    password: DbInfo.pw,
    port: DbInfo.port,
  }),
};
