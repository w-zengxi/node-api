const sqlMap = {
	user: {
		login: `select * from user where loginName = ? and loginPwd = ?`,
		register: `insert into user (loginName, loginPwd) value (?, ?)`,
		getUserInfo: `select * from user where loginName = ?`
	},
	goods: {
		get: `select count(goodsId) from goods ; select * from goods order by goodsId desc limit ? ,10`,
		add: `insert into goods (goodsSn, goodsName, goodsImg, goodsPrice, goodsStock, isSale, isHot, isNew, isRecom, isBest, goodsCategory, goodsDesc, createTime, saleTime) value (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
		remove: `delete from goods where goodsId = ?`,
		search: `select * from goods where ? like ?`
	},
	category: {
		get: `select * from goods_type where dataFlag = 1`,
		add: `insert into goods_type (typeName, parentId, isShow, typeSort, createTime) value (?, ?, ?, ?, ?)`,
		update: `update goods_type set typeName = ?, parentId = ?, typeSort = ?, isShow = ? where typeId = ?`,
		remove: `delete from goods_type where typeId = ?` 
	},
	address: {
		get: `select * from user_address where userId = ?`,
		add: `insert into user_address (userId, userName, userPhone, province, city, area, user_address, createTime) value (?, ?, ?, ?, ?, ?, ?, ?)`,
		update: `update user_address set userName = ?, userPhone = ?, province = ?, city = ?, area = ?, user_address = ?, createTime = ? where addressId = ? and userId = ?`,
		delete: `delete from user_address where addressId = ? and userId = ?`
	},
	get: {
		swiper: `select * from ads where bannerType = 0 and isShow = 1`,
		guess: `select * from goods order by goodsId desc limit ? ,10`,
		categoty: `select * from goods_type where isShow = 1`,
		info: `select * from goods where goodsId = ? and isSale = 1`
	},
	cart: {
		get: `select * from carts inner join goods on (carts.goodsId = goods.goodsId) where carts.userId=?`,
		add: `insert into carts (userId, goodsId, goodsSpec, goodsNum) value (?, ?, ?, ?)`,
		remove: `delete from carts where cartId = ?`
	}
}
module.exports = sqlMap;
