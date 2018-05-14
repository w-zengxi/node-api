const sqlMap = {
	user: {
		login: `select * from user where loginName = ? and loginPwd = ?`,
		register: `insert into user (loginName, loginPwd) value (?, ?)`,
		getUserInfo: `select * from user where loginName = ?`
	},
	goods: {
		getGoodsInfo: `select * from goods where goodsId = ?`,
		getSootList: ``
	},
	address: {
		get: `select * from user_address where userId = ?`,
		add: `insert into user_address (userId, userName, userPhone, province, city, area, user_address, createTime) value (?, ?, ?, ?, ?, ?, ?, ?)`,
		update: `update user_address set userName = ?, userPhone = ?, province = ?, city = ?, area = ?, user_address = ?, createTime = ? where addressId = ? and userId = ?`,
		delete: `delete from user_address where addressId = ? and userId = ?`
	}
}
module.exports = sqlMap;
