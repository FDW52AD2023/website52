
/* App 7 */

const app7Id = document.getElementById("app7Id");
const app7Nombre = document.getElementById("app7Nombre");
const app7Altura = document.getElementById("app7Altura");
const app7Peso = document.getElementById("app7Peso");
const app7Imagen = document.getElementById("app7Imagen");
const app7BtnBuscar = document.getElementById("app7BtnBuscar")

app7BtnBuscar.addEventListener("click", e => {
    e.preventDefault();

    let id = app7Id.value;
    let url = "https://pokeapi.co/api/v2/pokemon/" + id;

    fetch(url)
        .then(response => response.json())
        .then(data => mostrarDatos(data));


});

function mostrarDatos(data){
    console.log(data);
    app7Nombre.innerHTML = "Nombre: " + data.name;
    app7Altura.innerHTML = "Altura: " + data.height;
    app7Peso.innerHTML = "Peso: " + data.weight;
    app7Imagen.src = data.sprites.other.home.front_default;
};

/* App6 */

function perfecto(numero) {

    let divisor = 1;
    let suma = 0;

    do {
        if (numero % divisor == 0) {
            suma += divisor;
        }
        divisor++;
    } while ( divisor < numero );

    return numero == suma;
}

const app6Ini = document.getElementById("app6Ini");
const app6Fin = document.getElementById("app6Fin");
const app6Res = document.getElementById("app6Res");
const app6BtnVer = document.getElementById("app6BtnVer");
const lista = document.createElement("ol");

app6BtnVer.addEventListener("click", (e) => {
    
    e.preventDefault();

    let ini = parseInt(app6Ini.value);
    let fin = parseInt(app6Fin.value);
    
    if (ini > fin) {
        let aux = ini
        ini = fin
        fin = aux
    }
    
    let numero = ini;

    while ( numero <= fin) {
        
        /* Checar si es perfecto */

        if ( perfecto(numero)) {
            
            let item = document.createElement("li");
            item.innerHTML = numero;
            lista.appendChild(item);
        }

        numero++;
    }

    app6Res.innerHTML = '';

    app6Res.appendChild(lista)

});

/* Práctica */

function aplicarBorde() {
    var borde = document.getElementById("borde").value;
    var color = document.getElementById("color").value;
    var grosor = document.getElementById("grosor").value + "px";
    var tipo = document.getElementById("tipo").value;

    var estiloBorde = grosor + " " + tipo + " " + color;

    switch(borde) {
        case "todos":
            document.getElementById("pruebaDiv").style.border = estiloBorde;
            break;
        case "superior":
            document.getElementById("pruebaDiv").style.borderTop = estiloBorde;
            break;
        case "inferior":
            document.getElementById("pruebaDiv").style.borderBottom = estiloBorde;
            break;
        case "izquierdo":
            document.getElementById("pruebaDiv").style.borderLeft = estiloBorde;
            break;
        case "derecho":
            document.getElementById("pruebaDiv").style.borderRight = estiloBorde;
            break;
        default:
            break;
    }
}

function restablecerDiv() {
    document.getElementById("pruebaDiv").style.border = "none";
    document.getElementById("pruebaDiv").style.borderTop = "none";
    document.getElementById("pruebaDiv").style.borderBottom = "none";
    document.getElementById("pruebaDiv").style.borderLeft = "none";
    document.getElementById("pruebaDiv").style.borderRight = "none";
    
    document.getElementById("borde").value = "todos";
    document.getElementById("color").value = "#000000";
    document.getElementById("grosor").value = "";
    document.getElementById("tipo").value = "punteado";
}



/* App4 */

const app4Tabla = document.getElementById("app4Tabla")
const app4Inv = document.getElementById("app4Inv")
const app4SoloPunto = document.getElementById("app4SoloPunto")
const app4Res = document.getElementById("app4Res")
const app4BtnVer = document.getElementById("app4BtnVer")

function mostrarTabla() {

    let tabla = parseInt(app4Tabla.value);
    let lista = document.createElement("ul");

    if ( !app4Inv.checked ) {
        for(let i = 1 ; i <= 10 ; i++) {

            let resMult = app4SoloPunto.checked ? ".".repeat(tabla * i) : tabla * i;
            
            /* let resMult;
            if(app4SoloPunto.checked) {
                resMult = ".".repeat(tabla * i);
            }
            else {
                resMult = tabla * i;
            } */

            let mult = tabla + " X " + i + " = " + resMult;
            let item = document.createElement("li");
            item.innerHTML = mult;
    
            lista.appendChild(item);
        }
    }
    else {
        for(let i = 10 ; i >= 1 ; i--) {

            let resMult = app4SoloPunto.checked ? ".".repeat(tabla * i) : tabla * i;

            /* let resMult;
            if(app4SoloPunto.checked) {
                resMult = ".".repeat(tabla * i);
            }
            else {
                resMult = tabla * i;
            } */

            let mult = tabla + " X " + i + " = " + resMult;
            let item = document.createElement("li");
            item.innerHTML = mult;
    
            lista.appendChild(item);
        }
    }

    app4Res.innerHTML = "";
    app4Res.appendChild(lista)
}

app4BtnVer.addEventListener("click", (e) => {
    e.preventDefault();

    mostrarTabla();
    
});

app4Inv.addEventListener("change", (e) => {
    mostrarTabla();
});

app4SoloPunto.addEventListener("change", (e) => {
    mostrarTabla();
});



/* for(let cont = 1 ; cont <= 10 ; cont++) {
    console.log(cont);

}
 */


/* App3 */

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

    /* Checar que operación seleccionó el usuario */

    if ( operacion == "s" ) {
        resultado = n1 + n2;
    }
    else if ( operacion == "r" ) {
        resultado = n1 - n2;
    }
    else if ( operacion == "m" ) {
        resultado = n1 * n2;
    }
    else if ( operacion == "d" ) {
        resultado = n1 / n2;
    }

    /* switch(operacion) {
        case "s": resultado = n1 + n2;
                  break
            
        case "r": resultado = n1 - n2;
                  break;
            
        case "m": resultado = n1 * n2;
                  break;
           
        case "d": resultado = n1 / n2;
                  break;
    } */

    app3Res.value = resultado;
    
});





/* App 1 */

/* Obtener las referencias de los elementos a programar */

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

/* 
   app1Num1        HTML Input
   app1Num1        Objeto en JS que permite controlar el HTML 
   num1            Es una variable en JS que almacena el número 
                   que está en el objeto appNum1
   input           Entrada estándar (Teclado)
   num1

   num1 = input("Ingresa algo")
*/

/* App2 */

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