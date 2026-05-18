//import app
let app=require('./app')

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
        console.log("Cloudinary connected")
        console.log('Status:',response.status)
    })
    .catch((error)=>{
        console.log("Cloudinary connection fail")
        console.log(error.error.message)
    })
 
    

//create server
let port = process.env.PORT || 3000
const server=app.listen(port,(()=>{
    console.log('server running on port '+port)
}))