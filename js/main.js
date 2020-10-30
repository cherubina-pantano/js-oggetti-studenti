/*
Descrizione
1. - Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
   Stampare attraverso il for..in tutte le proprietà.
2. - Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
3. - Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto
  studente all'array creato al punto 2 inserendo nell’ordine: nome, cognome e età.
*/

// 1. creazione e stampa di un oggetto
var studente = {
  nome : 'Ciccio',
  cognome: 'Pasticcio',
  età: 21,
};
console.log(studente);

for (var key in studente) {
  console.log(key, studente[key]);
}

// 2. Array di oggetti studenti
var listaStudenti = [
   {
    nome: 'Marco',
    cognome: 'Polo',
    età: '26',
  },
   {
    nome: 'Mario',
    cognome: 'Rossi',
    età: '25',
  },
   {
    nome: 'Chiara',
    cognome: 'Biachi',
    età: '24',
  },
];
console.log(listaStudenti);

// Ciclo e stampo nome e cognome degli studenti
for (var key in listaStudenti) {
  console.log(listaStudenti[key].nome, listaStudenti[key].cognome);
}
