document.write("Hola a todos");
document.write("<marquee>Grupo 52</marquee>");
document.tittle = "Titulo desde js";

console.log("Mensaje enviado a la consola");
console.warn("Soy un mensaje tipo warning");
console.error("Soy mensaje de error");
console.info("Soy un mensaje tipo info");

alert("Hola, bienvenido a mi sitio")

prompt("Cuantos años tienes");

/* Variables */
let grupo;
let semestre=5;
let pedidoFinalizado = true;
let estado = "Nuevo Leon";

grupo = "Grupo 52";
semestre = 6;

document.write(`Radico en ${estado} y curso el semestre ${semestre} mi grupo es ${grupo}`);

document.write(`<article> 
                <h2>Titulo del articulo</h2> 
                <p>Texto del parrafo <p>
                </articulo>`);

const PORCENTAJE_COMISION = 0.1;

/* Acceder a un elemento de la pagina web para realizarle cambios*/

const titulo = document.getElementById("Titulo");

console.log(titulo);

titulo.innerHTML = "Javascript";
titulo.style.color = "Tomato";
titulo.style.border = "3px solid black";
titulo.style.borderRadius = "5px";

/* Escribir codigo que pregunte al usuario un titulo que desee colocar en el h2 con id titulo */

const tituloNuevo = document.getElementById("Titulo");

let texto = prompt("¿Que quieres ver en el titulo");

tituloNuevo.innerHTML = texto
