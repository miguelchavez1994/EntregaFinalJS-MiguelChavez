function renderPerrito() {
    const perritoDatos = JSON.parse(localStorage.getItem("perritoDatos"));
    let contenidoPerrito = `<div class="cont-img-patita col-md-5 offset-md-3">
                                <img src="${perritoDatos.imagen}" class="img-fluid" alt="${perritoDatos.nombre}">
                            </div>
                            <div class="col-md-4 texto-datos-patita">
                                <p class="perritoNombre card-text">Hola! Soy ${perritoDatos.nombre}</p>
                                <p class="text-body-tertiary">Raza: ${perritoDatos.raza} </p>
                                <p class="text-body-tertiary">Tamaño: ${perritoDatos.tamano}</p>
                                <p class="text-body-tertiary">Sexo: ${perritoDatos.sexo}</p>
                                <p class="text-body-tertiary">Me perdí en: ${perritoDatos.ciudad} , ${perritoDatos.distrito}</p>
                                <p class="text-body-tertiary">Fecha de Rescate: ${perritoDatos.fechaEncontrado}</p>
                                <a href="./pages/form-adopcion.html"><p class="my-5"><button class="boton-adoptame btn btn-primary" onclick="adoptarPerrito(${perritoDatos.id});">Adoptame!</button></p></a>
                            </div>`;
    document.getElementById("contenidoPerrito").innerHTML = contenidoPerrito
}

renderPerrito();
//renderBotonCarrito();