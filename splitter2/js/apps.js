/* App1 */


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
const app2BtnRepetir = document.getElementById("app2BtnRepetir");

app2BtnRepetir.addEventListener("click", (e) => {
    e.preventDefault();

    let texto = app2Texto.value;
    let veces = parseInt(app2Veces.value);
    let resultado = texto.repeat(veces);    

    app2Res.value = resultado;
});

/* EJEMPLO DEL FOR
for(let cont=1 ; cont <=10 ; cont++){ /* inicialización, condición ("mientras se cumpla esta condición"), contador* /
    console.log("Numero",cont);                /* los signos de (++) que están en cont++ determinan que el contador
                                          aumentará de 1 en 1 * /
} */

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
    let operacion = app3Operacion.value; 
    let resultado;

    /* checar qué operación escogió el usuario */
    /* if( operacion == "s" ){ /* operador de comparación es == (doble signo de igual) * /
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


    
    switch (operacion){
        case "s": resultado = n1 + n2;
                  break;
        case "r": resultado = n1 - n2;
                  break;
        case "m": resultado = n1 * n2;
                  break;
        case "d": resultado = n1 / n2;
                  break;
    }

    app3Res.value = resultado;
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

    if(!app4Inv.checked){ 
        for(let i=1 ; i<=10 ; i++){

            let resMUlt;
            if(app4SoloPunto.checked){
                resMult=".".repeat(tabla*i)

            }
            else{
                resMult=tabla*i;
            }
            let mult = tabla + " X " + i + " = " + tabla*i;
            let item = document.createElement("li");
            item.innerHTML = mult;
            lista.appendChild(item); 
        }
    }
    else{
        for(let i=10 ; i>=1 ; i--){ 

            let resMult = app4SooPunto.checked ? ".".repeat(tabla*i) : tabla * i;

            /* let resMUlt;
            if(app4SoloPunto.checked){
                resMult=".".repeat(tabla*i)

            }
            else{
                resMult=tabla*i;
            } */

            let mult = tabla + " X " + i + " = " + tabla*i;
            let item = document.createElement("li");
            item.innerHTML = mult;
            lista.appendChild(item); 
        }
    }

    app4Res.innerHTML = ""; 
    app4Res.appendChild(lista); 
})

app4Inv.addEventListener

/*app 5*/

document.addEventListener("DOMContentLoaded", function() {
    const app5Borde = document.getElementById("app5Borde");
    const app5Color = document.getElementById("app5Color");
    const app5Grosor = document.getElementById("app5Grosor");
    const app5Tipo = document.getElementById("app5Tipo");
    const app5BtnAplicar = document.getElementById("app5BtnAplicar");
    const app5Div = document.getElementById("Test");

    function AplicarBorde() {
        let opcionBorde = app5Borde.value;
        let color = app5Color.value;
        let grosor = parseInt(app5Grosor.value) + "px ";
        let opcionTipo = app5Tipo.value;
        let tipoCSS;

        switch (opcionTipo) {
            case "v":
                tipoCSS = "solid";
                break;
            case "w":
                tipoCSS = "dotted";
                break;
            case "x":
                tipoCSS = "groove";
                break;
            case "y":
                tipoCSS = "dashed";
                break;
            case "z":
                tipoCSS = "double";
                break;
        }

        switch (opcionBorde) {
            case "a":
                app5Div.style.setProperty("border", `${color} ${grosor} ${tipoCSS}`);
                break;
            case "b":
                app5Div.style.setProperty("border-top", `${color} ${grosor} ${tipoCSS}`);
                break;
            case "c":
                app5Div.style.setProperty("border-bottom", `${color} ${grosor} ${tipoCSS}`);
                break;
            case "d":
                app5Div.style.setProperty("border-left", `${color} ${grosor} ${tipoCSS}`);
                break;
            case "e":
                app5Div.style.setProperty("border-right", `${color} ${grosor} ${tipoCSS}`);
                break;
        }
    }

    app5BtnAplicar.addEventListener("click", function(e) {
        e.preventDefault();
        AplicarBorde();
    });
});

/*app6*/

function perfecto(numero){
    let divisor =1
    let suma =0;
    do{
        if(numero % divisor == 0){
            suma+=divisor;
        }
        divisor++;


    }while (divisor < numero);

    if(numero==suma){
        return true;
    }
    else{
        return false;
    }
}

const app6Ini= document.getElementById("app6Ini")
const app6Fin= document.getElementById("app6Fin")
const app6Res = document.getElementById("app6Res")
const app6BtnVer = document.getElementById("app6BtnVer")
const lista = document.createElement("ol");
console.log(app6BtnVer)
app6BtnVer.addEventListener("click", (e) =>{
    e.preventDefault();
    let ini = parseInt(app6Ini.value);
    let fin = parseInt(app6Fin.value);


    

    if (ini>fin){
        let aux = ini
        ini=fin
        fin=aux
    }

    let numero= ini;

    while(numero <= fin){
        if(perfecto(numero)){
            let item=document.createElement("li");
            item.innerHTML=numero;
            lista.appendChild(item);

        }
        numero++;

    }
    app6Res.innerHTML="";
    app6Res.appendChild(lista);
});

/*app 7*/

const app7Id = document.getElementById("app7Id");
const app7Nombre = document.getElementById("app7Nombre");
const app7Altura = document.getElementById("app7Altura");
const app7Peso = document.getElementById("app7Peso");
const app7Imagen = document.getElementById("app7Imagen");
const app7BtnBuscar = document.getElementById("app7BtnBuscar");

app7BtnBuscar.addEventListener("click", e => {
    e.preventDefault();
    let id = app7Id.value;
    let url = "https://pokeapi.co/api/v2/pokemon/" +  id;

    fetch(url)
        .then(response => response.json())
        .then(data => mostrarDatos(data));
});

function mostrarDatos(data){
    app7Nombre.innerHTML = "Nombre: " + data.name;
    app7Altura.innerHTML = "Altura: " + data.height;
    app7Peso.innerHTML = "Peso: " + data.weight;
    app7Imagen.src = data.sprites.other.home.front_default;
};