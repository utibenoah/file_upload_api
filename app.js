const express=require('express')
const fileUploadRoute =require('./Routes/fileUploadRoutes')



const app=express()

//Route
app.use('/api/v1/file',fileUploadRoute),
app.all("*catchall",(req,res)=>{
    res.status(404).json({
        sucess:false,
        message:'Url not found'
    })
}),




module.exports=app
