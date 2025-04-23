// recuperiamo i posts
const posts = require(`../data/posts.js`)

// LOGICA ROTTE
// definizione funzione index

function index (req,res){
    res.json(posts);
}

function show (req,res){
    res.send('Dettagli dei posts ' + req.params.id);
}

function store (req,res){
    res.send('Creazione nuovi posts');
}

function update (req,res){
    res.send('Modifica integrale dei posts ' + req.params.id);
}

function modify (req,res){
    res.send('Modifica parziale dei posts ' + req.params.id);
}

function destroy (req,res){
    res.send('Eliminazione dei posts ma sei sicuro? ' + req.params.id);
}

module.exports = { index, show, store, update, modify, destroy };