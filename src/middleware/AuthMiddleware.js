const jwt = require('jsonwebtoken')

module.exports=(req,res,next)=>{
    let token = req.headers['token'];
    jwt.verify(token,'123-xyz',function (err,decodedData){
        if(err){
            res.status(401).json({status:"Unauthorized"})
        }
        else {
            req.headers.email=decodedData['data'];
            next();
        }
    })
}