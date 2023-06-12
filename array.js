//let array = [1, 2, 3];

let frutas = ["manzanas", "peras", "bananas"];

let elementosAlAzar = [2, true, " nombre", " hola", undefined];
elementosAlAzar[1];

let primeraFruta = frutas[0];
let segundaFruta = frutas[1];

let posición = frutas.indexOf("bananas");

console.log(posición);

frutas.push("naranjas"); //agrega elementos a la lista
console.log(frutas);

console.log("_______________")
frutas.shift(); //elimina el primer elemento de la lista
console.log(frutas)



console.log(primeraFruta);
console.log(segundaFruta);