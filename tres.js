function tres(){
    let array = [];
    let numero = 1;
    cont = 0;
    while(numero<28){
        for(x=0;x<3;x++){
            cont = cont + numero;
            numero++;
        }
        array.push(cont)
        cont = 0;
    }
    console.log(array);
}
tres();