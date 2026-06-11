let par_impar = [2,5,7,75,0,49,82,-4,13,6,10]
let soma = 0
let media = 0
let moda;
let maiorContagem = 0;
let par = []
let impar = []
let quadradoDaDiferenca = [];
let somaDosQuadrados = 0
let dividirPelaLista = 0
let desvioPadrao = 0

par_impar.forEach(num => {
    if(num % 2 == 0 ){
        
        par.push(num)
    }
    else{
        impar.push(num)
    }
});
console.log("é par: "+ par)
console.log("é impar: "+ impar)



par_impar.forEach(num => {
    soma = soma + num
});

media = soma / par_impar.length;
console.log("A media é: " + media)






for (let i = 0; i < par_impar.length; i++) {
    let contagem = 0;

    for (let j = 0; j < par_impar.length; j++) {
        if (par_impar[i] == par_impar[j]) {
            contagem++;
        }
    }

    if (contagem > maiorContagem) {
        maiorContagem = contagem;
        moda = par_impar[i];
    }
}

if(maiorContagem > 1){
    console.log("Moda é o numero: " + moda + ", aparece " + maiorContagem + " vezes");
}
else{
    console.log("a moda nao exsite")
}





let listaOrdenada = [...par_impar].sort((a, b) => a - b)

if (listaOrdenada.length % 2 ==0){
    let numMeio = listaOrdenada.length / 2
    let numMeio2 = numMeio - 1

    let medianaPar = (listaOrdenada[numMeio] + listaOrdenada[numMeio2]) / 2
    console.log("A mediana é " + medianaPar)
} else{
    let medianaImpar = Math.floor(listaOrdenada.length / 2)

    console.log("A mediana é " + listaOrdenada[medianaImpar])
}





par_impar.forEach(num => {
    quadradoDaDiferenca.push((num - media) ** 2);
});

quadradoDaDiferenca.forEach(valor =>{
    somaDosQuadrados = somaDosQuadrados + valor 
})

dividirPelaLista = somaDosQuadrados / par_impar.length

desvioPadrao = dividirPelaLista ** 0.5
console.log(" O desvio Padrao é " + desvioPadrao)