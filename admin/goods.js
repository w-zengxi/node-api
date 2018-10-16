const crypto = require('crypto');// 加密模块
const multer = require('multer');
const $sql = require('./sql'); // sql语句
const conn = require('../config/conn'); // 连接数据库
const fs = require('fs');

let response = {
  code: -1,
  message: '',
  result: null
}
const Goods = () => {};

module.exports = Goods;

Goods.add = (req, res) => {
  let params = JSON.parse(Object.keys(req.body)[0]);
  let date = new Date();
  let time = date.getTime();
  let sql = $sql.goods.add;
  console.log(params.goodsImg)
  conn(sql, [params.goodsSn, params.goodsName, JSON.stringify(params.goodsImg), params.goodsPrice, params.goodsStock, params.isSale, params.isHot, params.isNew, params.isRecom, params.isBest, params.goodsCategory, params.goodsDesc, time, time] , (err, result) => {
    if(err) {}
       console.log(err,result)
    if (result) {
      response.code = 0;
      response.message = '商品添加成功！';
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
Goods.search = (req, res) => {
  let key = Object.keys(req.query)[0]
  let params = '"%' + req.query[key] + '%"'
  let sql = 'select * from goods where ' + key + ' like ' + params;
  conn(sql, (err, result) => {
    if(err) {
      console.log(err)
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
Goods.upload = (req, res) => {
  var createFolder = function () {
    try {
      fs.accessSync('public/images');
    } catch (e) {
      fs.mkdirSync('public/images');
    }
  }
  
  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images');
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "-" + file.originalname);
    }
  })
  createFolder()
  var upload = multer({ storage: storage });
  upload.single('file'), function(req, res, next) {
    console.log(a)
    var file = req.file;
    console.log(1111, file)
    console.log('文件类型：%s', file.mimetype);
    console.log('原始文件名：%s', file.originalname);
    console.log('文件大小：%s', file.size);
    console.log('文件保存路径：%s', file.path);
    res.json({res_code: '0'});
  }
}
