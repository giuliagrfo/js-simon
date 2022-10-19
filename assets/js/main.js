/*
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

*/
const numbers = 10;
// generare 5 numeri casuali 

const numberList = generateNumbers(1, numbers)
console.log(numberList);


function generateNumbers(min, max) {
    const numberList = []
    while (numberList.length !== 5) {
      // genero numero casuale
      const num = generateRandomNumber(min, max)
      // verifico se il numero é stato giá inserito nella lista
      if (!numberList.includes(num)) {
        numberList.push(num)
      }
    }
    
    return numberList
}

// seleziono elemento della DOM dove inserisco la lista di numeri generati
const randomEl = document.querySelector('.random');
randomEl.insertAdjacentHTML('beforeend', numberList);
  

function generateRandomNumber(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Timer di 30 secondi, utilizzo set interval

// salvo in una variabile il numero dei secondi
let seconds = 30;

// setInterval
const timer = setInterval(function(){
    const timerEl = document.querySelector('.timer').innerText = seconds;
   
    // quando il timer arriva a 0 i numeri random scompaiono
    if (seconds == 0) {
        randomEl.classList.add('none');
    } else {
        seconds--
    }
}, 1000)

// chiedere all'utente di inserire i numeri visti precedentemente, uno alla volta
setTimeout(request, 33000) 
let userNumber;
let score = 0
function request(){
    for (let i = 0; i < 5; i++) {
        userNumber= Number(prompt('Inserisci i numeri che hai appena visualizzato'))
        //  console.log(userNumber);
        //  verificare quali numeri sono stati individuati
        if (numberList.includes(userNumber)) {
            score++
            // console.log(score);
            const resultEl = document.querySelector('.result');
            resultEl.insertAdjacentHTML('beforeend', `${userNumber}: è contenuto nella lista il tuo punteggio è: ${score++}`)
            
        }
    }
}


