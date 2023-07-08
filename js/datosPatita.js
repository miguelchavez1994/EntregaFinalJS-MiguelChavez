function renderPerrito() {
    const perritoDatos = JSON.parse(localStorage.getItem("perritoDatos"));
    let contenidoPerrito = `<div class="contenedor col-md-4 offset-md-3">
                                <img src="${perritoDatos.imagen}" class="img-fluid" alt="${perritoDatos.nombre}">
                            </div>
                            <div class="tarjeta col-md-4">
                                <p class="perritoNombre card-text text-primary">Hola! Soy ${perritoDatos.nombre}</p>
                                <p class="text-body-tertiary">Raza: ${perritoDatos.raza} </p>
                                <p class="text-body-tertiary">Tamaño: ${perritoDatos.tamano}</p>
                                <p class="text-body-tertiary">Sexo: ${perritoDatos.sexo}</p>
                                <p class="text-body-tertiary">Me perdí en: ${perritoDatos.ciudad} , ${perritoDatos.distrito}</p>
                                <p class="text-body-tertiary">Fecha de Rescate: ${perritoDatos.fechaEncontrado}</p>
                                <p class="my-5"><button class="btn btn-primary" onclick="agregarProducto(${perritoDatos.id});">Adoptame!</button></p>
                            </div>`;
    document.getElementById("contenidoPerrito").innerHTML = contenidoPerrito
}

renderPerrito();
//renderBotonCarrito();