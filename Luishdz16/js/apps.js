/* App1 */

/* Obtener las referencias de los elementos a prgramar */
const app1Num1 = document.getElementById("app1Num1");
const app1Num2 = document.getElementById("app1Num2");
const app1Res = document.getElementById("app1Res");
const app1BtnCalcular = document.getElementById("app1BtnCalcular");

app1BtnCalcular.addEventListener("click", (e) => {
    e.preventDefault();

    let num1 = parseInt(app1Num1.value);
    let num2 = parseInt(app1Num2.value);
    let suma = num1 + num2;

    app1Res.value = suma;
});

/* App2 */

const app2Texto = document.getElementById("app2Texto");
const app2Veces = document.getElementById("app2Veces");
const app2Res = document.getElementById("app2Res");
const app2BtnRepetir = document.getElementById("app2BtnRepetir")

app2BtnRepetir.addEventListener("click", (e) => {
    e.preventDefault();

    let texto = app2Texto.value;
    let veces = parseInt(app2Veces.value);
    let resultado = texto.repeat(veces);

    app2Res.value = resultado;
})

/* App 3 */

const app3Num1 = document.getElementById("app3Num1");
const app3Num2 = document.getElementById("app3Num2");
const app3Operacion = document.getElementById("app3Operacion");
const app3Res = document.getElementById("app3Res");
const app3BtnCalcular = document.getElementById("app3BtnCalcular");

app3BtnCalcular.addEventListener("click", (e) => {
    e.preventDefault();

    let n1 = parseInt(app3Num1.value);
    let n2 = parseInt(app3Num2.value);
    let op = (app3Operacion.value);
    let res;

    /* if (op == "s") {
        console.log(n1 )
        console.log(n2) 
        res = n1 + n2;
    } else if (op == "r"){
        res = n1 - n2;
    } else if (op == "m") {
        res = n1 * n2;
    } else {
        res = n1 / n2;
    } */

    switch(op){
        case "s": res = n1 + n2;
            break;
        case "r" : res = n1 - n2;
            break;
        case "m" : res = n1 * n2;
            break;
        case "d" : res = n1 / n2;
            break;
    }

    app3Res.value = res;
})

/* App 4 */

const app4Tabla = document.getElementById("app4Tabla");
const app4Inv = document.getElementById("app4Inv");
const app4SoloPunto = document.getElementById("app4SoloPunto");
const app4Res = document.getElementById("app4Res");
const app4BtnVer = document.getElementById("app4BtnVer");

app4BtnVer.addEventListener("click", (e) => {
    e.preventDefault();

    let tabla = parseInt(app4Tabla.value);
    

    let lista = document.createElement("ul");

    if (app4Inv.checked && app4SoloPunto.checked){
        for(let i = 10 ; i >= 1 ; i--) {
            let mult = tabla + " X " + i + " = " + ".".repeat(tabla * i);
            let item = document.createElement("li");
            item.innerHTML = mult;
            lista.appendChild(item);
        }

    } else if (app4Inv.checked){
        for(let i = 10 ; i >= 1 ; i--) {
            let mult = tabla + " X " + i + " = " + tabla * i;
            let item = document.createElement("li");
            item.innerHTML = mult;
            lista.appendChild(item);
        }
    } else if (app4SoloPunto.checked) {
        for(let i = 1 ; i <= 10 ; i++) {
            let mult = tabla + " X " + i + " = " + ".".repeat(tabla * i);
            let item = document.createElement("li");
            item.innerHTML = mult;
            lista.appendChild(item);
        }
    } else {
        for(let i = 1 ; i <= 10 ; i++) {
            let mult = tabla + " X " + i + " = " + tabla * i;
            let item = document.createElement("li");
            item.innerHTML = mult;
            lista.appendChild(item);
        }
    }

    app4Res.innerHTML = "";
    app4Res.appendChild(lista);
})

/* App 5 */

const app5Borde = document.getElementById("app5Borde");
const app5Tipo = document.getElementById("app5Tipo");
const app5Color = document.getElementById("app5Color");
const app5Grosor = document.getElementById("app5Grosor");
const app5Prueba = document.getElementById("app5Prueba");
const app5VerDiv = document.getElementById("app5VerDiv");


app5VerDiv.addEventListener("click", (e) => {
    e.preventDefault()
    
    if (app5Borde.value == "all") {
        app5Prueba.style.cssText = `border: ${app5Grosor.value} ${app5Tipo.value} ${app5Color.value};`;
    } else if (app5Borde.value == "top") {
        app5Prueba.style.cssText = `border-top: ${app5Grosor.value} ${app5Tipo.value} ${app5Color.value};`;
    } else if (app5Borde.value == "bottom") {
        app5Prueba.style.cssText = `border-bottom: ${app5Grosor.value} ${app5Tipo.value} ${app5Color.value};`;
    } else if (app5Borde.value == "left") {
        app5Prueba.style.cssText = `border-left: ${app5Grosor.value} ${app5Tipo.value} ${app5Color.value};`;
    } else if (app5Borde.value == "right") {
        app5Prueba.style.cssText = `border-right: ${app5Grosor.value} ${app5Tipo.value} ${app5Color.value};`;
    }
})