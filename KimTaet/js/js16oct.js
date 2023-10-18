document.write("Hola a todos");
document.write("<marquee>Grupo 52</marquee>");
document.title = "Titulo desde js";

console.log("Mensjae enviado a la consola");
console.warn("Soy un mensaje tipo warning");
console.error("Soy mensaje de error");
console.info("Soy un mensaje tipo info");

alert("Hola Bienvenido a mi sitio");

prompt("Cuantos años tienes? ")

/* Variables */
let grupo;
let semestre = 5;
let pedidoFinalizado = true;
let estado = "Nuevo Leon";

grupo = "Grupo 52";
semestre = 5;
document.write(`Radico en ${estado}
                y curso el ${semestre} semestre
                y mi grupo es ${grupo}`);

document.write(`<article>
                    <h2>Titulo del articulo</h2>
                    <p>Texto del Parrafo</p>
                </article>`);

const PORCENTAJE_COMICION = 0.1;

// Acceder a un elemento de la pagina web para realizarle cambios
const titulo = document.getElementById("titulo");
// Para revisar si existe el elemento
//console.log(titulo)

titulo.innerHTML = "Javascript";
titulo.style.color = "green";
titulo.style.border = "3px solid black";
titulo.style.borderRadius = "5px";

//Escribe codigo que pregunte al usuario un titulo
// que desea colocar en el h1 con id titulo

const TituloNuevo = document.getElementById("titulo");
let texto = prompt("¿Que titulo quieres poner?");
TituloNuevo.innerHTML = texto;