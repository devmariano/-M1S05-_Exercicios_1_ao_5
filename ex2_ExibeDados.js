const lista1 = ['Pedro', 'José', 'Aderbal', 'Danilo', 'Luisa', 'Vitoria']
const lista2 = [ 'Banana', 'Morango', 'Maçã', 'Uva', 'Pêra' , 'Laranja']

let lista3 = []

for(var i = 0; i < lista1.length; i++){
    lista3.push(lista1[i]+" - "+lista2[lista2.length-1-i])
}
console.log(lista3)