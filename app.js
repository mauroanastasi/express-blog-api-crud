// importiamo express
const express = require(`express`);

// inizializzo express invocandolo come funzione e salvando il risultato in una variabile
const app = express();

// definisco la porta
const port = 3000;

// definisco la prima rotta
app.get(`/`, (req,res) => {
    res.send(`hello world`)
});

// avvio il server mettendolo in ascolto della porta definita
app.listen(port,() => {
    console.log(`Example app listening on port ${port}`)
});

// importo file con rotte della cartella router
const postsRouter = require(`./routers/rottePosts.js`);

// inserisco istruzione per utilizzare il file esportato per le rotte
app.use(`/posts`, postsRouter);

// definizione asset statici
app.use(express.static(`puclic`));