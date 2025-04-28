function errorPrime (err,req,res,nextl){
    res.status(500);
    res.json({
        error:`errore non trovato`
    });
}
module.exports = errorPrime;