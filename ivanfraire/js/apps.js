// App1

// Obtener las referencias de los elementos a programar 
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

// App2

const app2Texto = document.getElementById("app2Texto");
const app2Veces = document.getElementById("app2Veces");
const app2Res = document.getElementById("app2Res");
const app2BtnRepetir = document.getElementById("app2BtnRepetir");

app2BtnRepetir.addEventListener("click", (e) => {
    e.preventDefault();

    let texto = app2Texto.value;
    let veces = parseInt(app2Veces.value);
    let resultado = texto.repeat(veces);

    app2Res.value = resultado;
});

// App3

const app3Num1 = document.getElementById("app3Num1");
const app3Num2 = document.getElementById("app3Num2");
const app3Operacion = document.getElementById("app3Operacion");
const app3Res = document.getElementById("app3Res");
const app3BtnCalcular = document.getElementById("app3BtnCalcular");

app3BtnCalcular.addEventListener("click", (e) => {
    e.preventDefault();

    let n1 = parseInt(app3Num1.value);
    let n2 = parseInt(app3Num2.value);

    let operacion = app3Operacion.value;
    let resultado;

// checar que operacion selecciono el usuario
/*     if( operacion == "s"){
        resultado = n1 + n2;
    }
    else if( operacion == "r"){
        resultado = n1 - n2;
    }
    else if( operacion == "m"){
        resultado = n1 * n2;
    }
    else if( operacion == "d"){
        resultado = n1 / n2;
    } */

    switch(operacion){
        case "s" : resultado = n1 + n2;
                    break;
        case "r" : resultado = n1 - n2;
                    break;
        case "m" : resultado = n1 * n2;
                    break;
        case "d" : resultado = n1 / n2;
                    break;
    }

    app3Res.value = resultado;
});

for(let cont=1 ; cont <= 10 ; cont++ ) {
    console.log("Numero",cont);
}

// App4

const app4Tabla = document.getElementById("app4Tabla");
const app4Inv = document.getElementById("app4Inv");
const app4SoloPunto = document.getElementById("app4SoloPunto");
const app4Res = document.getElementById("app4Res");
const app4BtnVer = document.getElementById("app4BtnVer");

app4BtnVer.addEventListener("click", (e) => {
    e.preventDefault();

    let tabla = parseInt(app4Tabla.value);

    let lista = document.createElement("ul");

    if( !app4Inv.checked ){
        for(let i=1; i <= 10 ; i++){
            let mult = tabla + " x " + i + " = " + tabla * i;
            let item = document.createElement("li");
            item.innerHTML = mult;
            lista.appendChild(item);
        }
    }

    else{
        for(let i=10; i >= 1 ; i--){
            let mult = tabla + " x " + i + " = " + tabla * i;
            let item = document.createElement("li");
            item.innerHTML = mult;
            lista.appendChild(item);
        }
    }
    
    app4Res.innerHTML = "";
    app4Res.appendChild(lista);
});

app4BtnVer.addEventListener("click", (e) =>{
    e.preventDefault();

    mostrarTabla();
}); 

app4Inv.addEventListener("change", () => {

    mostrarTabla();
});

app4SoloPunto.addEventListener("change", () => {

    mostrarTabla();
});

// App5

const app5BtnAplicar = document.getElementById("app5BtnAplicar");

function actualizarBorde(){
    const app5Borde = document.getElementById("app5Borde").value;
    const app5Grosor = document.getElementById("app5Grosor").value + "px";
    const app5Color = document.getElementById("app5Color").value;
    const app5Tipo = document.getElementById("app5Tipo").value;
    const divPrueba = document.getElementById("divPrueba");

    const estiloDiv = app5Grosor + " " + app5Tipo + " " + app5Color;
    
    switch (app5Borde){
        case "ninguno":
            divPrueba.style.border = "none";
            break
        case "todos" : 
            divPrueba.style.border = estiloDiv;
            break;
        case "superior" : 
            divPrueba.style.borderTop = estiloDiv;
            break;
        case "inferior" : 
            divPrueba.style.borderBottom = estiloDiv;
            break;
        case "izquierdo" : 
            divPrueba.style.borderLeft = estiloDiv;
            break;
        case "derecho" : 
            divPrueba.style.borderRight = estiloDiv;
            break;
        default:
            break;
    }}

app5BtnAplicar.addEventListener("click", (e) => {
    e.preventDefault();

    actualizarBorde();
})