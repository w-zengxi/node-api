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

Goods.goodsTypeTitle = (req, res) => {
  let sql = $sql.goods.goodsType;
  conn(sql, (err, result) => {
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

Goods.add = (req, res) => {
  let params = JSON.parse(Object.keys(req.body)[0]);
  let sql = $sql.goods.add;
  let date = new Date();
  let createTime = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds(); 
  conn(sql, [params.goodsSn, params.goodsName, params.goodsImg, params.goodsPrice, params.goodsStock, params.isSale, params.isHot, params.isNew, params.isRecom, params.isBest, params.goodsCategory, params.goodsDesc, createTime, createTime], (err, result) => {
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
Goods.get = (req, res) => {
  let params = (req.query.page-1)*10;
  console.log(params)
  let sql = $sql.goods.get;
  conn(sql, [params], (err, result) => {
    if(err) {}
      console.log(result[0][0]['count(goodsId)'])
    if (result) {
      response.code = 0;
      response.message = 'success';
      response.result = {goodsTotal: result[0][0]['count(goodsId)'], goodsList:result[1]};
      res.json(response);
      return;
    }
  })
}
Goods.remove = (req, res) => {
  let params = req.query.goodsId;
  let sql = $sql.goods.delete;
  console.log(params,sql)
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


