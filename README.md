# express-blog-api-crud
Ciao ragazzi, esercizio di oggi: Express Blog - API CRUD (parte 1)
repo: express-blog-api-crud
Esercizio
Milestone 1
Come prima cosa, creiamo un controller per i nostri post, in una cartella controllers.
All’interno, prepariamo tutte le funzioni necessarie e copiamo in ciascuna la logica delle funzioni che attualmente si trovano nel router (al momento restituiscono solo dei messaggi).
Poi torniamo sul file delle rotte. Qui importiamo le funzioni dichiarate nel controller e le associamo alle varie rotte, come visto in classe.
Testiamo su postman se chiamando gli endpoint riceviamo effettivamente le stesse risposte che avevamo prima.
Se tutto funziona, passiamo alla prossima milestone
Milestone 2
Per iniziare, creiamo una cartella data in cui creare un file che contenga ed esporti l’array di posts che trovate in allegato. Importiamo questo file in cima al controller.
Ora passiamo ad implementare le logiche delle nostre CRUD:
Index dovrà restituire la lista dei post in formato JSON
Show dovrà restituire un singolo post in formato JSON
Destroy dovrà eliminare un singolo post dalla lista, stampare nel terminale (console.log) la lista aggiornata, e rispondere con uno stato 204 e nessun contenuto.
Numero di push minimo: 10
Bonus
Implementare un filtro di ricerca nella index che mostri solo i post che hanno un determinato Tag
In Show e Destroy, controllare se il parametro si riferisce ad un post esistente, in caso contrario, rispondere con uno stato 404 e un messaggio d’errore, sempre in formato JSON.
Buon Lavoro e buon divertimento
----------------------------------------------------------------
Ho fatto un po di confusione con la mil2 e mil3 della seconda parte dell'esercizio, completando tutta la funzione store per poi tornare tornare indietro committando vari passaggi richiesti dalla traccia dell'esercizio. Per quanto riguarda la mil 3 invece ho semplicemente chiamato il suo commit come mil 2, nulla di grave.
Tutto l'esercizio è stato completato inclusi i vari bonus richiesti.