document.write("Hola a Todos");
document.write("<marquee>Grupo52</marquee>");
document.title = "Titulo js";

console.log("Mensaje enviado a la consola");
console.warn("Soy un mensaje tipo warning");
console.error("Soy mensaje de error");
console.info("soy un mensaje tipo info");

alert("Hola bienvenido a mi sitio")

prompt("Cuantos anos tienes ?")

/* variables */
let grupo;
let semestre=5;
let pedidoFinalizado = true;
let estado = "Nuevo Leon";

grupo = "Grupo 52";
semestre = 6;

document.write(`Radico en ${estado} y curso el ${semestre} 
                 semestre y mi grupo es ${grupo}`);

document.write(`<article>
                    <h2>Titulo del articulo<h2> 
                    <p>Texto del parrafo </p>
                </article>`);

const PORCENTAJE_COMISION = 0.1;

PORCENTAJE_COMISION > 3.33

/*Acceder a un elemnto de la pagina web para realize cambios*/

const titulo = document.getElementById("titulo");

titulo.innerHTML = "JAVASCRIPT";
titulo.style.color = "tomato";

const tituloNuevo = document.getElementById("titulo");

let texto = prompt("que qieres ver en el titulo");

tituloNuevo.innerHTML = texto;

