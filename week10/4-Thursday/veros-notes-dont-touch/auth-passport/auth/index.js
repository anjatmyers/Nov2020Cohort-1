
let authReq = (req, res, next)=>{

    //isAuthenticated() from passport , true, false
    
    let auth = req.isAuthenticated();

    if(req.isAuthenticated()){
        next()
    }
    else{
        res.redirect('/error');
    }

}

module.exports = authReq;