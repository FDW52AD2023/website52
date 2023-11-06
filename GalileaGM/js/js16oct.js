//cuando es funcion no lleva un = 
//cuando es una objeto si lleva = , la mayoria son verbos
document.write("Hola a todos"); //sirve para escrbir
document.write("<marquee>Grupo 52</marquee>"); //se mueve las letras
document.title= "Titulo desde js"; //atraves de este comando se le puede cambiar el titulo

console.log("Mensaje enviado a la consola");//desde una propiedad  le mandas mensajes a la consola
console.warn("Soy un mensaje de tipo warning");
console.error("Soy un mensaje de error");
console.info("Soy un mensaje de info");


alert("Hola bienvenido a mi sitio");//es una funcion global

prompt("Que bonitos ojos tienes?"); //pregunta cosas

//variables
//declaración de variables
let grupo;
let semestre=5;
let pedidoFinalizado= true;
let estado = "Nuevo Leon";
//asignacion de valores a las variables
grupo="Grupo 52";
semestre=6;

//plantilla con variables
document.write(`Radico en ${estado} y curso el ${semestre} semestre y mi grupo es ${grupo}`);

//plantilla
document.write( `<article>
                        <h2>Titulo del articulo</h2>
                        <p>Texto del parrafo</p>
                </article>`);
//constantes
const PORCENTAJE_COMISION= 0.1;
//PORCENTAJE_COMISION= 3.3;

/*Acceder a un elemento de una pagina web para realizarle un cambio*/

const titulo= document.getElementById ("titulo"); //siempre se utiliza get cuando obtengas algo
console.log(titulo);//es para saber si se obtuvo el id pero al cambiarle el formato aparece las modificaciones actuales

titulo.innerHTML ="Javascript" //es para cambiarle el contenido
titulo.style.color="lightblue"; //es para cambiarle el color de la letra
titulo.style.border="3px solid black";//es para cambiarle el border
titulo.style.borderRadius="5px"; //es para cambiar el estilo del border

//escribir el codigo que pregunte al usuario un titulo que desee colocar en el h1 con id titulo

const tituloNuevo= document.getElementById("titulo");

let texto= prompt("Como quieres llamar al titulo?");

tituloNuevo.innerHTML=texto;

