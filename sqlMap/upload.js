const async = require('async')
const formidable = require('formidable')
const fs = require('fs')
const dir = 'D:\\desktop\\klf\\serverAPI\\public\\images\\'

const update = () => {};

module.exports = update;

update.goodsImages = () => {
	console.log(1111111)
	let form = new formidable.IncomingForm();
	form.encoding = 'utf-8';
	form.uploadDir = 'public' + dir;
}