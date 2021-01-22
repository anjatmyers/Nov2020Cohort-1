
let authReq = (req, res, next)=>{

    //isAuthenticated() from passport , true, false

    if(req.isAuthenticated()){
        next()
    }
    else{
        res.redirect('/error');
    }

}

module.exports = authReq;