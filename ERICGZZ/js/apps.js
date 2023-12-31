/* App1 */

/* Obtener las referencias de los elementos a programar */
const app1Num1 = document.getElementById("app1Num1");
const app1Num2 = document.getElementById("app1Num2");
const app1Res = document.getElementById("app1Res");

const app1BtnCalcular = document.getElementById("app1BtnCalcular");

app1BtnCalcular.addEventListener("click", (e) => {  /* addEventListener es para que, al presionar el boton, se ejecute el evento después del () => */
    e.preventDefault(); /* para prevenir que recargue el servidor*/

    let num1 = parseInt(app1Num1.value);  /* toma el valor de la caja app1Num1, o sea el valor de ese input*/
    let num2 = parseInt(app1Num2.value);
    let suma = num1 + num2;

    app1Res.value = suma;
});

/* App2 */
const app2Texto = document.getElementById("app2Texto");
const app2Veces = document.getElementById("app2Veces");
const app2Res = document.getElementById("app2Res");
const app2BtnRepetir = document.getElementById("app2BtnRepetir");

app2BtnRepetir.addEventListener("click", (e) => {
    e.preventDefault();

    let texto = app2Texto.value;
    let veces = parseInt(app2Veces.value);
    let resultado = texto.repeat(veces);    /* repeat para que repita las n veces especificadas entre ( ) */

    app2Res.value = resultado;
});