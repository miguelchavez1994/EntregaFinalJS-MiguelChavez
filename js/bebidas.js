function renderPerritos() {
    let perritosPerdidos = cargarPerritosLS();
    let textoBusqueda = document.getElementById("textoBusqueda").value;
    let contenido = "";

    perritosPerdidos = textoBusqueda ? perritosPerdidos.filter(item => item.nombre.toUpperCase().includes(textoBusqueda.toUpperCase())) : perritosPerdidos;

    if (perritosPerdidos.length > 0) {
        perritosPerdidos.forEach(producto => {
            contenido += `<div class="col-md-3 mb-5">
            <a href="ver-producto.html" onclick="verProducto(${perritosPerdidos.id})" class="text-decoration-none">
                <div class="card text-center border border-0">
                    <img src="${perritosPerdidos.imagen}" class="card-img-top" alt="${perritosPerdidos.nombre}">
                    <div class="card-body">
                        <p class="card-text text-primary"><b>$${producto.precio}</b></p>
                        <p class="text-secondary">${perritosPerdidos.nombre}</p>
                    </div>
                </div>
            </a>
          </div>`;
        });
    } else {
        contenido += `<div class="alert alert-danger text-center" role="alert">No se encontraron productos por el término de búsqueda!</div>`;
    }
   
    document.getElementById("contenido").innerHTML = contenido;
};

renderPerritos();
renderBotonCarrito();