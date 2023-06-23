function guardarPerritosLS() {
    localStorage.setItem("perritosPerdidos", JSON.stringify(perritosPerdidos));
}
guardarPerritosLS ();

function cargarPerritosLS() {
    return JSON.parse(localStorage.getItem("perritosPerdidos"));
}

function buscarPerrito(id) {
    const perritosPerdidos = cargarPerritosLS();
    
    return perritosPerdidos.find(item => item.id === id);
}

function verPerrito(id) {
    const perritoDatos = buscarPerrito(id);
    localStorage.setItem("perritoDatos", JSON.stringify(perritoDatos));
    //location.href = "ver-.html"; //Redireccionar a la página pasada por parámetro
}


