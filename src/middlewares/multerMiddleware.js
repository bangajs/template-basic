const upload = require("../config/multerConfig")

async function addPathToBody(req, res, next) {
     if (req.files)
          req.body["imgUrls"] = req.files.map(file => file.path)
     
     if (req.file) 
          req.body["imgUrl"] = req.file.path

     next();
}

module.exports = (field) => {
     return [upload.single(field), addPathToBody]
}
