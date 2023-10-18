
document.write("HOLALALA");
document.write("<marquee>GPO 52</marquee>");
document.title= "Titulo desde js";

console.log("Mensaje enviado a la consola");
console.warn("Soy un mensaje tipo warning");
console.error("Soy un mensaje de error");
console.info("Soy un mensaje de info");

alert("HOLA BIENVENIDO");
//preguntar
prompt("Cuantos años tienes");

//variables
let grupo;
let semestre=5;
let pedidoFinalizado = true;
let estado = "Nuevo Leon";

grupo = "Grupo 52";
semestre =6;

document.write(`Radico en el ${estado} curso el ${semestre} semestre y mi grupo es el ${grupo}`);

document.write(`<article>
                    <h2>Titulo del texto</h2>
                    <p>Texto del parrafo</p>
                </article>`);

const PORCENTAJE_COMISION = 0.1;

//PORCENTAJE_COMISION = 3.3;

//Acceder a un elemento de la pagina web para realizar cambios//

const TITULO = document.getElementById("titulo");

TITULO.innerHTML = "Javascript";
TITULO.style.color = "blue";
TITULO.style.border = "7px solid black";
TITULO.style.borderRadius = "5px";

//Preguntar al usuario el titulo

const TITULONUEVO = document.getElementById("titulo");
let texto = prompt("Ingresa un nuevo titulo :]")
TITULONUEVO.innerHTML = texto;


















































