document.write("hola a todos");     
document.write("<marquee>Grupo 52</marquee>");
document.title = "Titulo desde JS;" 

console.log("Mensaje enviado a la consola"); 
console.warn("Soy un mensaje tipo warning");  
console.error("Soy un mensaje tipo error"); 
console.info("Soy un mensaje tipo info"); 

alert("Hola, bienvenido a mi sitio"); 
prompt("¿Cuántos años tienes?")



let grupo; 
let semestre=5;
let pedidoFinalizado = true;
let estado = "Nuevo Leon";

grupo = "Grupo 52"; 
semestre = 6;

document.write(`Radico en ${estado}
                y curso el ${semestre} semestre
                y mi grupo es ${grupo}`);


document.write(`<article>
                    <h2>Titulo del articulo</h2>
                    <p>Texto del párrafo</p>
                </article>`);

const PORCENTAJE_COMISION = 0.1;  



const titulo = document.getElementById("titulo");   
titulo.innerHTML ="Javascript"; 
titulo.style.color = "tomato";  
titulo.style.border = "3px solid black";    
titulo.style.borderRadius = "5px";


const tituloNuevo = document.getElementById("titulo");
let texto = prompt("Escribe un titulo:");
tituloNuevo.innerHTML = texto;