let selector = document.getElementById('selector')
let lista = document.getElementById('lista')
let buscador = document.getElementById('buscador')

selector.addEventListener('change',mostrarBase)

function mostrarBase() {
    if (selector.value == "series.json") {
    alert('La base se ha cambiado. Base actual: series ')

    } else if (selector.value == "peliculas.json") {
        alert('La base se ha cambiado. Base actual: ' + selector.value)
    }
}




function evitarCaracteres(event) {
    if (event.key > 48 || event.key < 57) {
    
    event.preventDefault();
    }
}

buscador.addEventListener('keydown',evitarCaracteres)




let envio = document.getElementById('envio');

envio.onclick = function() {
let opcionaElegir = selector.value;
cargarListado(opcionaElegir);
}

envio.addEventListener('cambioOpcion', cambioBase);

function cambioBase() {
    alert('Opción base: ' +selector.value);
}

function cargarListado(opcion) {
    fetch(opcion)
    .then (respuesta => respuesta.json())
    .then(function(salida) {

        for (opcion of salida.data) {
        elemento = buscador.value.toUpperCase();
            if (opcion.nombre.startsWith(elemento)) {
            let elementoParrafo = document.createElement('p');
            elementoParrafo.innerText = opcion.nombre;
            lista.appendChild(elementoParrafo);
            elementoParrafo.addEventListener('mouseover', function () {
           let listaSinopsis = document.createElement('p');
           listaSinopsis.innerText = opcion.sinopsis;
           elementoParrafo.appendChild(listaSinopsis); 
           elementoParrafo.addEventListener('mouseout', function() {
            elementoParrafo.removeChild(listaSinopsis);
           })           
            })
            }
        

        }
    
   
    
    
    })
}


