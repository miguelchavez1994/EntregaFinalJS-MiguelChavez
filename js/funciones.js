
import { perritosPerdidos, guardarPerritosLS } from './perritos.js';

function cargarPerritosLS() {
    return JSON.parse(localStorage.getItem("perritosPerdidos"));
}

export { cargarPerritosLS, guardarPerritosLS };


function buscarPerrito(id) {
    const perritosPerdidos = cargarPerritosLS();
    
    return perritosPerdidos.find(item => item.id === id);
}

function verPerrito(id) {
    const perritoDatos = buscarPerrito(id);
    localStorage.setItem("perritoDatos", JSON.stringify(perritoDatos));
}






