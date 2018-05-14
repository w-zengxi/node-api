const crypto = require('crypto');// 加密模块
const $sql = require('./sql'); // sql语句
const conn = require('../config/conn'); // 连接数据库

let response = {
  code: -1,
  message: '',
  result: null
}
const Goods = () => {};

module.exports = Goods;

Goods.getInfo = (req,res) => {
  let params = JSON.parse(Object.keys(req.body)[0]);
  let sql = $sql.goods.getGoodsInfo;
  conn(sql, [goodsId], (err, result) => {
    if (err) {

    }
    if(result) {
      response.code = 0;
      response.message = 'success';
      response.result = result;
      res.json(response);
      return;
    }
  })
}


