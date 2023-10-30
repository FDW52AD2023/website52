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

/*
for(let cont = 1; cont <=10; cont ++){
    console.log(cont);
}
*/

//App 3//

const app3Num1 = document.getElementById("app3Num1");
const app3Num2 = document.getElementById("app3Num2");
const app3Operacion = document.getElementById("app3Operacion");
const app3Res = document.getElementById("app3Res");
const app3BtnCalcular = document.getElementById("app3BtnCalcular")

app3BtnCalcular.addEventListener("click",(e) =>{
    e.preventDefault();

    let n1 = parseInt(app3Num1.value);
    let n2 = parseInt(app3Num2.value);
    let operacion = app3Operacion.value;
    let resultado;

    //checar qye operacion seleccciono el usuario//
    /*if(operacion == "s"){
        resultado = n1 + n2;
    }
    else if(operacion == "r"){
        resultado = n1 - n2; 
    }
    else if(operacion == "m"){
        resultado = n1 * n2; 
    }
    else if(operacion == "d"){
        resultado = n1 / n2; 
    }*/

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

    app3Res.value =resultado;
});

//APP 4//
const app4Tabla = document.getElementById("app4Tabla");
const app4Inv = document.getElementById("app4Inv");
const app4SoloPunto = document.getElementById("app4SoloPunto");
const app4Res = document.getElementById("app4Res");
const app4BtnVer = document.getElementById("app4BtnVer");

    /*
    app4BtnVer.addEventListener("click", (e) => {
    e.preventDefault();*/


    function mostrarTabla(){
    let tabla = parseInt(app4Tabla.value);
    let lista = document.createElement("ul");

    if( !app4Inv.checked ){
        for (let i=1; i <= 10; i++){
            
            let resMult =app4SoloPunto.checked ? ".".repeat(tabla * i) : tabla * i;

            /*let resMult;
            if(app4SoloPunto.checked){
                resMult = ".".repeat(tabla * i)
            }
            else{
                resMult = tabla * i;
            }
            */

            let mult = tabla + "X" + i +"="+ resMult;
            let item = document.createElement("li");
            item.innerHTML=mult;
            lista.appendChild(item);
        }

    }
    else {
        for (let i=10; i >= 1; i--){

            let resMult= app4SoloPunto.checked ? ".".repeat(tabla*i) : tabla*i;
            /*let resMult;
            if(app4SoloPunto.checked){
                resMult = ".".repeat(tabla * i)
            }
            else{
                resMult = tabla * i;
            }
            */
            let mult = tabla + "X" + i +"="+ resMult;
            let item = document.createElement("li");
            item.innerHTML=mult;
            lista.appendChild(item);
        }

    }
    app4Res.innerHTML="";
    app4Res.appendChild(lista);

    
}

app4BtnVer.addEventListener("click", (e) =>{
    e.preventDefault();
    mostrarTabla()
});

app4Inv.addEventListener("change", (e) =>{
    mostrarTabla()
});
app4SoloPunto.addEventListener("change", (e) =>{
    mostrarTabla()
});


//App 5//
const app5Color = document.getElementById("app5Color");
const app5Borde = document.getElementById("app5Borde");
const app5Grosor = document.getElementById("app5Grosor");
const app5Tipo = document.getElementById("app5Tipo");
const resultado5 = document.getElementById("resultado5");
const app5BtnVer = document.getElementById("app5BtnVer");

function actualizarborde() {
    const posicion = app5Borde.value;
    const grosor = app5Grosor.value;
    const tipo = app5Tipo.value;
    const borde = `${grosor} ${tipo} black`;

    // Reiniciar las propiedades de borde antes de aplicar el nuevo estilo//
    resultado5.style.border = 'none';
    resultado5.style.borderTop = 'none';
    resultado5.style.borderRight = 'none';
    resultado5.style.borderBottom = 'none';
    resultado5.style.borderLeft = 'none';


    if (posicion === 'all') {
        resultado5.style.border = borde;
         // Construye el nombre de la propiedad de estilo de borde de manera dinámica//
    } else {
        resultado5.style['border' + posicion.charAt(0).toUpperCase() + posicion.slice(1)] = borde;
    }
}

app5BtnVer.addEventListener("click", (e) =>{
    e.preventDefault();
    actualizarborde()
});
app5BtnVer.addEventListener("click" , (e) => {
    actualizarborde()
});

app5BtnVer.addEventListener("click", (e) => {
    const colorElegido = app5Color.value;
        // Actualiza el color de fondo del rectángulo para reflejar la selección del usuario
        resultado5.style.backgroundColor = colorElegido;
});


//App 6//
function perfecto(numero){
    let divisor = 1
    let suma = 0;
    do{
        if(numero % divisor == 0){
            suma += divisor; 
        }
        divisor++;
    }while(divisor < numero);
    return numero == suma;
    }

const app6Ini = document.getElementById("app6Ini");
const app6Fin = document.getElementById("app6Fin");
const app6Res = document.getElementById("app6Res");
const app6BtnVer = document.getElementById("app6BtnVer");
const lista = document.createElement("ol");

app6BtnVer.addEventListener("click" , (e) =>{
    e.preventDefault();

    let ini = parseInt(app6Ini.value);
    let fin = parseInt(app6Fin.value);
    

    if(ini > fin){
        let aux = ini
        ini = fin
        fin = aux
    }

    
    /*if(ini > fin){
        ini = parseInt(app6Fin.value);
        fin = parseInt(app6Ini.value);
    }*/

    let numero = ini;

    
    while(numero <= fin){

        /*si es perfecto o no*/
        if(perfecto(numero)){
            let item = document.createElement("li");
            item.innerHTML = numero;
            lista.appendChild(item);
        }
        numero++;
    }
    app6Res.innerHTML="";
    app6Res.appendChild(lista);
});



















































































































