function errorPrime (req,res,next){
    res.status(500);
    res.json({
        error:`errore non trovato`
    });
}
module.exports = errorPrime;