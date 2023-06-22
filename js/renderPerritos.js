function renderPerritos() {
    let perritosPerdidos = cargarPerritosLS();
    //let textoBusqueda = document.getElementById("textoBusqueda").value;
    let contenido = "";

    //perritosPerdidos = textoBusqueda ? perritosPerdidos.filter(item => item.nombre.toUpperCase().includes(textoBusqueda.toUpperCase())) : perritosPerdidos;

    if (perritosPerdidos.length > 0) {
        perritosPerdidos.forEach(perrito => {
            contenido += `<div class="contenedor col-md-4 col-sm-12 mb-3 justify-content-center">
                            <a href="ver-producto.html" onclick="verProducto(${perrito.id})" class="text-decoration-none">
                                <div class="tarjeta card text-center border border-0">
                                    <img src="${perrito.imagen}" class="card-img-top" alt="${perrito.nombre}">
                                    <div class="card-body">
                                        <p class="perritoNombre card-text text-primary">Mi nombre es ${perrito.nombre}</p>
                                        <p class="text-secondary"><b>Me encontraron en ${perrito.distrito}</b></p>
                                        <p class="text-secondary"><b>Me encontraron el día ${perrito.fechaEncontrado}</b></p>
                                    </div>
                                </div>
                            </a>
                        </div>`;
        });
        /*
        <a es todo el link que contiende el ID de la tarjeta
            <div es la tarjeta 
                <img es la imagen que le otorgare perrito.imagen
                <div es otro div que tendra la informacion de cada tarjeta
                    < la info de cada tarjeta 
        */
    } else {
        contenido += `<div class="alert alert-danger text-center" role="alert">No se encontraron productos por el término de búsqueda!</div>`;
    }
   
    document.getElementById("contenido").innerHTML = contenido;
};

renderPerritos();
renderBotonCarrito();