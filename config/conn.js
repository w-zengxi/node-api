const mysql = require('../config/mysql');

conn = (sql, params, callback) => {
    mysql.pool.getConnection((err, connection) => {
        if (err) {
            console.log('数据库连接失败！');
            callback(true);
            return;
        }
        console.log('数据库连接成功！');
        connection.query(sql, params, (err, result) => {
            if (err) {
                callback(true);
                return;
            }
            callback(false, result);
        })
        connection.release();// 释放连接池
    })
}
module.exports = conn;
