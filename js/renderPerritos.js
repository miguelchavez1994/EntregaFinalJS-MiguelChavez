import { perritosPerdidos } from './perritos.js';
import { cargarPerritosLS } from './funciones.js';

const pedirPerritos = () => {
    document.getElementById("contenido").innerHTML = `<div class="spinner-border cargando-spi" role="status">
    <span class="visually-hidden">Loading...</span></div>`;

    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(perritosPerdidos);
        }, 3000);
    })
}
function renderPerritos() {
    let perritosPerdidos = cargarPerritosLS();
    //let textoBusqueda = document.getElementById("textoBusqueda").value;
    let contenido = "";

    //perritosPerdidos = textoBusqueda ? perritosPerdidos.filter(item => item.nombre.toUpperCase().includes(textoBusqueda.toUpperCase())) : perritosPerdidos;

    if (perritosPerdidos.length > 0) {
        perritosPerdidos.forEach(perrito => {
            contenido += `<div class="contenedor col-md-4 col-sm-12 mb-3 justify-content-center">
                            <a href="./pages/datos-patita.html" onclick="verPerrito(${perrito.id})" class="text-decoration-none">
                                <div class="tarjeta card text-center border border-0">
                                    <img src="${perrito.imagen}" class="card-img-top" alt="${perrito.nombre}">
                                    <div class="patita-datos card-body">
                                        <p class="perritoNombre card-text">Mi nombre es ${perrito.nombre}</p>
                                        <p class="text-secondary"><b>Me encontraron en ${perrito.distrito}</b></p>
                                        <p class="text-secondary"><b>Me encontraron el día ${perrito.fechaEncontrado}</b></p>
                                    </div>
                                </div>
                            </a>
                        </div>`;
        });
        
    } else {
        contenido += `<div class="alert alert-danger text-center" role="alert">No se encontraron perritos por el término de búsqueda!</div>`;
    }
   
    document.getElementById("contenido").innerHTML = contenido;
};


pedirPerritos().then(perritosPerdidos => {
    renderPerritos(perritosPerdidos);
});


