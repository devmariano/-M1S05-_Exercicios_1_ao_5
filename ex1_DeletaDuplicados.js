const lista = ['Pedro', 'José', 'Aderbal', 'Danilo', 'Luisa', 'Vitoria', 'Luis', 'Danilo', 'José']

let listaNova = [];

lista.forEach((nome) =>{
if(!listaNova.includes(nome)){
    listaNova.push(nome);
}else{
    console.log(`Foi removido o item duplicado | ${nome} | da lista original`);
}
});

console.log(listaNova);

