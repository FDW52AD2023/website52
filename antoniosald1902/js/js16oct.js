document.write("hola a todos");
document.write("<marquee>Grupo 52</marquee>");
document.title = "Titulo desde JS;"

console.log("mensaje enviado a la consola");
console.warn("Soy un mensaje tipo warning");
console.error("Soy un mensaje tipo error");
console.info("soy un mensaje tipo info");

alert("hola bienvenido a mi sitio");
prompt("Cuantos años tienes?");

let grupo;
let semestre=5;
let pedidoFinalizado = true;
let estado = "Nuevo leon";

grupo = "Grupo 52";
semestre = 5;

document.write(`Radico en ${estado}
                y curso el ${semestre} semestre
                y mi grupo es el ${grupo}`);

document.write(`<article>
                    <h2>titulo del articulo</h2>
                    <p>texto del parrafo</p>
                </article>`);

const PORCENTAJE_COMISION = 0.1;

const titulo = document.getElementById("titulo");

titulo.innerHTML ="javascript";
titulo.style.color = "tomato";
titulo.style.border = "3px solid black";
titulo.style.borderRadius = "5px";

/*cambia el titulo por uno que haya puesto el usuario*/
const tituloNuevo = document.getElementById("titulo");
let texto = prompt("escribe un titulo:");
tituloNuevo.innerHTML = texto;