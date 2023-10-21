
document.write("Hola a todos");
document.write("<marquee>Grupo 52</marquee>");
document.title = "titulo desde js";


console.log("Mensaje enviado a la consola");
console.warn("Soy un mensaje tipo warngin");
console.error("soy un mensaje de error");
console.info("soy un mensaje tipo info");


alert("Hola bienvenido a mi sitio")

prompt("Cuantos años tienes")


/*   */
let Grupo;
let semestre=5;
let pedidoFinalizado = true
let estado = "Nuevo Leon";

Grupo = "Grupo 52";
semestre = 6;

document.write(`Radico en ${estado}
                y curso el ${semestre}
                semestre y mi grupo es ${Grupo}`)

document.write(`<article>
                <h2>Titulo del articulo </h2>
                <p> Texto del parrafo </p>
                <article>`);

const PORC_COMISION = 0.1;

// PORC_COMISION = 3.3;

/* Acceder a un elemento de la pagina web para realizarle
cambios */

const titulo =document.getElementById("titulo");

titulo.innerHTML = "Javascript";
titulo.style.color = "tomato";
titulo.style.border = "3px solid black";
titulo.style.borderRadius = "5px";

/*  escribir codigo que pregunte al usuario un titulo
que desee colocar en el h1 con id titulo */

const tituloNuevo = document.getElementById("titulo");

let texto = prompt("Que quieres ver en el titulo");

tituloNuevo.innerHTML = texto;