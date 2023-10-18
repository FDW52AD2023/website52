
document.write("<p>Hola a todos<p>");
document.write("<marquee>Grupo 52</marquee>");
document.title = "Título desde JS";

console.log("Wenas");
console.warn("Soy un mensaje tipo warning");
console.error("Soy el mensaje del error boo~");
console.info("Soy un mensaje tipo info");

alert("Ola welcome to my site")

prompt("¿Cuántos años tienes?")

/* Variables */

let grupo;
let semestre=5;
let pedidoFinalizado = true;
let estado = "Nuevo León";

grupo = "Grupo 52";
semestre = 6;

document.write(`Radico en ${estado} 
                y curso el ${semestre} 
                semestre y mi grupo es ${grupo}`)

document.write(`<article> 
                    <h2>Título del artículo</h2> 
                    <p>Texto del párrafo</p> 
                </article>`);

const PORCENTAJE_COMISIÓN = 0.1;

/* PORCENTAJE_COMISIÓN = 3.3; */

/* Acceder a un elemento de la página web para realizarle cambios */

const titulo = document.getElementById("titulo");

console.log(titulo);

titulo.innerHTML = "JavaScript";

titulo.style.color = "yellow";
titulo.style.border = "3px solid black";
titulo.style.borderRadius = "8px";
titulo.style.padding = "9px";

/* Escribir código que pregunte al usuario un título que desee colocar en el h1 con ID titulo */

const titleNew = document.getElementById("titulo")

let texto = prompt("Ingresa un título")
titleNew.innerHTML = texto

/* Esta vaina simplificada (creo) */
/* titleNew.innerHTML = prompt("Ingresa un título") */