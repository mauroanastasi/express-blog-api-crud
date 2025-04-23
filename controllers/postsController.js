// recuperiamo i posts
const dataPosts = require(`../data/posts.js`)

// LOGICA ROTTE
// definizione funzione index

function index (res,req){
    res.json(posts);
}

function show (res,req){
    res.send('Dettagli dei posts ' + req.params.id);

}

function store (res,req){
    res.send('Creazione nuovi posts');

}

function update (res,req){
    res.send('Modifica integrale dei posts ' + req.params.id);

}

function modify (res,req){
    res.send('Modifica parziale dei posts ' + req.params.id);

}

function destroy (res,req){
    res.send('Eliminazione dei posts ma sei sicuro? ' + req.params.id);
}

module.exports = { index, show, store, update, modify, destroy };