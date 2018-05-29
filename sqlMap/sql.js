const sqlMap = {
	user: {
		login: `select * from user where loginName = ? and loginPwd = ?`,
		register: `insert into user (loginName, loginPwd) value (?, ?)`,
		getUserInfo: `select * from user where loginName = ?`
	},
	goods: {
		get: `select count(goodsId) from goods ; select * from goods order by goodsId desc limit ? ,10`,
		// GoodsInfo: `select * from goods where goodsId = ?`,
		// goodsType: `select * from goods_type`,
		add: `insert into goods (goodsSn, goodsName, goodsImg, goodsPrice, goodsStock, isSale, isHot, isNew, isRecom, isBest, goodsCategory, goodsDesc, createTime, saleTime) value (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
		remove: `delete from goods where goodsId = ?`
	},
	category: {
		get: `select count(typeId) from goods_type ; select * from goods_type order by typeId desc limit ? ,30`,
		add: `insert into goods_type (parentId, typeName, isShow, typeSort, createTime) value (?, ?, ?, ?, ?)`,
		update: `update goods_type set parentId = ?, typeName = ?, isShow = ?, typeSort = ? where typeId = ?`,
		remove: `delete from goods_type where typeId = ?` 
	},
	address: {
		get: `select * from user_address where userId = ?`,
		add: `insert into user_address (userId, userName, userPhone, province, city, area, user_address, createTime) value (?, ?, ?, ?, ?, ?, ?, ?)`,
		update: `update user_address set userName = ?, userPhone = ?, province = ?, city = ?, area = ?, user_address = ?, createTime = ? where addressId = ? and userId = ?`,
		delete: `delete from user_address where addressId = ? and userId = ?`
	}
}
module.exports = sqlMap;
