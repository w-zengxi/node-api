const $sql = require('./sql'); // sql语句
const conn = require('../config/conn'); // 连接数据库

let response = {
  code: -1,
  message: '',
  result: null
}
const Ads = () => {};
module.exports = Ads;

Ads.get = (req, res) => {
    let sql = $sql.ads.get;
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
Ads.add = (req, res) => {
  let params = JSON.parse(Object.keys(req.body)[0]);
  let sql = $sql.ads.add;
  let date = new Date();
  let createTime = date.getTime();
  conn(sql, [params.bannerType, params.imagesPath[0], params.linkPath, params.isShow, params.sortNum, createTime], (err, result) => {
    if(err) {}
    if (result) {
      response.code = 0;
      response.message = '广告添加成功';
      res.json(response);
      return;
    }
  })
}
// Ads.update = (req, res) => {
//   let params = JSON.parse(Object.keys(req.body)[0]);
//   let sql = $sql.Ads.update;
//   conn(sql, [params.typeName, params.parentId, params.typeSort, params.isShow, params.typeId], (err, result) => {
//     if(err) {}
//       console.log(result)
//     if (result) {
//       response.code = 0;
//       response.message = '分类修改成功！';
//       response.result = result;
//       res.json(response);
//       return;
//     }
//   })
// }
