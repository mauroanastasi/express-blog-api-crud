// recuperiamo i posts
const posts = require(`../data/posts.js`)

// LOGICA ROTTE
// definizione funzione index

function index (req,res){
    
    const tag = req.query.tag;
    let filteredTag = posts;
    if(tag){
        filteredTag = posts.filter((post) => {
            return post.tags.includes(tag)
        })
    }   
    res.json(filteredTag);
}

function show (req,res){
    
    const id = parseInt(req.params.id)
    console.log(id)                   
    const post = posts.find (post => post.id === id)     
    res.json(post);        ;                                
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