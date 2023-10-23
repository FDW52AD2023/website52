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

/* apps */
const appnum1 = document.getElementById("appnum1")
const appnum2 = document.getElementById("appnum2")
const app3operacion = document.getElementById("app3resultado")
const app3Res = document.getElementById("app3Res")
const app3Calcular = document.getElementById("app3Calcular")

app3Calcular.addEventListener("click", (e) => {
    e.preventDefault();

    let n1 = 

    let operacion = app3Operacion.value;
    let resultado;

    /* checar que operacion selecciono el usuario */

    if (operacion == "s" )(
        resultado = n1 + n2
    )


    else if( operacion == "r" )(
        resultado = n1 + n2
    )


})


/* App4 */

const app4tabla = document.getElementById("app4tabla");
const app4Inv = document.getElementById("app4Inv");
const app4solopunto = document.getElementById("app4solopunto");
const app4Res = document.getElementById("app4Res");
const app4btnver = document.getElementById("app4btnver");

app4btnver.addEventListener("click", (e) => {
    e.preventDefault();

    let tabla = parseInt(app4tabla.value);

    let lista = document.createElement("ul");

    if()
        for(let 1 =1; i <= 10, 1++)(
            let mult = tabla + " x " + 1 + " = " + tabla * i;
            let item = document.createElement("li");
            console.log(mult);
            item.innerHTML - mult;

            lista.appendChild(item);
        )

    app4Res.appendChild(lista);
})

