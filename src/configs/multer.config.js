const multer = require('multer')
const shortid = require('shortid');
const CustomError = require('./../utils/custom-error');

const storage = multer.diskStorage({
     destination: (req, file, cb) => {
          cb(null, 'uploads')
     },
     filename: (req, file, cb) => {
          const fileExt = file.originalname.split(".").pop();
          let filename = `${shortid.generate()}_${new Date().getTime()}.${fileExt}`;
          cb(null, filename)
     }
})

const limits = {
     fileSize: 5 * 1024 * 1024,
}

const fileFilter = (req, file, cb) => {
     if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png')
          cb(null, true)
     else
          cb(new CustomError("Invalid file type", 400), false)
}

const upload = multer({ storage, limits, fileFilter });

module.exports = upload