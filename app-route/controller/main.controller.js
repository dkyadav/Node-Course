const healthCheck = (req,res,next) =>{
    res.send({'health':'ok from controller post'});
};

export const addCurTime = (req, res, next) => {
    const t= new Date();
    req.currdt = `At: ${t.toLocaleDateString()} ${t.toLocaleTimeString()}`;
    next();
};

export const finalCheck = (req,res,next) =>{
    console.log(req.currdt);
    res.send({'health':'ok from controller put','req.currdt':req.currdt});
};

export default healthCheck;