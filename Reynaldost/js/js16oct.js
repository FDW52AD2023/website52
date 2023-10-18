document.write("Hola a todos");
document.write("<marquee>Grupo52</marquee>");
document.title = "Titulo desde js";

console.log("Mensaje enviado a la consola");
console.warn("soy un warning")
console.error("Soy un mensaje de error")
console.info("Soy un mensaje de tipo info")

alert("Hola bienvenido");
/* prompt("Cuantos años tienes?"); */

/* Variables */

let grupo;
let semestre=5;
let pedidoFinalizado = true;
let estado = "Nuevo León";

grupo = "Grupo 52";
semestre = 6;

document.write(`Radico en ${estado}
                y curso en ${semestre}
                semestre y mi grupo es ${grupo}`);

document.write(`<article>
                    <h2>Titulo del articulo</h2>
                    <p>Texto del parrafo<p>
                </article>`);

const PORCENTAJE_COMISION = 0.1;

/* Acceder a un elemento de la pagina web para realizarle cambios */

const titulo = document.getElementById("titulo")

console.log(titulo);

titulo.innerHTML = "Javascript";
titulo.style.color = "Grey";
titulo.style.border = "3px solid black";
titulo.style.borderRadius = "5px";

/* Escribir codigo que pregunte al usuario un titulo que desee colocar en el h1 con id titulo */

const tituloNuevo = document.getElementById("titulo")

let texto = prompt("Que quieres ver en el titulo");

tituloNuevo.innerHTML = texto;