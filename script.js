/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(n1, n2) {
    parseInt(n1);
    parseInt(n2);
    let somma = Number(n1) + Number(n2);
    if (Number(n1) === Number(n2)) {
        somma *= 3
    }
    if (isNaN(somma)) {
        return "Uno o ambedue i dati non sono numeri"
    } else {
        return somma
    }
}

let variabile1 = prompt("Dimmi il primo numero che devo sommare", "0")
let variabile2 = prompt("Dimmi il secondo numero che devo sommare", "0")
console.log(crazySum(variabile1, variabile2));

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(n) {
    parseInt(n);
    if (isNaN(Number(n))) {
        return "Non è un numero"
    } else if (((Number(n) > 20) && (Number(n) < 100)) || Number(n)==400) {
        return true
    } else {
        return false
    }
}

let variabile3 = prompt("Dimmi un numero", "0");
console.log(boundary(variabile3));

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(str) {
    let newStr = ""
    for (let i = 0; i < str.length; i++) {
        newStr += str[(str.length-1)-i];
    }
    return newStr
}

let variabile4 = prompt("Dimmi cosa devo invertire", "");
console.log(reverseString(variabile4));

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst(str) {
    let newStr = str[0].toUpperCase();
    for (let i = 1; i < str.length; i++) {
        newStr += str[i];
    }
    return newStr
}

let variabile5 = prompt("Dimmi una parola", "");
console.log(upperFirst(variabile5));

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(n) {
    if (isNaN(Number(n))) {
        return "Non hai inserito un numero"
    } else {
        let array = []
        while (n !== 0) {
            array.push(parseInt(Math.floor( Math.random())))
            n -= 1
        }
        return array
    }
}

let n1 = prompt("Dimmi quanti numeri inserire nell'array","")
console.log(giveMeRandom(n1));

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area(l1, l2) {
    if (isNaN(Number(l1)) || isNaN(Number(l2))) {
        return "Uno dei due dati o tutte due non sono dei numeri"
    } else {
        return l1 * l2
    }
}

let lato1 = prompt("Dimmi la misura del primo lato","");
let lato2 = prompt("Dimmi la misura del secondo lato","");
console.log(area(lato1, lato2));

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(n) {
    if (isNaN(Number(n))) {
        return "Non è un numero"
    } else {
        let differenza = Math.abs(n - 19)
        if (differenza > 19) {
            differenza *= 3
        }
        return differenza
    }
}

let diff= prompt("Dimmi il numero a cui sotrarre 19","");
console.log(crazyDiff(diff));

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function codify(code) {
    if (code === "code") {
        return code
    } else {
        return "code " + code
    }
}

let code = prompt('Dimmi la parola da "codificare"',"");
console.log(codify(code));

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function check3and7(n) {
    if (isNaN(Number(n))) {
        return "Non è stato inserito un numero"
    } else {
        if (((Number(n)%3) === 0) || ((Number(n)%7) === 0)) {
            return true
        } else {
            return false
        }
    }
}

let n2 = prompt("Dimmi il numero da 'checckare'","");
console.log(check3and7(n2));

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function cutString(str) {
    let newStr = ""
    for (let i = 1; i < str.length-1; i++) {
        newStr += str[i];
    }
    return newStr
}

let parola= prompt("Dimmi una parola","");
console.log(cutString(parola));