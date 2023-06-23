function renderPerrito() {
    const perritoDatos = JSON.parse(localStorage.getItem("perritoDatos"));
    let contenidoPerrito = `<div class="contenedor col-md-4 offset-md-3">
                                <img src="${perritoDatos.imagen}" class="img-fluid" alt="${perritoDatos.nombre}">
                            </div>
                            <div class="tarjeta col-md-4">
                                <p class="perritoNombre card-text text-primary">Hola! Soy ${perritoDatos.nombre}</p>
                                <p class="text-body-tertiary">Raza: ${perritoDatos.raza} </p>
                                <p class="text-body-tertiary">Tamaño: ${perritoDatos.tamano}</p>
                                
                                <h4 class="text-primary"><b>$${perritoDatos.precio}</b></h4>
                                <p class="my-5"><button class="btn btn-primary" onclick="agregarProducto(${perritoDatos.id});">Agregar (+)</button></p>
                            </div>`;
    document.getElementById("contenidoPerrito").innerHTML = contenidoPerrito
}

renderPerrito();
//renderBotonCarrito();