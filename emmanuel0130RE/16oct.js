
document.write("Hola a todos");
document.title="titulo desde js";
document.write ("<marquee>Grupo 52</marquee>")

console.log("mensaje enviado a la consola")
console.warn("soy un mensaje tipo warning")
console.info("soy mensaje de tipo info")
console.error("soy msj de error")
alert("hola binevenido a mi sitio")
prompt("Cuantos años tienes")
//variables
let grupo;
let semestre=5;
let pedidoFinalizado = true;
let estado = "Nuevo Leon"

grupo= "grupo 52"

document.write(`Radico en ${estado} y curso el ${semestre}to semestre y mi grupo es ${grupo}`)
document.write(`<article> <h2> titulo del articulo </h2>  <p> Texto del parrafo </p> </article>`);

const PORCENTAJE_COMISION =0.1;
//PORCENTAJE_COMISION = 3.1;

//acceder a un elemento de la pagina para havcerle un cambio
const titulo = document.getElementById("titulo");
console.log(titulo);
titulo.innerHTML="Javascript";
titulo.style.color="red";
titulo.style.border="3px solid black";
titulo.style.borderRadius="5px";
//escribir codigo que pregunte al ususaario un titulo que desee colocar
//en el h1 con id titulo

const tituloNuevo = document.getElementById("titulo");
let texto = prompt("Que quieres ver en el titulo")
tituloNuevo.innerHTML = texto;