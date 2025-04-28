function errorPrime (err,req,res,nextl){
    res.status(500);
    res.json({
        error:err.message
    })
}
module.exports = errorPrime;