const asyncErrorHandlerUltil = require("../Utils/asyncErrorHandlerUltil");


exports.file= asyncErrorHandlerUltil(async(req,res)=>{
   console.log('hello file')
})