const prodErrors=(res,error)=>{

    if (error.isOperational) {
        res.status(error.statusCode).json({

            status:error.statusCode,
            message:error.message,

        })
    }else{
        res.status(500).json({

            status:'Fail',
            message:'Something is wrong! try again',

        })
    }
    
}

const devErrors=(res,error)=>{

    res.status(error.statusCode).json({

            status:error.statusCode,
            message:error.message,
            stack:error.stack,
            error:error

        })
    
}







module.exports=(error,req,res,next)=>{
    error.statusCode=error.statusCode || 500
    error.status=error.status || 'error'

    if (process.env.NODE_ENV==='development') {
        devErrors(res, error)
    }
    else if(process.env.NODE_ENV==='production'){
        prodErrors(res,error)
    }
}