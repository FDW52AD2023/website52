document.write("Hola a todos")
document.write("<marquee>Guenas!!!</marquee>")
document.title = "Titulo de JS";

console.log("Mensaje a la consola")
console.warn("Pelogriso")
console.error("No exito")
console.info("Info")

/* alert("Vete feo -<-")

prompt("Decime tu edad -<-") */

/* Variables */
let grupo;
let semestre = 5;
let pedidoFinalizado = true;
let estado="Nuevo Leon";

grupo = "Grupo 52";
semestre = "Sexto";

document.write(`Soy de ${estado} y curso el ${semestre} semestre y mi grupo es el ${grupo}`)

document.write(`<article> 
                    <h2>Titulo del Articulo</h2> 
                    <p>Texto del Parrafo</p> 
                </article>`)

const PORCENTAJE_COMISION = 0.1;

// PORCENTAJE_COMISION = 3.3;

/* Acceder a un elemento que pertenece a HTML */
const TITULO_PRINCIPAL = document.getElementById("Titulo")
console.log(TITULO_PRINCIPAL)

TITULO_PRINCIPAL.innerHTML = "JAVA script"
TITULO_PRINCIPAL.style.color = "Gold"
TITULO_PRINCIPAL.style.border = "3px solid Black"
TITULO_PRINCIPAL.style.borderRadius = "5px"

/* Escribir el codigo que pregunte al usuario un titulo que desee colocar en el h1 con id de titulo*/
const TITULO_NUEVO = document.getElementById("Titulo")
let Texto = prompt("Que quieres en el titulo hippie? -<-")
TITULO_NUEVO.innerHTML = Texto;