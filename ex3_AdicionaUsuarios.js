let lista = ['Pedro', 'José', 'Aderbal', 'Danilo', 'Luisa', 'Vitoria']

const inserir = ['Jefferson','José', null, 'Marcio', 'Luisa',3] 

inserir.forEach((nome) =>{
    if (typeof nome!='string'){
        console.log(`O valor ${nome} não é string`)
    } else if(!lista.includes(nome)){
        lista.push(nome);
    }else{
        console.log(`O valor ${nome} ja está na lista de nomes`);
    }
    });
    console.log(lista);