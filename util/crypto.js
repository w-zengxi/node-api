// const crypto = require('crypto');// 加密模块
// const cipher = ( key, buf ,cb) => {
//     var encrypted = "";
//     var cip = crypto.createCipher("sha256", key);
//     encrypted += cip.update('10000');
//     encrypted += cip.final('hex');
//     cb(encrypted);
// }
// module.exports = cipher;
//  let md5 = crypto.createHash('md5'); 
//   let md5pwd = md5.update(params.registPwd).digest("hex"); // 密码加密