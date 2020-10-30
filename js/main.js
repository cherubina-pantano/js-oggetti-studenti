/*
Descrizione
- Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
   Stampare attraverso il for..in tutte le proprietà.
- Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
- Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto
  studente all'array creato al punto 2 inserendo nell’ordine: nome, cognome e età.
*/

// creazione e stampa di un oggetto
var studente = {
  nome : 'Ciccio',
  cognome: 'Pasticcio',
  età: 21,
};
console.log(studente);

for (var key in studente) {
  console.log(key, studente[key]);
}
