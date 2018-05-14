const crypto = require('crypto');// 加密模块
const $sql = require('./sql'); // sql语句
const conn = require('../config/conn'); // 连接数据库

let response = {
  code: -1,
  message: '',
  result: null
}
const Address = () => {};

module.exports = Address;

Address.getList = (req, res) => {
  let params = req.query.userId;
  let sql = $sql.address.get;
  console.log(params,sql) 
  conn(sql, [params], (err, result) => {
    if (err) {

    }
    console.log(result)
    if(result !== '' && result !== null) {
      response.code = 0;
      response.message = 'success';
      response.result = result;
      res.json(response);
    }
  })
}

Address.add = (req, res) => {
  let params = JSON.parse(Object.keys(req.body)[0]);
  console.log(params)
  let sql = $sql.address.add; 
  let createTime = new Date();
  conn(sql, [params.userId, params.name, params.phone, params.province, params.city, params.area, params.specific, createTime], (err, result) => {
    if (err) {

    }
    if(result) {
      response.code = 0;
      response.message = '添加成功！';
      response.result = result;
      res.json(response);
    }
  })
}

Address.update = (req, res) => {
  let params = JSON.parse(Object.keys(req.body)[0]);
  let sql = $sql.address.update; 
  let createTime = new Date();
  conn(sql, [params.name, params.phone, params.province, params.city, params.area, params.specific, createTime, params.addressId, params.userId,], (err, result) => {
    if (err) {

    }
    if(result) {
      response.code = 0;
      response.message = '修改成功！';
      response.result = result;
      res.json(response);
    }
  })
}

Address.delete = (req, res) => {
  let params = req.query.addressId;
  let userId = req.query.userId;
  let sql = $sql.address.delete;
  conn(sql, [params, userId], (err, result) => {
    if (err) {}
    if (result) {
      response.code= 0;
      response.message = '删除成功！';
      res.json(response);
    }
  })
}

Address.default = (req, res) => {
  
}