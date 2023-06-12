function divisible(){
    for(let i = 0; i <= 100; i++) {
        if(i % 7 == 0 && i % 8 == 0) {
            console.log(`Verdadero el numero es ${i}`);
        } else{
            console.log(`Falso el numero es ${i}`);
        }

    }

}

divisible();
