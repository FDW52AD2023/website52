
document.write("Hola a todos");
document.write("<marquee>Grupo 52</marquee>");
document.title = "Titulo desde js";

console.log("Mensaje enivado a la consola");
console.warn("Soy un mensaje tipo warning");
console.error("Soy un mensaje de error");
console.info("Soy un mensaje de tipo info");

alert("Hola bienvenido a mi sitio");

prompt("Cuantos años tienes?");

/* Variables */
let grupo;
let semetre = 5;
let pedidoFinalizado = true;
let estado = "Nuevo León";

grupo = "Grupo 52";
semestre = 6;

document.write(`Soy de ${estado} y curso el ${semestre}to semestre y soy del ${grupo}`);
document.write(`<article> 
                    <h2>Titulo del articulo</h2> 
                    <p>Texto del parrafo</p> 
                </article>`);

const PORCENTAJE_COMISION = 0.1;

/* Acceder a un elemento de la pagina web para realizarle cambios */

const titulo = document.getElementById("titulo");

titulo.innerHTML = "Javascript";
titulo.style.color = "Blue";
titulo.style.border = "3px solid gray";
titulo.style.borderRadius = "5px";

/* Escribir l codigo que pregunte al usuario un titulo 
que desee color en el h1 con idd titulo */

const tituloNuevo = document.getElementById("titulo");

let texto = prompt("Que titulo desea?");

tituloNuevo.innerHTML = texto;

