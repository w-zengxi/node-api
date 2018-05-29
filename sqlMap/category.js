const crypto = require('crypto');// 加密模块
const $sql = require('./sql'); // sql语句
const conn = require('../config/conn'); // 连接数据库

let response = {
  code: -1,
  message: '',
  result: null
}
const Category = () => {};

module.exports = Category;


Category.add = (req, res) => {
  let params = JSON.parse(Object.keys(req.body)[0]);
  let sql = $sql.category.add;
  let date = new Date();
  let createTime = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds(); 
  console.log(params,sql,createTime)
  conn(sql, [params.parentId, params.typeName, params.isShow, params.typeSort, createTime], (err, result) => {
    if(err) {}
       console.log(result)
    if (result) {
      response.code = 0;
      response.message = 'success';
      response.result = result;
      res.json(response);
      return;
    }
  })
}
Category.get = (req, res) => {
  let params = (req.query.page-1)*10;
  let sql = $sql.category.get;
  conn(sql, [params], (err, result) => {
    if(err) {}
      console.log(result[0][0]['count(typeId)'])
    if (result) {
      response.code = 0;
      response.message = 'success';
      response.result = {typeTotal: result[0][0]['count(typeId)'], typeList:result[1]};
      res.json(response);
      return;
    }
  })
}
Category.update = (req, res) => {
  let params = JSON.parse(Object.keys(req.body)[0]);
  let sql = $sql.category.update;
  conn(sql, [params], (err, result) => {
    if(err) {}
      console.log(result)
    if (result) {
      response.code = 0;
      response.message = 'success';
      response.result = result;
      res.json(response);
      return;
    }
  })
}
Category.remove = (req, res) => {
  let params = req.query.typeId;
  let sql = $sql.category.remove;
  conn(sql, [params], (err, result) => {
    if(err) {}
       console.log(result,sql)
    if (result) {
      response.code = 0;
      response.message = '删除成功';
      response.result = result;
      res.json(response);
      return;
    }
  })
}


