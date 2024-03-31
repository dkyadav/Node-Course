export const check = async(req,res) =>{
    //console.log(req.body);
    res.send('ok, controller found: get');
}

export const checkPost = async(req,res) =>{
    console.log(req.body);
    res.send('ok, controller found: post');
}

export const checkPut = async(req,res) =>{
    console.log(req.body);
    res.send('ok, controller found: put');
}

export const checkDelete = async(req,res) =>{
    console.log(req.body);
    res.send('ok, controller found: delete');
}