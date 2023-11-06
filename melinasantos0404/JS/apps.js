/*Apps */

/*Obtener las referencias de los elementos a programar */
const app1Num1 = document.getElementById("app1Num1");
const app1Num2 = document.getElementById("app1Num2");
const app1Res = document.getElementById("app1Res");
const app1BtnCalcular = document.getElementById("app1BtnCalcular")

app1BtnCalcular.addEventListener("click", (e) => {
    e.preventDefault();
    let num1 =  parseInt(app1Num1.value);
    let num2 = parseInt(app1Num2.value);
    let suma = num1 + num2;
    app1Res.value = suma;
});

/*App2 */
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



/*APP6*/
function perfecto(numero){
    let divisor = 1
    let suma = 0;
    do{
    if(numero % divisor == 0) {
    suma += divisor;
    }
    divisor++;
    }while( divisor < numero );
    return numero == suma;
    }
    
    const app6Ini = document.getElementById("app6Ini")
    const app6Fin = document.getElementById("app6Fin")
    const app6Res = document.getElementById("app6Res")
    const app6BtnVer = document.getElementById("app6BtnVer")
    const lista = document.createElement("ol")
    app6BtnVer.addEventListener("click", (e) =>{
    e.preventDefault();
    
    let ini = parseInt(app6Ini.value);
    let fin = parseInt(app6Fin.value);
    
    if(ini > fin){
    let aux = ini
    ini = fin
    fin = aux
    }
    
    let numero = ini;
    while( numero <= fin ){
    /*checar si es perfecto */
    if(perfecto(numero)){
    let item = document.createElement("li");
    item.innerHTML = numero;
    lista.appendChild(item);
    }
    numero++;
    }
    app6Res.innerHTML = "";
    app6Res.appendChild(lista);
    });

/*app7*/
const app7Id =document.getElementById ("app7Id");
const app7Nombre = document.getElementById("app7Nombre");
const app7Altura = document.getElementById("app7Altura");
const app7Peso = document.getElementById("app7Peso");
const app7Imagen = document.getElementById ("app7Imagen");
const app7BtnBuscar = document.getElementById ("app7BtnBuscar");



app7BtnBuscar.addEventListener("click", e => {
    e.preventDefault();
    let id= app7Id.value;
    let url ="https://pokeapi.co/api/v2/pokemon/" + id;

     fetch (url)
     .then(response => response.json())
     .then (data => mostrarDatos(data));

});

function mostrarDatos (data){
    console.log(data);
    app7Nombre.innerHTML= "Nombre: "+ data.name;
    app7Altura.innerHTML = "Altura: " + data.height;
    app7Peso.innerHTML = "Peso: " + data.weight;
    app7Imagen.src = data.sprites.other.home.front_default;

}



