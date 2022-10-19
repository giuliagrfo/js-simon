/*
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

*/
const numbers = 5;
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


const randomEl = document.querySelector('.random');
randomEl.insertAdjacentHTML('beforeend', numberList);
  

function generateRandomNumber(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Timer di 30 secondi, utilizzo set interval

// salvo in una variabile il numero dei secondi

let seconds = 5;

const timer = setInterval(function(){
    const timerEl = document.querySelector('.timer').innerText = seconds;
   

    if (seconds == 0) {
        randomEl.classList.add('none');
    } else {
        seconds--
    }
}, 1000)
