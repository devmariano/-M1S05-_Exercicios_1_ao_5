const array = [

    {nome: "luis", idade: 26},
    
    {nome: "norma", idade: 16},
    
    {nome: "daiana", idade: 26},
    
    {nome: "jorge", idade: 16},
    
    {nome: "kauan", idade: 16},
    
    {nome: "charles", idade: 26},
    
    {nome: "marco", idade: 16},
    
    {nome: "bruno", idade: 16}
    
    ];

let menores = []
let maiores = []

array.forEach(obj => {
    console.log(obj.idade)
    if (obj.idade >= 18){
        maiores.push(obj.nome)
    }else{
        menores.push(obj.nome)
    }
});
console.log(`Menores de 18: ${menores}`)
console.log(`Maiores de 18: ${maiores}`)
