// importo express
const express = require(`express`);

// importo la classe router
const router = express.Router();

// importiamo il file controller
const postsController = require(`../controllers/postsController.js`)

// index    
router.get('/', postsController.index)
    
// show
router.get('/:id', postsController.show)
    
// store
router.post('/', postsController.store)

// update
router.put('/:id', postsController.update)
    
// modify
router.patch('/:id', postsController.modify)
    
// destroy
router.delete('/:id', postsController.destroy)

// esporto il router
module.exports = router;

// importo file array oggetti
// const posts = require(`../data/posts.js`);

