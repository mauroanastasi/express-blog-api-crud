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
    if(post === undefined){
        
        res.status(404);
        
        res.json({
            error :`not found`, 
            message :`post non trovato` 
        })
    }
    else{
        res.json(post);        
    }                                
}

function store (req,res){
    console.log(req.body);
} 

function update (req,res){
    res.send('Modifica integrale dei posts ' + req.params.id);
}

function modify (req,res){
    res.send('Modifica parziale dei posts ' + req.params.id);
}

function destroy (req,res){
    
    const id = parseInt(req.params.id);
    
    const post = posts.find(post => post.id === id);
    
    console.log(posts.indexOf(post))     
    
    
    if(!post){
        
        res.status(404);
        
        res.json({
            error :`not found`, 
            message :`post non trovato` 
        })
        return
    }
    posts.splice(posts.indexOf(post),1);
    res.json(posts)
    // console.log(posts);

    // res.sendstatus(204)
}
    

module.exports = { index, show, store, update, modify, destroy };