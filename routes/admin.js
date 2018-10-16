const express = require('express');
const router = express.Router();
const multer = require('multer');
const formidable = require('formidable');

// 方法
const User = require('../admin/user');
const Goods = require('../admin/goods');
const Category = require('../admin/category')
const Ads = require('../admin/ads')
const Upload = require('../admin/upload')
const Login = require('../admin/login')

// User
router.get('/user/get', User.get)
router.get('/user/search', User.search)
router.post('/user/switch', User.switch)

// Goods
router.get('/goods/get', Goods.get)
router.post('/goods/add', Goods.add)
router.get('/goods/remove', Goods.remove)
router.get('/goods/search', Goods.search)
// 图片上传
router.post('/upload', Upload.array('files', 4), function(req, res, next) {
    var files = req.files;
    let filesPath = files.map(function (item, index, array) {
      return item.path
    })
    res.json(
        {
            code: '0',
            result: filesPath
        }
    )
})
// Category
router.get('/category/get', Category.get)
router.post('/category/add', Category.add)
router.post('/category/update', Category.update)
// Ads
router.get('/ads/get', Ads.get)
router.post('/ads/add', Ads.add)
// Login
router.post('/login/login', Login.login)
module.exports = router;
