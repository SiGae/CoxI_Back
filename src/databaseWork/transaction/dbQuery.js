const exe = require('./dbExecute');
const sel = require('./dbSelect');

/*
작성자 : SiGae
일자 : 20/08/25
설명 : 인자로 넘어온 insert문과 update문을 dbselect파일 내부의 selec함수로 전달
*/
module.exports.execute = (query) => exe.exec(query);
/*
작성자 : SiGae
일자 : 20/08/25
설명 : 인자로 넘어온 select문을 dbselect파일 내부의 selec함수로 전달
*/
module.exports.select = (query) => sel.selec(query);
