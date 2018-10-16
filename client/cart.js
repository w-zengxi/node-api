const $sql = require('./sql'); // sql语句
const conn = require('../config/conn'); // 连接数据库

let response = {
  code: -1,
  message: '',
  result: null
}

const addCart = (req, res) => {
  let params = JSON.parse(Object.keys(req.body)[0]);
  let sql = $sql.cart.add;
  console.log(params.userId,sql)
  conn(sql, [params.userId, params.goodsId, params.goodsSpec, params.goodsNum], (err, result) => {
    if(err) {}
    console.log(result)
    if (result) {
      response.code = 0;
      response.message = '添加成功';
      res.json(response);
      return;
    }
  })
}
const getCart = (req, res) => {
  let params = req.query.userId;
  let sql = $sql.cart.get;
  conn(sql, [params], (err, result) => {
    if(err) {}
    console.log(result)
    if (result) {
      response.code = 0;
      response.message = 'success';
      let data = result.map(function (item) {
        return {
          cartId: item.cartId,
          goodsId: item.goodsId,
          goodsId: item.goodsId,
          goodsSn: item.goodsSn,
          goodsName: item.goodsName,
          goodsImg: JSON.parse(item.goodsImg)[0],
          goodsPrice: item.goodsPrice,
          goodsStock: item.goodsStock,
          goodsCategory: item.goodsCategory,
          goodsDesc: item.goodsDesc,
          saleNum: item.saleNum,
          appraiseNum: item.appraiseNum,
          goodsSeoKeywords: item.goodsSeoKeywords,
          goodsSpec: item.goodsSpec,
          goodsNum: item.goodsNum
        }
      })
      response.result = data;
      res.json(response);
      return;
    }
  })
}
const update = (req, res) => {
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
const removeCart = (req, res) => {
  let params = req.query.cartId;
  let sql = $sql.cart.remove;
  console.log(params,sql)
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

module.exports = {
  addCart,
  getCart,
  removeCart
};
