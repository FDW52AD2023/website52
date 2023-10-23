
document.write("hola a todos");
document.write("<marquee>Grupo 52</marquee>");
document.title= "Titulo desde js";

console.log("Mensaje enviado a la consola");
console.warn("soy un mensaje tipo warninf");
console.error("soy un mensaje de error");
console.info("soy un mensaje de info");

alert("hola bienvenido a mi sitio");

prompt("cuantos años tienes?")

/* variables */
let grupo;
let semestre=5;
let pedidoFinalizado = true
let estado = "Nuevo Leon";

grupo = "Grupo 52";
semestre = 6;

document.write(`Radico en ${estado} 
               y curso el ${semestre}
              semestre y mi grupo es ${grupo}`);


document.write(`<article>
                     <h2>Titulo del articulo </h2>
                     <p>Texto del parrafo</p>
                </article>`);


/* const PORCENTAJE_COMISION */


const titulo = document.getElementById("titulo");

titulo.innerHTML = "Javascript";
titulo.style.color = "tomato";
titulo.styles.border = "3px solid black";
titulo.style.borderRadius = "5px";

/* escirbir el codigo que pregunte al usuario un titulo que desee colocar en el h1 con id titulo*/

const tituloNuevo = document.getElementById("Titulo");

let texto = prompt("Que quieres ver en el titulo");

tituloNuevo.innerHTML = texto;


