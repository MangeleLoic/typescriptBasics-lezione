console.log('Hello World');
let x = 10;

// TypeScript (TS) è JavaScript (JS) con l'aggiunta della tipizzazione statica.
// Tipi di dati primitivi in TS:
// string, number, boolean, undefined, null
// 'any' (questo tipo è nuovo in TS e disabilita il controllo dei tipi)

// Le variabili in TS possono avere un tipo esplicitamente dichiarato.
let student: string = 'Mario';
student = 'Stefano'; // Nessun errore, perché il tipo di 'student' è stringa.
// student = 100;  // QUESTO dà errore, poiché 'student' è dichiarato come stringa e non può essere assegnato un numero.

let myNum = 100;
myNum = 44; // Nessun errore, 'myNum' è di tipo number.
// myNum = 'Gianni';  // QUESTO dà errore, perché 'myNum' è di tipo number e non può essere assegnata una stringa.

let qualsiasi: any = 'Stefano';
qualsiasi = 100;
qualsiasi = true;
// Il tipo 'any' permette alla variabile di cambiare tipo liberamente. Tuttavia, l'uso di 'any' è sconsigliato in TS,
// perché disabilita il controllo dei tipi, rendendo il codice meno sicuro.

console.log(student.slice(0, 2).toUpperCase().split('')[1].toLowerCase());
// Nota: tutte le chiamate di metodi devono essere correttamente invocate con parentesi tonde (). 

// TS fornisce un controllo sui tipi a ogni passaggio del codice, suggerendo metodi e proprietà validi per il tipo attuale.

const arr = ['uno', 'due', 'tre'];
const rMaiuscolo = arr.slice(1, 3)[1].split('')[1].toUpperCase();
console.log(rMaiuscolo); // 'U' (il secondo carattere di 'tre' in maiuscolo).

// TS capisce automaticamente che la funzione giveMeANumber restituisce sempre un numero => number.
const giveMeANumber = (): number => {
  return Math.floor(Math.random() * 11);
};
console.log(giveMeANumber()); // Numero casuale tra 0 e 10.

/*
const addition = (num1: number, num2: number): number => {
    return num1 + num2;
};
console.log(addition(5, 6)); // Funziona correttamente con numeri.
*/

const additionInTS = (num1: number, num2: number): number => {
  return num1 + num2;
};

// console.log(additionInTS('5', '6')); // Non compila! TS richiede numeri, non stringhe.
console.log(additionInTS(7, 8)); // 15, funzione chiamata correttamente con numeri.

const addition = (num1: number, num2?: number): number => {
  return num2 ? num1 + num2 : num1; // Se 'num2' non viene passato, ritorna solo 'num1'.
};

console.log(addition(3, 4)); // 7
console.log(addition(4)); // 4 (poiché 'num2' non è stato passato).

// TYPE UNION
let test: string | number = 50;
test = 'Stefano';
test = 100; // Può essere stringa o numero.

let test2: string | string[] | undefined = 'ciao';
test2 = undefined; // Può essere stringa, array di stringhe o undefined.

// TYPE ALIAS
type CustomType = string | string[] | undefined;

let test3: CustomType = undefined;
test3 = ['ciao', 'array', 'di', 'stringhe']; // Un esempio di tipo alias.

// STRUTTURE DATI COMPLESSE
// ARRAY
let arrayOfNames = ['Antonio', 'Alessio', 'Sara'];
let arrayOfNumbers = [2, 6, 78, 34];
let mixedArray = [true, 'ciao', 100]; // Array misto, ma usato raramente.

// Due modi per dichiarare un array di stringhe.
let arr1: string[] = ['uno', 'ciao'];
let arr2: Array<string> = ['due', 'arrivederci']; // Notazione alternativa con type arguments.

let arr3: CustomType[] = [undefined, 'ciao', ['1', '2'], 'aldo', ['aldo']]; // Array con unione di tipi.

arr1.push('100'); // Aggiunge un nuovo elemento all'array.
// Filtra gli elementi di 'arrayOfNames' per ottenere quelli che iniziano con 'a' (maiuscola o minuscola).
const newArrayOfNames = arrayOfNames.filter((name) => {
  return name.charAt(0).toLowerCase() === 'a';
});
console.log(newArrayOfNames); // ['Antonio', 'Alessio']

newArrayOfNames.forEach((name) => console.log(name.toUpperCase())); // Stampa in maiuscolo i nomi filtrati.

// TUPLE
// Una tupla è un array con un numero fisso di elementi e tipi specifici per ciascun elemento.
let tuple1: [string, string, number, boolean, string] = ['ciao', 'hello', 34, true, ''];
console.log(tuple1); // Stampa la tupla.

// OGGETTI
const teacher = {
  firstName: 'Stefano',
  lastName: 'Casasola',
  modules: ['U2', 'U3'],
};

teacher.firstName = 'Dario';
teacher.lastName = 'Del Giudice';
teacher.modules = ['U1']; // Aggiornamento delle proprietà dell'oggetto.

// teacher.firstName = 100;  // QUESTO dà errore, perché 'firstName' è una stringa.
console.log(teacher.modules.length); // 1, poiché abbiamo sostituito 'modules' con ['U1'].

// INTERFACES
// Un'interfaccia definisce la struttura di un oggetto, specificando tipi obbligatori e opzionali.
interface EpicodeTeacher {
  firstName: string; // Obbligatorio
  lastName: string; // Obbligatorio
  modules: string[]; // Obbligatorio
  region?: string; // Opzionale
}

const teacher1: EpicodeTeacher = {
  firstName: 'Dario',
  lastName: 'Del Giudice',
  modules: ['U1'],
};

// ESTENSIONE DI INTERFACCE
// Le interfacce possono estendere altre interfacce, ereditando le loro proprietà.
interface HumanBeing {
  height: number;
  eyeColor: string;
  feetNumber: number;
}

interface Developer extends HumanBeing {
  languagesKnown: string[];
}

const Loic: Developer = {
  height: 180,
  eyeColor: 'black',
  feetNumber: 43,
  languagesKnown: ['HTML', 'CSS', 'Bootstrap', 'JS'],
};
console.log(Loic); // Stampa l'oggetto 'Loic', un Developer con proprietà ereditate da HumanBeing.

// BOSS FINALE: GENERICS
// Un GENERIC è un tipo passato come parametro a un'interfaccia o una funzione, per renderle flessibili.
// Nell'esempio seguente, utilizziamo un GENERIC per specificare il tipo dell'area.

interface Address<A> {
  street: string;
  civicNumber: number;
  zipCode: string;
  cityName: string;
  area: A; // Il tipo dell'area è generico e può variare.
}

const address1: Address<string> = {
  cityName: 'Roma',
  street: 'Via del Campidoglio',
  civicNumber: 10,
  zipCode: '00142',
  area: 'Lazio', // L'area è una stringa in questo caso.
};

interface AmericanArea {
  state: string;
  country: string;
}

const address2: Address<AmericanArea> = {
  cityName: 'Westerville',
  street: '1st St',
  civicNumber: 0,
  zipCode: '68814',
  area: {
    state: 'NE',
    country: 'USA', // L'area è un oggetto con stato e paese.
  },
};

const address3: Address<{ state: string; neighborhood: string }> = {
  cityName: 'Westerville',
  street: '1st St',
  civicNumber: 0,
  zipCode: '68814',
  area: {
    state: 'NE',
    neighborhood: 'Old Town', // L'area è un oggetto con stato e quartiere.
  },
};
