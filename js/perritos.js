const currentScriptURL = new URL(import.meta.url);
const baseImagePath = currentScriptURL.href.substring(0, currentScriptURL.href.lastIndexOf('/') + 1);


const perritosPerdidos = [
  {id: 1, raza: "FRENCH BULLDOG", tamano: "MEDIANO", color: "NEGRO", sexo: "HEMGRA", nombre: "TOBI", ciudad: "LIMA", distrito: "SAN MIGUEL", fechaEncontrado: "19/06/2023", imagen: `${baseImagePath}./multimedia/images/french-bulldog.jpg`},
  {id:2 ,raza: "PITBULL", tamano:"GRANDE" , color: "BLANCO" , sexo: "MACHO", nombre: "CUKI" , ciudad:"LIMA" , distrito:"PUEBLO LIBRE" , fechaEncontrado:"09/05/2023" , imagen: `${baseImagePath}./multimedia/images/pitbull.jpg`},
  {id:3 ,raza: "LABRADOR", tamano:"GRANDE" , color: "DORADO" , sexo: "MACHO" , nombre: "BOBY" , ciudad:"LIMA" , distrito:"MAGDALENA" , fechaEncontrado:"15/06/2023" , imagen: `${baseImagePath}./multimedia/images/labrador.png`},
  {id:4 ,raza: "COCKER", tamano:"MEDIANO" , color: "CARAMELO" , sexo: "HEMGRA" , nombre: "LUCA" , ciudad:"LIMA" , distrito:"MIRAFLORES" , fechaEncontrado:"10/06/2023" , imagen: `${baseImagePath}./multimedia/images/cocker.jpg`},
  {id:5 ,raza: "JACK RUSSELL", tamano:"PEQUEÑO" , color: "BLANCO" , sexo: "MACHO" , nombre: "LIONEL" , ciudad:"LIMA" , distrito:"SAN MIGUEL" , fechaEncontrado:"30/05/2023" , imagen: `${baseImagePath}./multimedia/images/jack-russell.jpg`},
  {id:6 ,raza: "MESTIZO", tamano:"MEDIANO" , color: "MARRON" , sexo: "MACHO" , nombre: "LARRY" , ciudad:"LIMA" , distrito:"MAGDALENA" , fechaEncontrado:"03/06/2023" , imagen: `${baseImagePath}./multimedia/images/mestizo.jpg`},
  
];

function guardarPerritosLS() {
    localStorage.setItem("perritosPerdidos", JSON.stringify(perritosPerdidos));
}
export { perritosPerdidos, guardarPerritosLS };

