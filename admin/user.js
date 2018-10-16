const crypto = require('crypto');// 加密模块
const $sql = require('./sql'); // sql语句
const conn = require('../config/conn'); // 连接数据库

let response = {
  code: -1,
  message: '',
  result: null
}
const User = () => {};

module.exports = User;

User.get = (req, res) => {
  let sql = $sql.user.get;
  conn(sql, [], (err, result) => {
    if(err) {}
    if (result) {
      response.code = 0;
      response.message = 'success';
      response.result = result;
      res.json(response);
      return;
    }
  })
}
User.search = (req, res) => {
    let key = Object.keys(req.query)[0];
    let params = '"%' + req.query[key] + '%"'
    let sql = 'select * from user where ' + key + ' like ' + params;
    conn(sql, (err, result) => {
      if(err) {
        console.log(err);
      }
      if (result) {
        response.code = 0;
        response.message = 'success';
        response.result = result;
        res.json(response);
        return;
      }
    })
  }
User.switch = (req, res) => {
  let params = JSON.parse(Object.keys(req.body)[0]);
  let sql = $sql.user.update;
  console.log(params)
  conn(sql, [params.status, params.userId], (err, result) => {
    if(err) {
      console.log(err);
    }
    if (result) {
      response.code = 0;
      response.message = 'success';
      response.result = result;
      res.json(response);
      return;
    }
  })
}