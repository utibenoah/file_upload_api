//import app
let app=require('./app')
const logger=require('./Utils/logger').serverLogger
let cloudinary=require('./Cloudinary')
let dotenv=require('dotenv')//import enviroment variables




dotenv.config({
    path:'./config.env',
    quiet: true
})

//connect to db

//connect to file cloud db
cloudinary.api.ping()
    .then((response)=>{
        logger.info({
            message:"Cloudinary connected",
            status:`Status: ${response.status}`
        })

    })
    .catch((error)=>{
        logger.info({
            message:"Cloudinary connected",
            status:`fail`,
            error:error
        })
        
    })
 
    

//create server
let port = process.env.PORT || 3000
const server=app.listen(port,(()=>{
    logger.info({
            message:"server running on port "+port
        })

    
}))