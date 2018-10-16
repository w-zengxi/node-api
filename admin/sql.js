const sqlMap = {
	login: {
		login: `select * from staffs where loginName = ? and loginPwd = ?`
	},
	user: {
		get: `select * from user`,
		update: `update user set userStatus = ? where userId = ?`,
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
	ads: {
		get: `select * from ads`,
		add: `insert into ads (bannerType, imagesPath, linkPath, isShow, sortNum, createTime) value (?, ?, ?, ?, ?, ?)`,
	}
}
module.exports = sqlMap;
