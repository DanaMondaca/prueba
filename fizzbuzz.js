/*
Escribe un programa que muestre por consola (con un print) los
números de 1 a 100
sustituyendo los siguientes:
- Múltiplos de 3 por la plabra "fizz".
- Múltiplos de 5 por la plabra "buzz".
- Múltiplos de 3 y 5 a la vez por la palabra "fizzbuzz".
*/

function fizzbuzz() {
    for(let i = 1; i <= 100; i++) {
        if(i % 3 == 0 && i % 5 == 0) {
        console.log(`el numero es ${i} fizzbuzz`)
        } else if(i % 3 == 0) {
            console.log("fizz");
        } else if(i % 5 == 0) {
            console.log("buzz");
        }
    }
}
fizzbuzz();