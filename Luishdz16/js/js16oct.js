
document.write("Hola a todos");

console.log("Mensaje envisado a la consola");

alert("Hola a todos");

prompt("Cuantos años tienes? ")

/* Variables */

let grupo;
let semestre = 5;
let pedidoFinalizado = true;
let estado = "Nuevo Leon";

grupo = "Grupo 52";
semestre = 5;

document.write(`Radico en ${estado} y curso el ${semestre} semestre y el grupo es ${grupo}`);

document.write(`<article>
                    <h2>Titulo del articulo</h2>
                    <p>Texto del parrafo</p>
                </article>`)

const PORCENTAJE_COMISION = 0.1;

/* Acceder a un elemento de la pagina web para realizar le un cambio */

const titulo = document.getElementById("titulo")

console.log(titulo)

titulo.innerHTML = "Javascript";
titulo.style.color = "tomato";
titulo.style.border = "3px solid black";
titulo.style.borderRadius = "3px";

/* Practica */

const tituloNuevo = document.getElementById("titulo");
let texto = prompt("Que titulo quieres?")

tituloNuevo.innerHTML = texto;