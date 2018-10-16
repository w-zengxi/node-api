const express = require('express');
const router = express.Router();

// 方法
const Address = require('../client/address');
const {getSwiper, getGuess, getCategory, getInfo} = require('../client/client')
const {userLogin} = require('../client/user');
const {addCart,getCart,removeCart} = require('../client/cart')

// User
router.post('/user/login', userLogin);

// Client
router.get('/get/swiper', getSwiper)
router.get('/get/guess', getGuess)
router.get('/get/category', getCategory)
router.get('/get/info', getInfo)

router.post('/add/to/cart', addCart)
router.get('/cart/get', getCart)
router.get('/cart/remove', removeCart)
// Address
router.get('/address/get', Address.get)
router.post('/address/add', Address.add)
router.post('/address/update', Address.update)
router.get('/address/remove', Address.delete)
module.exports = router;
