const upload = require("./../configs/multer.config")

async function addPathToBody(req, res, next) {
     if (req.files)
          req.body["images"] = req.files.map(file => file.path)
     
     if (req.file) 
          req.body["image"] = req.file.path

     next();
}

module.exports = (field) => {
     return [upload.single(field), addPathToBody]
}
