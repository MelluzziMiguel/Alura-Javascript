console.log(`\n Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

const idadeComprador =  18;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log("\n Destinos possiveis:");
//console.log(salvador, ...)
console.log(listaDeDestinos);

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa viagem!");
    listaDeDestinos.splice("2.2");
}
else {
    console.log("Não é maior de idade e não posso vender");
}

console.log("Embarque: \n \n")
if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa viagem!");
}else{
    console.log("Você não pode embarcar")
}

console.log(listaDeDestinos);