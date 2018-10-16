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
  let createTime = date.getTime();
  conn(sql, [params.typeName, params.parentId, params.isShow, params.typeSort, createTime], (err, result) => {
    if(err) {}
    if (result) {
      response.code = 0;
      response.message = '产品分类添加成功';
      res.json(response);
      return;
    }
  })
}
Category.get = (req, res) => {
  let params = (req.query);
  let sql = $sql.category.get;
  conn(sql, [params], (err, result) => {
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
Category.update = (req, res) => {
  let params = JSON.parse(Object.keys(req.body)[0]);
  let sql = $sql.category.update;
  conn(sql, [params.typeName, params.parentId, params.typeSort, params.isShow, params.typeId], (err, result) => {
    if(err) {}
      console.log(result)
    if (result) {
      response.code = 0;
      response.message = '分类修改成功！';
      response.result = result;
      res.json(response);
      return;
    }
  })
}
// Category.remove = (req, res) => {
//   let params = req.query.typeId;
//   let sql = $sql.category.remove;
//   conn(sql, [params], (err, result) => {
//     if(err) {}
//        console.log(result,sql)
//     if (result) {
//       response.code = 0;
//       response.message = '删除成功';
//       response.result = result;
//       res.json(response);
//       return;
//     }
//   })
// }


