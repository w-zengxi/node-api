const mysql = require('mysql');
const db = require('./db');

const pool = mysql.createPool(db.mysql);

exports.pool = pool;