async function imgUrlsToBody(req, res, next) {
     if (req.files) {
          req.body["imgUrls"] = req.files.map(file => {
               return file.path
          })
     }

     next();
}

module.exports = imgUrlsToBody;
