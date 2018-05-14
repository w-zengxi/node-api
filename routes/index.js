const express = require('express');
const router = express.Router();

// 方法
const User = require('../sqlMap/user');
// const Goods = require('../sqlMap/goods');
const Address = require('../sqlMap/address');
// User
router.post('/login', User.login);
router.post('/register', User.register);
router.post('/getUserInfo', User.getUserInfo)

// Goods
// router.post('/getGoodsInfo', Goods.getInfo)
// router.post('/getSortList')

// Address
router.get('/address/getList', Address.getList)
router.post('/address/add', Address.add)
router.post('/address/update', Address.update)
router.get('/address/delete', Address.delete)
module.exports = router;
