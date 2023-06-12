function calcular(numeros){

    if (numeros % 7 == 0 && numeros % 8 == 0){
    return true ;
}   else { 
    return false;

    }
}

calcular(56);
calcular(7);
calcular(8);
calcular(0);
calcular(224);
calcular(73);

console.log(calcular(7));
console.log(calcular(8));
console.log(calcular(0));
console.log(calcular(224));
console.log(calcular(73));