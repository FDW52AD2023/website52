
document.write("Hola a todos");
document.write("<marquee>Grupo 52</marquee>");
document.title = "Titulo desde JS";

console.log("Mensaje enviado a la consola");
console.warn("Soy un mensaje tipo warning");
console.error("Soy un mensaje de error");
console.info("Soy un mensaje tipo info");

alert("Hola bienvenido a mi sitio");

prompt("¿Cuántos años tienes?");

// Variables
let grupo;
let semestre=5;
let pedidoFinalizado = true;
let estado = "Nuevo Leon";

grupo = "Grupo 52";
semestre = 6;

document.write(`Radico en ${estado}
                y curso el ${semestre}
                semestre y mi grupo es el ${grupo}`)