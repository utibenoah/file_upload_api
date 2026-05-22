const express=require('express')
const bodyParser =require('body-parser')
const morgan= require('morgan')
const customError=require('./Utils/customError')
const fileUploadRoute =require('./Routes/fileUploadRoutes')
const globalErrorMiddleware = require('./Middlewares/globalErrorMiddleware')



const app=express()

const requestTime=(req,res,next)=>{
    req.time= new Date().toISOString()
    next()
}
// middleware
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(requestTime)




//Route
app.use('/api/v1/file',fileUploadRoute),
app.all("*catchall",(req,res,next)=>{

    let error= new customError(`Url ${req.originalUrl} not found`, 404)
    

    next(error)

    
}),


app.use(globalErrorMiddleware.globalError)

module.exports=app
