const $sql = require('./sql'); // sql语句
const conn = require('../config/conn'); // 连接数据库
const crypto = require('crypto');

let response = {
  code: -1,
  message: '',
  result: null
}

const userLogin = (req, res) => {
  let params = JSON.parse(Object.keys(req.body)[0]);
  let sql = $sql.user.login; // 登录sql语句
  conn(sql, [params.loginName, params.loginPwd], (err, result) => {
    if (err) {
    }
    console.log(result)
    if (result == '' || result == null) {
      response.code = 3;
      response.message = '用户名或密码错误！';
      res.json(response);
      return;
    } else {
      response.code = 0;
      response.message = '登陆成功！';
      let time = new Date().getTime() + 1000 * 60 * 60;
      let token = `{
        endTime:${time},
        userId:${result[0].userId}
      }`
      let userInfo = {
        id: result[0].userId,
        name: result[0].userName, 
        sex: result[0].userSex, 
        pic: result[0].userPic, 
        level: result[0].userLevel
      }
      let data = {
        token: encrypt(token, 'sb'),
        userInfo: userInfo,
      };
      response.result = data;
      res.json(response);
      return;
    }
  })
}
const register = (req, res) => {
  let params = JSON.parse(Object.keys(req.body)[0]);
  console.log(params.registPwd, params.registPwds, params.registPwd === params.registPwds);
  if (params.registName == '' || params.registName == null) {
    response.code = 1;
    response.message = '请输入用户名！';
    res.json(response);
    console.log(response)
    return;
  }
  if (params.registPwd == '' || params.registPwd == null) {
    response.code = 2;
    response.message = '请输入密码！';
    res.json(response);
    console.log(response)
    return;
  }
  if (params.registPwd !== params.registPwds) {
    response.code = 3;
    response.message = '两次密码不一致！';
    res.json(response);
    console.log(response)
    return;
  }
  let md5 = crypto.createHash('md5');
  let md5pwd = md5.update(params.registPwd).digest("hex"); // 密码加密
  let sql = $sql.user.register; // 注册sql语句
  conn(sql, [params.registName, md5pwd], (err, result) => {
    console.log(response)
    if (err) {

    }
    if (result == '' || result == null) {
      response.code = 4;
      response.message = '注册失败!';
      res.json(response);
      return;
    } else {
      response.code = 0;
      response.message = '注册成功！';
      res.json(response);
      return;
    }
  })
}
const getUserInfo = (req, res) => {
  let params = JSON.parse(Object.keys(req.body)[0]);
  let sql = $sql.user.getUserInfo;
  conn(sql, [params.registName], (err, result) => {
    console.log(response)
    if (err) {
    }
    if (result == '' || result == null) {
      response.code = 1;
      response.message = '用户不存在！';
      res.json(response);
      return;
    } else {
      response.code = 2;
      response.message = '用户已存在！';
      response.result = result;
      res.json(response);
      return;
    }
  })
}
const changeUserInfo = () => { }
//加密
function encrypt(str, secret) {
  var cipher = crypto.createCipher('aes192', secret);
  var enc = cipher.update(str, 'utf8', 'hex');
  enc += cipher.final('hex');
  return enc;
}
//解密
function decrypt(str, secret) {
  var decipher = crypto.createDecipher('aes192', secret);
  var dec = decipher.update(str, 'hex', 'utf8');
  dec += decipher.final('utf8');
  return dec;
}
module.exports = {
  userLogin,
  register,
  getUserInfo,
  changeUserInfo
}
