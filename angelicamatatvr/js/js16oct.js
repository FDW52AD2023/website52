document.write("Hola a todos");
document.write("<marquee>Grupo 52</marquee>");
document.title="Titulo desde js";

console.log("Mensaje enviado a la consola");
console.warn("Soy un mensaje tipo warn");
console.error("Soy mensaje de error");
console.info("Soy un mensaje tipo info");

alert("Hola bienvenido a mi sitio");

prompt("¿Cuántos años tienes?");

/* Variables */
/* Shift Alt a */
let grupo;
let semestre=5;
let pedidoFinalizado = true
let estado = "Nuevo Leon";

grupo = "Grupo52"
semestre = 6;

document.write(`Radico en ${estado}
                y curso el ${semestre}
                semestre y mi grupo es ${grupo}`);

document.write(`<article>
                   <h2>Titulo del articulo </h2>
                   <p>Texto del parrafo </p> 
                   </aricle>`);

const PORC_COMISION = 0.1;

//PORCENTAJE_COMISION = 3.3;

/* Acceder a un elemento de la pagina web para realizarle cambios */

const titulo = document.getElementById("titulo");

titulo.innerHTML="Javascript";
titulo.style.color = "seagreen";
titulo.style.border = "3px solid black";
titulo.style.borderRadius = "5px";

/* escribir codigo que pregunte al usuario un titulo que desee colocar en el h1 con id titulo */

const tituloNuevo = document.getElementById("titulo");

let texto = prompt("¿Qué quieres ver en el titulo?");

tituloNuevo.innerHTML = texto;