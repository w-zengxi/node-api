const express = require('express');
const router = express.Router();
const addBasic = (req, res) => {
  let params = req.body;
  console.log(params)
  let sql = `insert into goods (goodsSn, goodsName, goodsImg, goodsPrice, goodsStock, isSale, isHot, isNew, isRecom, isBest, goodsCategory, goodsDesc, createTime, saleTime) value (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`; 
//   let createTime = new Date().getTime();
//   conn(sql, [params.userId, params.name, params.phone, params.province, params.city, params.area, params.specific, createTime], (err, result) => {
//     if (err) {

//     }
//     console.log(result)
//     if(result) {
//       response.code = 0;
//       response.message = '添加成功！';
//       response.result = result;
//       res.json(response);
//     }
//   })
  res.json('保存成功');
}

router.post('/add/resume/basic', addBasic)

module.exports = router;
