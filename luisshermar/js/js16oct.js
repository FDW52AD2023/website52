document.write("Hola a todos")
document.title = "Titulo de js"


console.log("Mensaje enviado a la consola");
console.warn("soy un mensaje de tipo warnin");
console.error("erorr");
console.info("tipo info");

alert("bienvenidos al imalaya");

prompt("Cuantos anios tienes?");


/* Variables shft alt a */

let grupo;
let semestre=5;
let pedidoFinalizado = true;
let estado = "Nuevo Leon";

grupo = "Grupo 52";
semestre =6;

document.write(` Radico en ${estado} y curso el ${semestre} semestre y mi grupo es ${grupo}`)

document.write(`<article>
                    <h2>Titulo del articulo</h2> 
                    <p>Texto el parrafo </p> 
                </article>`)

const PORCENTAJE_COMISION =0.1;

// PORCENTAJE_COMISION = 3.3; //

/* Acceder a un elemento de la pagina web para realizarle cambios */

const titulo = document.getElementById("titulo");

console.log(titulo);
titulo.innerHTML = "JAVASCRIPT";
titulo.style.color = "tomato"
titulo.style.border = "3px solid black";
titulo.style.borderRadius = "5px";

/* Escribir codigo que pregunte al usuario un titulo que desee colocar en el h1 con id de titulo */

const tituloNuevo = document.getElementById("titulo");

let texto = prompt("Que quieres poner en el titulo");

tituloNuevo.innerHTML = texto;