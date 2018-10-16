const $sql = require('./sql'); // sql语句
const conn = require('../config/conn'); // 连接数据库
var crypto = require('crypto');

let response = {
  code: -1,
  message: '',
  result: null
}
const Login = () => {};
Login.login = (req, res) => {
  let params = JSON.parse(Object.keys(req.body)[0]);
  let sql = $sql.login.login; // 登录sql语句
  console.log(params)
  conn(sql, [params.username, params.password], (err, result) => {
    if (err) {

    }
    if(result == '' || result == null) {
      response.code = 3;
      response.message = '用户名或密码错误！';
      res.json(response);
      return;
    }else{
      response.code = 0;
      response.message = '登陆成功！';
      let time = new Date().getTime() + 1000*60*60;
      let token = `{endTime:${time},staffsId:${result[0].staffsId}}`
      let data = {token: encrypt(token, 'sb') };
      response.result = data;
      res.json(response);
      return;
    }
  })
}
Login.logout = (req, res) => {

}
//加密
function encrypt(str,secret){
	var cipher = crypto.createCipher('aes192',secret);
	var enc = cipher.update(str,'utf8','hex');
	enc += cipher.final('hex');
	return enc;
}
//解密
function decrypt(str,secret){
	var decipher = crypto.createDecipher('aes192',secret);
	var dec = decipher.update(str,'hex','utf8');
	dec += decipher.final('utf8');
	return dec;
}
module.exports = Login;


