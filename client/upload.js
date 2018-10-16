const fs = require('fs');
const multer  = require('multer');
let createFolder = (folder) => {
	try {
		fs.accessSync(folder);
	} catch (e) {
		fs.mkdirSync(folder);
	}
}
createFolder('./public/images')
let storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'public/images');
	},
	filename: function (req, file, cb) {
		cb(null, Date.now() + "-" + file.originalname);
	}
})
let upload = multer({storage: storage})
module.exports = upload;