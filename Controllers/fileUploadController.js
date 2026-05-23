const upload = require("../Middlewares/multer");
const asyncErrorHandler = require("../Utils/asyncErrorHandlerUltil");
const customError = require("../Utils/customErrorUltil");



exports.uploadFile = async (req, res, next) => {
    let uploadSingle=upload.single("image")
   uploadSingle(req, res, async function (err) {
    try {
        // multer error
        if (err) {
          return res.status(400).json({
            success: false,
            message: err.message,
          });
      }

      // no file
      if (!req.file) {
        return res.status(400).json({
          success: false,
          message: "Please upload an image",
        });
      }

      

      // response
      
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  });
   
   



  

};