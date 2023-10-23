/* App1 */


/* Obtener las referencias de los elementos a progamar */

const app1Num1 = document.getElementById("app1Num1");
const app1Num2 = document.getElementById("app1Num2");
const app1Res = document.getElementById("app1Res");
const app1btnCalcular = document.getElementById("app1btnCalcular");


app1btnCalcular.addEventListener("click", (e) => {
        e.preventDefault();

        let num1 = parseInt(app1Num1.value);
        let num2 = parseInt(app1Num2.value);


        let suma = num1 + num2;

        app1Res.value = suma;

});

/*  */


const app2Texto = document.getElementById("app2Texto");
const app2Veces = document.getElementById("app2Veces");
const app2Res = document.getElementById("app2Res");
const app2btnCalcular = document.getElementById("app2btnRepetir");

app2BtnRepetir.addEventListener("click", (e) => {
    e.preventDefault();
    let texto = app2Texto.value;
    let veces = parseInt.apply(app2Veces.value);
    let resultado = texto.repeat(veces);

    app2Res.value = resultado;
})