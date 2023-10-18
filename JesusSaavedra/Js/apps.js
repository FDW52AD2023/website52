//apps1//

//Referencias de los elementos a programar//

const app1Num1 = document.getElementById ("app1Num1");
const app1Num2 = document.getElementById ("app1Num2");
const app1Res = document.getElementById ("app1Res");
const app1BtnCalcular = document.getElementById ("app1BtnCalcular");

app1BtnCalcular.addEventListener("click" , (e) => {
    e.preventDefault();

    let num1= parseInt (app1Num1.value);
    let num2= parseInt (app1Num2.value);
    let suma= num1 + num2;

    app1Res.value = suma ;
});

//APP 2//
const app2Texto = document.getElementById ("app2Texto");
const app2Veces = document.getElementById ("app2Veces");
const app2Res = document.getElementById ("app2Res");
const app2BtnRepetir = document.getElementById ("app2BtnRepetir");

app2BtnRepetir.addEventListener("click", (e)=> {
    e.preventDefault();

    let Texto = app2Texto.value;
    let Veces = parseInt (app2Veces.value);
    let Resultado = Texto.repeat(Veces);

    app2Res.value= Resultado;
});



















