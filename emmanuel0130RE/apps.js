//App1
/* Obtener las referencias de los elementos a programar */
const app1Num1 = document.getElementById("app1Num1");
const app1Num2 = document.getElementById("app1Num2");
const app1Res = document.getElementById("app1Res");
const app1BtnCalcular = document.getElementById("app1BtnCalcular");

app1BtnCalcular.addEventListener("click",(e) => {
    e.preventDefault();

    let num1 = parseInt(app1Num1.value) ;
    let num2 = parseInt(app1Num2.value) ;
    let suma = num1 + num2;


    app1Res.value = suma;
});
//App 2
const app2texto = document.getElementById("app2texto");
const app2veces = document.getElementById("app2veces");
const app2Res = document.getElementById("app2Res");
const app2BtnRepetir = document.getElementById("app2BtnRepetir");

app2BtnRepetir.addEventListener("click", (e) => {
    e.preventDefault();
    let texto = app2texto.value;
    let veces= parseInt(app2veces.value);
    let resultado = texto.repeat(veces);

    app2Res.value=resultado;

});