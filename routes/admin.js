const express = require('express');
const router = express.Router();

// 方法
const User = require('../sqlMap/user');
const Goods = require('../sqlMap/goods');
const Category = require('../sqlMap/category')
const Address = require('../sqlMap/address');

const Upload = require('../sqlMap/update')
// User
router.post('/login', User.login);
router.post('/register', User.register);
router.post('/getUserInfo', User.getUserInfo)

// Goods
// router.post('/getGoodsInfo', Goods.getInfo)
router.get('/goods/get', Goods.goodsGet)
router.post('/goods/type', Goods.goodsTypeTitle)
router.post('/goods/add', Goods.goodsAdd)
router.get('/goods/delete', Goods.goodsDelete)

router.get('/category/get', Category.get)

// Address
router.get('/address/getList', Address.getList)
router.post('/address/add', Address.add)
router.post('/address/update', Address.update)
router.get('/address/delete', Address.delete)


router.post('/images/upload', Upload.goodsImages)
module.exports = router;
