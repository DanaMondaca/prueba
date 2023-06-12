//presento la función
function sentenceIf(añoActual, añoPersona) {

//guardo en una variable el resultado de la resta
const resultado = añoActual - añoPersona;

//verificar mediante if si la persona es de la edad deseada
if(resultado < 10){
    console.log("la persona tiene menos de 10 años");
}else if(resultado >= 10 && resultado < 20){
    console.log("la persona es mayor de 10 años y menor de 20 años");
}else if(resultado >= 20) {
    console.log("la persona es mayor de 20 años");
}
}

//hago la llamada a la función con los datos ingresados
sentenceIf(2023, 2005);
sentenceIf(2013, 1990);
sentenceIf(2013, 2016);