/*App1*/
/*Obtener las referencias de los elementos a programas*/
const app1Num1=document.getElementById("app1Num1");
const app1Num2=document.getElementById("app1Num2");
const app1Res =document.getElementById("app1Res");
const app1BtnCalcular =document.getElementById("app1BtnCalcular");
/*Que reaccione a un boton que reaccione a un evento*/
/*evento flecha =>*/
/*alert("daleeeeeee clic!!!"); eso aparecera al dale clic como mensaje*/ 
app1BtnCalcular.addEventListener("click", (e) => {
    e.preventDefault(); /**Es para detener el evento al clic */

    let num1=parseInt(app1Num1.value);
    let num2=parseInt(app1Num2.value);
    let suma = num1 + num2;
    app1Res.value = suma ;
    /*app1Res.value ="daleeeeeee clic!!!" ; el primero es la variable y despues del punto es en donde lo quieres */
});

/*App2*/
const app2Texto= document.getElementById("app2Texto");
const app2Veces=document.getElementById("app2Veces");
const app2Res=document.getElementById("app2Res");
const app2BtnRepetir=document.getElementById("app2BtnRepetir");

app2BtnRepetir.addEventListener("click", (e) => {
    e.preventDefault();
    let texto= app2Texto.value;
    let veces=parseInt(app2Veces.value);
    let resultado= texto.repeat(veces);
    app2Res.value =resultado;
});

/* for(let cont=1 ; cont <=10 ; cont++ ) {
    console.log(cont);
}
 for en javascrip practicar para examen*/


/* app3 */

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

    /* checar que operacion elige el usuario */
    /* if(operacion == "S" ){
        resultado = n1 + n2;
    }
    else if( operacion == "R"){
        resultado = n1 - n2;
    }
    else if(operacion == "M"){
        resultado = n1 * n2;
    }
    else if(operacion == "D"){
        resultado = n1 / n2;
    } */
    switch(operacion){
        case "S": resultado = n1 + n2;
                  break;
        case "R": resultado = n1 - n2;
                  break;
        case "M": resultado = n1 * n2;
                  break;
        case "D": resultado = n1 / n2;
                  break;
    }
    app3Res.value = resultado;
});
    /* App4 */
    const app4Tabla = document.getElementById("app4Tabla");
    const app4Inv = document.getElementById("app4Inv");
    const appSoloPunto = document.getElementById("app4SoloPunto");
    const app4Res = document.getElementById("app4Res");
    const app4BtnVer = document.getElementById("app4BtnVer");
    
  function mostrarTabla(){
    let tabla = parseInt(app4Tabla.value);

        let lista = document.createElement("ul");

        if( !app4Inv.checked ){
            for(let i=1; i <= 10 ; i++){
                
                let resMult;
                if(app4SoloPunto.checked){
                    resMult = ".".repeat(tabla * i)
                } 
                else{
                    resMult = tabla * i;
                }

                let mult = tabla + "X" + i + "=" + resMult;
                let item = document.createElement("li");
                item.innerHTML = mult;
                lista.appendChild(item);
            }
        }
        else{
             for(let i=10; i >= 1 ; i--){
                let resMult;
                if(app4SoloPunto.checked){
                    resMult = ".".repeat(tabla * i)
                } 
                else{
                    resMult = tabla * i;
                }
            let mult = tabla + "X" + i + "=" + resMult;
            let item = document.createElement("li");
            item.innerHTML = mult;
            lista.appendChild(item);
             }
        }

        app4Res.innerHTML = "";
        app4Res.appendChild(lista);

  }
    app4BtnVer.addEventListener("click" , (e) => {
        e.preventDefault();

        let tabla = parseInt(app4Tabla.value);

        let lista = document.createElement("ul");

        if( !app4Inv.checked ){
            for(let i=1; i <= 10 ; i++){
                
                let resMult;
                if(app4SoloPunto.checked){
                    resMult = ".".repeat(tabla * i)
                } 
                else{
                    resMult = tabla * i;
                }

                let mult = tabla + "X" + i + "=" + resMult;
                let item = document.createElement("li");
                item.innerHTML = mult;
                lista.appendChild(item);
            }
        }
        else{
             for(let i=10; i >= 1 ; i--){
                let resMult;
                if(app4SoloPunto.checked){
                    resMult = ".".repeat(tabla * i)
                } 
                else{
                    resMult = tabla * i;
                }
            let mult = tabla + "X" + i + "=" + resMult;
            let item = document.createElement("li");
            item.innerHTML = mult;
            lista.appendChild(item);
             }
        }

        app4Res.innerHTML = "";
        app4Res.appendChild(lista);

    app4Inv.addEventListener("change", (e) => {

    })
    
    app4Inv.addEventListener("change", (e) => {
        
    })
    });


/* App 5 */


/* App 6 */
function perfecto(numero){
    let divisor = 1
    let suma = 0
    do{
        if(numero % divisor == 0){
            suma += divisor;
        }
        divisor++;
    }while(divisor < numero);
    return numero == suma;
    /* if(numero == suma){
        return true;
    }
    else{
        return false;
    } */
}

const app6Ini = document.getElementById("app6Ini");
const app6Fin = document.getElementById("app6Fin");
const app6Res = document.getElementById("app6Res");
const app6BtnVer = document.getElementById("app6BtnVer");
const lista = document.createElement("ol")

app6BtnVer.addEventListener("click", (e) => {
    e.preventDefault()

    let inicio = parseInt(app6Ini.value);
    let fin = parseInt(app6Fin.value);

    if(inicio > fin){
        inicio = parseInt(app6Ini.value);
        fin = parseInt(app6Fin.value);
    }

    let numero = inicio;

    while(numero <= fin){

        /* Checar si el numero es perfecto */
        if(perfecto(numero)){
            let item = document.createElement("li")
            item.innerHTML = numero;
            lista.appendChild(item);
        }

        numero++;
    }
    app6Res.appendChild(lista);
})

/* App 7 */

const app7id = document.getElementById("app7Id");
const app7Nombre = document.getElementById("app7Nombre");
const app7Altura = document.getElementById("app7Altura");
const app7Peso = document.getElementById("app7Peso");
const app7Imagen = document.getElementById("app7Imagen");
const app7BtnBuscar = document.getElementById("app7BtnBuscar");

app7BtnBuscar.addEventListener("click", e => {
    e.preventDefault();
    let id = app7id.value;
    let url = "https://pokeapi.co/api/v2/pokemon/" + id;

    fetch(url)
         .then(Response => Response.json())
         .then(data => mostrarDatos(data));
});

function mostrarDatos(data){
    console.log(data);
    app7Nombre.innerHTML = "Nombre:" + data.name;
    app7Altura.innerHTML = "Altura:" + data.height;
    app7Peso.innerHTML = "Peso:" + data.weight;
    app7Imagen.src = data.sprites.other.home.front_default;
}