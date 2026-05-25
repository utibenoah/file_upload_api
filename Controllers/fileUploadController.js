const upload = require("../Middlewares/multer");
const asyncErrorHandler = require("../Utils/asyncErrorHandlerUltil");
const customError = require("../Utils/customErrorUltil");
const logger=require('../Utils/logger').appLogger


exports.uploadFile = async (req, res, next) => {

  logger.info({message:``})
    let uploadSingle=upload.single("image")
   uploadSingle(req, res, async function (err) {
    try {
        // multer error
        if (err) {
          logger.info({
            statusCode:400,
            message:`${err.message}`,
            status:`false`,
          })
          
          return res.status(400).json({success: false,message: err.message,
          });
      }

      // no file
      if (!req.file) {

        logger.info({
            statusCode:400,
            message:`Please upload an image`,
            status:`false`,
          })
          
        return res.status(400).json({
          success: false,
          message: "Please upload an image",
        });
      }

      

      // response
      
    } catch (err) {

      logger.error({
            statusCode:500,
            message:`${err.message}`,
            status:`false`,
          })
      
      res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  });
   
   



  

};