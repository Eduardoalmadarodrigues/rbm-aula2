function dois(){
    let array = [];
    let matriz = [];
    numero = 1;
    while(numero<28){
        for(x=0;x<3;x++){
            array.push(numero);
            numero++;
        }
        matriz.push(array);
        array = [];
    }
    console.log(matriz);
}
dois();