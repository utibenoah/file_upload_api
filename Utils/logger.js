const winston=require('winston')

//log format

const format=winston.format.combine(
    winston.format.timestamp({
      format:'YYY-MM-DD HH:mm:ss'  
    }),
    winston.format.json()
)


// Create logger
exports.serverLogger=winston.createLogger({
    level:"info",
    format:format,
    transports:[
        new winston.transports.Console(),
        new winston.transports.File({filename:'logs/server.log'})
    ]

})

// app logg
exports.appLogger=winston.createLogger({
    level:"info",
    format:winston.format.json(),
    transports:[
        new winston.transports.Console(),
        new winston.transports.File({filename:'logs/app.log'})
    ]

})
