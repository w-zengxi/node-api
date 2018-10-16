const $sql = require('./sql'); // sql语句
const conn = require('../config/conn'); // 连接数据库

let response = {};

const getSwiper = (req, res) => {
  let sql = $sql.get.swiper
  conn(sql, (err, result) => {
    if (err) { }
    if (result) {
      response.code = 0;
      response.message = 'success';
      response.result = result.map(function (item, index, array) {
        return {
          imagesPath: item.imagesPath,
          linkPath: item.linkPath
        }
      });
      res.json(response);
      return;
    }
  })
}
const getGuess = (req, res) => {
  let params = (req.query.page - 1) * 10;
  console.log(params)
  let sql = $sql.get.guess;
  conn(sql, [params], (err, result) => {
    if (err) { }
    if (result) {
      response.code = 0;
      response.message = 'success';
      response.result = result;
      res.json(response);
      return;
    }
  })
}
const getCategory = (req, res) => {
  let sql = $sql.get.categoty
  conn(sql, (err, result) => {
    if (err) { }
    if (result) {
      response.code = 0;
      response.message = 'success';
      response.result = result.map(function (item, index, array) {
        return {
          id: item.typeId,
          name: item.typeName,
          parentId: item.parentId,
          sort: item.typeSort
        }
      });
      res.json(response);
      return;
    }
  })
}
const getInfo = (req, res) => {
  let params = (req.query.id)
  let sql = $sql.get.info;
  conn(sql, [params], (err, result) => {
    if (err) { }
    console.log(result)
    if (result) {
      response.code = 0;
      response.message = 'success';
      response.result = {
        goodsId: result[0].goodsId,
        goodsSn: result[0].goodsSn,
        goodsName: result[0].goodsName,
        goodsImg: JSON.parse(result[0].goodsImg),
        goodsPrice: result[0].goodsPrice,
        goodsStock: result[0].goodsStock,
        goodsCategory: result[0].goodsCategory,
        goodsDesc: result[0].goodsDesc,
        saleNum: result[0].saleNum,
        appraiseNum: result[0].appraiseNum,
        goodsSeoKeywords: result[0].goodsSeoKeywords
      };
      res.json(response);
      return;
    }
  })
}
module.exports = {
  getSwiper,
  getGuess,
  getCategory,
  getInfo
}
