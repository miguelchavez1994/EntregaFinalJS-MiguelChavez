const perritosPerdidos = [
    {id:1 , raza: "FRENCH BULLDOG", tanaño:"MEDIANO" , color: "NEGRO" , sexo: "HEMGRA" , nombre: "TOBI" , ciudad:"Lima" , distrito:"SAN MIGUEL" , fechaEncontrado:"19/06/2023" , imagen:`multimedia/images/cocker.jpg`},
    {id:2 ,raza: "PITBULL", tanaño:"GRANDE" , color: "BLANCO" , sexo: "MACHO", nombre: "NN" , ciudad:"Lima" , distrito:"PUEBLO LIBRE" , fechaEncontrado:"09/05/2023" , imagen: `multimedia/images/french-bulldog.jpg`},
    {id:3 ,raza: "LABRADOR", tanaño:"GRANDE" , color: "DORADO" , sexo: "MACHO" , nombre: "BOBY" , ciudad:"Lima" , distrito:"MAGDALENA" , fechaEncontrado:"15/06/2023" , imagen: `multimedia/images/jack-russell.jpg`},
    {id:4 ,raza: "COCKER", tanaño:"MEDIANO" , color: "CARAMELO" , sexo: "HEMGRA" , nombre: "NN" , ciudad:"Lima" , distrito:"MIRAFLORES" , fechaEncontrado:"10/06/2023" , imagen: `multimedia/images/labrador.jpg`},
    {id:5 ,raza: "JACK RUSSELL", tanaño:"PEQUEÑO" , color: "BLANCO" , sexo: "MACHO" , nombre: "MANCHAS" , ciudad:"Lima" , distrito:"SAN MIGUEL" , fechaEncontrado:"30/05/2023" , imagen: `multimedia/images/perrito6.jpg`},
    {id:6 ,raza: "MESTIZO", tanaño:"MEDIANO" , color: "MARRON" , sexo: "MACHO" , nombre: "NN" , ciudad:"Lima" , distrito:"MAGDALENA" , fechaEncontrado:"03/06/2023" , imagen: `multimedia/images/perrito6.jpg`},
];
function guardarPerritosLS() {
    localStorage.setItem("perritosPerdidos", JSON.stringify(perritosPerdidos));
}
guardarPerritosLS ();

function cargarPerritosLS() {
    return JSON.parse(localStorage.getItem("perritosPerdidos"));
}