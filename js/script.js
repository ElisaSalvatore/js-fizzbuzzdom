//creare la costante collegata all'html
const numberList = document.querySelector('.number-list');

// stampare in console i numeri da 1 a 100

for (let i = 1; i <= 100; i++) {
   
    if (i % 3 === 0 && i % 5 === 0 ){    
        // multipli di 3 e di 5 "FizzBuzz" al posto del numero
        numberList.innerHTML += 'fizzBuzz ';

    } else if (i % 3 === 0){ 
        // multipli di 3 "Fizz" al posto del numero
        numberList.innerHTML += 'fizz ';

    } else if (i % 5 === 0) {                   
        // multipli di 5 "Buzz" al posto del numero
        numberList.innerHTML += 'buzz ';

    }  else {
        numberList.innerHTML += `<span>${i}</span> `;
    }
}


// creare un container nel DOM, a cui appendere unelemento html con il numero e la stringa corretta

//applicare uno stile CSS differente a seconda del valore dell’indice per i multipli di 3, 
//per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5