// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema
let listaAmigos = [];

function agregarAmigo() {
    assignTextelement('#resultado', '');
    let amigoAgregado = document.querySelector('#amigo').value;
    //verifica que el valor no sea este en blanco
    if (amigoAgregado === "") {
        alert("No se puede agregar un amigo vacío.");
        return;
    }
    //agrega amigo a la lista
    listaAmigos.push(amigoAgregado);
    emptyBox('#amigo');
    //Envia el amigo agregado a la lista
    tablaListaAmigos(listaAmigos);
    return;
}

function sortearAmigo(){
    assignTextelement('#listaAmigos','');
    if(listaAmigos.length===0){
        assignTextelement('#resultado', `No ha ingresado a ningun amigo a la lista`);
    }else{
        //Selecciona un indice al azar para escoger al amigo secreto
        let indiceSecreto= Math.floor(Math.random()*listaAmigos.length);
        //Procede a seleccionar
        assignTextelement('#resultado', `Su amigo secreto es ${listaAmigos[indiceSecreto]}`)
        document.querySelector('#sorteo').setAttribute('disabled','true');
    }
    return;
}


function tablaListaAmigos(listaAmigos){
     // Inicializa resultado como un string vacio
    let resultado = "";

    // Crea la lista para mostrar
    for (let i = 0; i < listaAmigos.length; i++) {
        //Genera un string con la lista de cada uno de los amigos con un espacio
        resultado += `${listaAmigos[i]}<br>`; 
    }
    assignTextelement('#listaAmigos', resultado);
    return;
}

//vacia la caja de texto
function emptyBox(element){
    return boxValue = document.querySelector(element).value='';
}

function assignTextelement(element,text){
    let elementHTML = document.querySelector(element);
    elementHTML.innerHTML=text;
    return;
}
