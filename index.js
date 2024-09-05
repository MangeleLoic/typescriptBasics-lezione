console.log('Hello World');
var x = 10;
// TypeScript (TS) è JavaScript (JS) con l'aggiunta della tipizzazione statica.
// Tipi di dati primitivi in TS:
// string, number, boolean, undefined, null
// 'any' (questo tipo è nuovo in TS e disabilita il controllo dei tipi)
// Le variabili in TS possono avere un tipo esplicitamente dichiarato.
var student = 'Mario';
student = 'Stefano'; // Nessun errore, perché il tipo di 'student' è stringa.
// student = 100;  // QUESTO dà errore, poiché 'student' è dichiarato come stringa e non può essere assegnato un numero.
var myNum = 100;
myNum = 44; // Nessun errore, 'myNum' è di tipo number.
// myNum = 'Gianni';  // QUESTO dà errore, perché 'myNum' è di tipo number e non può essere assegnata una stringa.
var qualsiasi = 'Stefano';
qualsiasi = 100;
qualsiasi = true;
// Il tipo 'any' permette alla variabile di cambiare tipo liberamente. Tuttavia, l'uso di 'any' è sconsigliato in TS,
// perché disabilita il controllo dei tipi, rendendo il codice meno sicuro.
console.log(student.slice(0, 2).toUpperCase().split('')[1].toLowerCase());
// Nota: tutte le chiamate di metodi devono essere correttamente invocate con parentesi tonde (). 
// TS fornisce un controllo sui tipi a ogni passaggio del codice, suggerendo metodi e proprietà validi per il tipo attuale.
var arr = ['uno', 'due', 'tre'];
var rMaiuscolo = arr.slice(1, 3)[1].split('')[1].toUpperCase();
console.log(rMaiuscolo); // 'U' (il secondo carattere di 'tre' in maiuscolo).
// TS capisce automaticamente che la funzione giveMeANumber restituisce sempre un numero => number.
var giveMeANumber = function () {
    return Math.floor(Math.random() * 11);
};
console.log(giveMeANumber()); // Numero casuale tra 0 e 10.
/*
const addition = (num1: number, num2: number): number => {
    return num1 + num2;
};
console.log(addition(5, 6)); // Funziona correttamente con numeri.
*/
var additionInTS = function (num1, num2) {
    return num1 + num2;
};
// console.log(additionInTS('5', '6')); // Non compila! TS richiede numeri, non stringhe.
console.log(additionInTS(7, 8)); // 15, funzione chiamata correttamente con numeri.
var addition = function (num1, num2) {
    return num2 ? num1 + num2 : num1; // Se 'num2' non viene passato, ritorna solo 'num1'.
};
console.log(addition(3, 4)); // 7
console.log(addition(4)); // 4 (poiché 'num2' non è stato passato).
// TYPE UNION
var test = 50;
test = 'Stefano';
test = 100; // Può essere stringa o numero.
var test2 = 'ciao';
test2 = undefined; // Può essere stringa, array di stringhe o undefined.
var test3 = undefined;
test3 = ['ciao', 'array', 'di', 'stringhe']; // Un esempio di tipo alias.
// STRUTTURE DATI COMPLESSE
// ARRAY
var arrayOfNames = ['Antonio', 'Alessio', 'Sara'];
var arrayOfNumbers = [2, 6, 78, 34];
var mixedArray = [true, 'ciao', 100]; // Array misto, ma usato raramente.
// Due modi per dichiarare un array di stringhe.
var arr1 = ['uno', 'ciao'];
var arr2 = ['due', 'arrivederci']; // Notazione alternativa con type arguments.
var arr3 = [undefined, 'ciao', ['1', '2'], 'aldo', ['aldo']]; // Array con unione di tipi.
arr1.push('100'); // Aggiunge un nuovo elemento all'array.
// Filtra gli elementi di 'arrayOfNames' per ottenere quelli che iniziano con 'a' (maiuscola o minuscola).
var newArrayOfNames = arrayOfNames.filter(function (name) {
    return name.charAt(0).toLowerCase() === 'a';
});
console.log(newArrayOfNames); // ['Antonio', 'Alessio']
newArrayOfNames.forEach(function (name) { return console.log(name.toUpperCase()); }); // Stampa in maiuscolo i nomi filtrati.
// TUPLE
// Una tupla è un array con un numero fisso di elementi e tipi specifici per ciascun elemento.
var tuple1 = ['ciao', 'hello', 34, true, ''];
console.log(tuple1); // Stampa la tupla.
// OGGETTI
var teacher = {
    firstName: 'Stefano',
    lastName: 'Casasola',
    modules: ['U2', 'U3'],
};
teacher.firstName = 'Dario';
teacher.lastName = 'Del Giudice';
teacher.modules = ['U1']; // Aggiornamento delle proprietà dell'oggetto.
// teacher.firstName = 100;  // QUESTO dà errore, perché 'firstName' è una stringa.
console.log(teacher.modules.length); // 1, poiché abbiamo sostituito 'modules' con ['U1'].
var teacher1 = {
    firstName: 'Dario',
    lastName: 'Del Giudice',
    modules: ['U1'],
};
var Loic = {
    height: 180,
    eyeColor: 'black',
    feetNumber: 43,
    languagesKnown: ['HTML', 'CSS', 'Bootstrap', 'JS'],
};
console.log(Loic); // Stampa l'oggetto 'Loic', un Developer con proprietà ereditate da HumanBeing.
var address1 = {
    cityName: 'Roma',
    street: 'Via del Campidoglio',
    civicNumber: 10,
    zipCode: '00142',
    area: 'Lazio', // L'area è una stringa in questo caso.
};
var address2 = {
    cityName: 'Westerville',
    street: '1st St',
    civicNumber: 0,
    zipCode: '68814',
    area: {
        state: 'NE',
        country: 'USA', // L'area è un oggetto con stato e paese.
    },
};
var address3 = {
    cityName: 'Westerville',
    street: '1st St',
    civicNumber: 0,
    zipCode: '68814',
    area: {
        state: 'NE',
        neighborhood: 'Old Town', // L'area è un oggetto con stato e quartiere.
    },
};
