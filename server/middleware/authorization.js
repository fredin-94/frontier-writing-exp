const redisClient = require('../server').redisClient;

//block user from reaching certain endpoints unless they are authorized
const requireAuth = (req,res,next)=>{

    const auth = req.headers.authorization; //big a?

    if(!auth){ //if there is no authtoken in the request
        return res.status(401).json('Unauthorized');
    }

    return redisClient.get(auth, (err, reply)=>{
        if(err || !reply){
            return res.status(401).json('Unauthorized');
        }

        return next();
    });
}

module.exports = {
    requireAuth: requireAuth
}