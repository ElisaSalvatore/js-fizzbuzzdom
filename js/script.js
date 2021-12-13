//creare la costante collegata all'html
/* const numberList = document.querySelector('.number-list'); */
const containerBoxes = document.querySelector('.container-boxes');

// 1.stampare in console i numeri da 1 a 100
// 2.creare un container nel DOM, a cui appendere un elemento html con il numero e la stringa corretta
// 3.applicare uno stile CSS differente a seconda del valore dell’indice per i multipli di 3, 
//   per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0 ){    
        // multipli di 3 e di 5 "FizzBuzz" al posto del numero
        containerBoxes.innerHTML += `<div class="box box-red"> fizzBuzz </div>`;

    } else if (i % 3 === 0){ 
        // multipli di 3 "Fizz" al posto del numero
        containerBoxes.innerHTML += `<div class="box box-green"> fizz </div>`;

    } else if (i % 5 === 0) {                   
        // multipli di 5 "Buzz" al posto del numero
        containerBoxes.innerHTML += `<div class="box box-yellow"> buzz </div>`;

    }  else {
        containerBoxes.innerHTML += `<div class="box">${i}</div>`;
    }
}


// 2^ versione 
/* 
for (let i = 1; i <= 100; i++) {
    // un if ed un else: se "i" è multiplo di 3 oppure di 5 deve scrivere una stringa
    // oppure (else!) => scrivi i

    if (i % 3 === 0 || i % 5 === 0 ) { // => basta che il numero sia multiplo o di 3 oppure di 5.
    // il che vuol dire che se multiplo di tutti e due netra nell'if.
    //preparo una stringa a seconda d alcune condizioni specifiche 
    //andrò a stampare la stringa solo quando sarà pronta

        let stringa = ' ';

        if (i % 3 === 0) {
            stringa = 'Fizz'
            element.Html.classList.add('fizz); //in questo caso su CSS creavamo delle classi con i rispettivi colori (.fizz || .buzz || .fizz.buzz).
        }

        // se multiplo di 5 concateniamo la stringa Buzz,
        // questo vuol dire che se in precedenza il numero è stato multiplo di 3 allora concateniamo Buzz e Fizz ottenendo FizzBuzz
        if (i % 5 === 0) {
            stringa += 'Buzz'
            element.Html.classList.add('buzz);
        }

        console.log(stringa);
    } else {
        console.log(i);
    }
}
*/