const express = require('express')
const router=express.Router()

const fileUploadController=require('../Controllers/fileUploadController')



router.route('/uploadfile')
    .post(fileUploadController.file)




module.exports = router;
