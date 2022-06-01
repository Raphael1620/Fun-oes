função  calculaIdade( anos )  {
	return  `Daqui a ${ anos } anos, ${ this . nome } terá ${
		isso . idade  +  anos
	} anos de idade.`;
}

const pessoa1 ={
    nome: "Maria",
    idade: 30
};

const pessoa2 = {
    nome: "Carla",
    idade: 26
};

const animal = {
    nome:"Fiona",
    idade: 2,
    raca: "Shitshu"
};

console.log(calculaIdade.call(pessoa2, [30]));