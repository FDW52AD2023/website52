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
/* 
for(let x=1;x=>10;x--){
    console.log(x);
} */
/* app 3 */
const app3Num1 = document.getElementById("app3Num1");
const app3Num2 = document.getElementById("app3Num2");
const app3Operacion = document.getElementById("app3Operacion");
const app3Res = document.getElementById("app3Res");
const app3BtnCalcular =document.getElementById("app3BtnCalcular");

app3BtnCalcular.addEventListener("click",(e) => {
    e.preventDefault();

    let n1 = parseInt(app3Num1.value);
    let n2 = parseInt(app3Num2.value);
    let operacion = app3Operacion.value;
    let resultado;
    /* checar la operacion que selecciono el usuario */
    /* if(operacion == "s" ){
        resultado = n1 + n2;
    }
    else if(operacion=="r"){
        resultado=n1-n2;
    }
    else if(operacion=="m"){
        resultado=n1*n2;
    }
    else if(operacion=="d"){
        resultado=n1/n2;
    } */

    switch(operacion){
        case "s": resultado=n1+n2
            break;
        case "r": resultado=n1-n2
            break;
        case "m": resultado=n1*n2
            break;
        case "d": resultado=n1/n2
            break;

    }
    app3Res.value = resultado;
});
/* App 4 */
const app4Tabla = document.getElementById("app4Tabla");
const app4Inv = document.getElementById("app4Inv");
const app4Solopunto = document.getElementById("app4Solopunto");
const app4Res = document.getElementById("app4Res");
const app4BtnVer = document.getElementById("app4BtnVer");

function mostrartabla(){


    let tabla = parseInt(app4Tabla.value);

    let lista = document.createElement("ul");

    if(!app4Inv.checked){
        for(let i=1; i <=10;i++){

            let resMult =app4Solopunto.checked?".".repeat(tabla*i):tabla*i;
            /* if(app4Solopunto.checked){
                resMult=".",repeat(tabla*i);
            }
            else{
                resMult= tabla*i;
            } */
        let mult=tabla + "x"+i+"="+ resMult;
        let item=document.createElement("li");
        item.innerHTML=mult;
        lista.appendChild(item);
        }
    }
    else{
        for(let i=10; i>=1;i--){
            let resMult =app4Solopunto.checked?".".repeat(tabla*i):tabla*i;
            /* if(app4Solopunto.checked){
                resMult=".",repeat(tabla*i);
            }
            else{
                resMult= tabla*i;
            } */
            let mult=tabla + "x"+i+"="+ resMult;
            let item=document.createElement("li");
            item.innerHTML=mult;
            lista.appendChild(item);
        }
    }
    app4Res.innerHTML = "";
    app4Res.appendChild(lista);
}
app4BtnVer.addEventListener("click", (e) => {
    e.preventDefault()
    mostrartabla()
});
app4Inv.addEventListener("click", (e) => {
    mostrartabla()
});
app4Solopunto.addEventListener("click", (e) => {
    mostrartabla()
})
/* App 5 */
const app5Borde = document.getElementById("app5Borde");
const app5Color = document.getElementById("app5Color");
const app5Grosor = document.getElementById("app5Grosor");
const app5Tipo = document.getElementById("app5Tipo");
const app5res = document.getElementById("app5res");
const app5BtnAplicar = document.getElementById("app5BtnAplicar");

app5BtnAplicar.addEventListener("click", (e) => {
    e.preventDefault();
    let opciones = app5Borde.value;
    let color = app5Color.value;
    let grosor = app5Grosor.value + "px";
    let tipo = app5Tipo.value;

    if(opciones == "T"){
        app5res.style.borderColor =  color;
        app5res.style.borderWidth = grosor;
        app5res.style.borderStyle = tipo;
    }
    else if(opciones == "S"){
        app5res.style.borderTopColor =  color;
        app5res.style.borderTopWidth = grosor;
        app5res.style.borderTopStyle = tipo;
    }
    else if(opciones == "I"){
        app5res.style.borderBottomColor =  color;
        app5res.style.borderBottomWidth = grosor;
        app5res.style.borderBotoomStyle = tipo;
    }
    else if(opciones == "Iz"){
        app5res.style.borderLeftColor =  color;
        app5res.style.borderLeftWidth = grosor;
        app5res.style.borderLeftStyle = tipo;
    }
    else if(opciones == "D"){
        app5res.style.borderRightColor =  color;
        app5res.style.borderRightWidth = grosor;
        app5res.style.borderRightStyle = tipo;
    }
});


/* app 6 */
function Perfecto(Numero){
    let divisor = 1
    let suma = 0;
    do{
        if(Numero%divisor==0){
            suma += divisor;
        }
        divisor++;
    }while( divisor < Numero);
    return Numero==suma;
}


const app6Ini = document.getElementById("app6Ini");
const app6Fi = document.getElementById("app6Fi");
const app6Res= document.getElementById("app6Res");
const app6BtnVer = document.getElementById("app6BtnVer");
const lista = document.createElement("ol");

app6BtnVer.addEventListener("click", (e) => {
    e.preventDefault();
    
    let Ini = parseInt(app6Ini.value);
    let Fin = parseInt(app6Fin.value);

    if(Ini>Fin){
        let aux = Ini;
        Ini=Fin;
        Fin=aux;
    }
    
    /* if(Ini>Fin){
        Ini=parseInt(app6Fin.value);
        Fin=parseInt(app6Ini.value);
    } */
    let Numero = Ini;


    while(Numero <= Fin ){
        /* checar ai es perfecto */
        if(Perfecto(Numero)){
            let item= document.createElement("li");
            item.innerHTML= Numero;
            lista.appendChild(item);
        }
        Numero++;
    }
    app6Res.innerHTML="";
    app6Res.appendChild(lista);

});
/* app 7 */
const app7Id = document.getElementById("app7Id");
const app7nombre = document.getElementById("app7nombre");
const app7altura= document.getElementById("app7altura");
const app7peso= document.getElementById("app7peso");
const app7imagen=document.getElementById("app7imagen");
const app7Btnbuscar = document.getElementById("app7Btnbuscar");

app7Btnbuscar.addEventListener("click", (e) => {
    e.preventDefault();
    let id = app7Id.value;
    let url=  "https://pokeapi.co/api/v2/pokemon/" + id;

    fetch(url)
        .then(response => response.json())
        .then(data => mostrarDatos(data));
});
function mostrarDatos(data){
    console.log(data)
    app7nombre.innerHTML="Nombre: "+ data.name;
    app7altura.innerHTML= "Altura: " + data.height;
    app7peso.innerHTML= "Peso: "+data.weight;
    app7imagen.src = data.sprites.other.home.front_default;
}