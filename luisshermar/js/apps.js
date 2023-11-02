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
            let punto = ".";
            let veces = tabla * i;
            punto = punto.repeat(veces);
            let mult = tabla + " X " + i + " = " + punto;
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
            let punto = ".";
            let veces = tabla * i
            punto = punto.repeat(veces)
            let mult = tabla + " X " + i + " = " + punto;
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

/* App6 */

function Perfecto(numero){

}

const app6Ini = document.getElementById("app6Ini");
const appfin = document.getElementById("app6fin");
const app6Res = document.getElementById("app6Res");
const app6btnVer = document.getElementById("app6btnVer");
const list = document.createElement("ol")


app6btnVer.addEventListener("click", {e} => {
    e.preventDefault()

    let Ini = parseInt(app6Ini.value)
    let fin = parseInt(app6fin.value)
    

    if (Ini > fin) {
        let aux = Ini
        Ini = fin
        Fin = aux
    }

    let numero  = Ini

    while (numero <= fin) {
        console.log(numero);
        numero++;
    }

    if 
});

/*  App 7  */

const app7id = document.getElementById("app7id")
const app7nombre = document.getElementById("app7nombre")
const app7altura = document.getElementById("app7altura")
const app7peso = document.getElementById("app7peso")
const app7imagen = document.getElementById("app7imagen")
const app7buscar = document.getElementById("app7buscar")

app7buscar.addEventListener("click", e => {
    let id = app7id.value
    let url = "https://pokeapi.co/api/v2/pokemon/" + id

    fetch(url)
        .then(Response => Response.json())
        .then(data => mostrarDatos(data));


function mostrarDatos(data){
    app7nombre.innerHTML = "Nombre" + data.name
    app7altura.innerHTML = "altura" + data.height
    app7peso.innerHTML = "Nombre" + data.name




}
    
