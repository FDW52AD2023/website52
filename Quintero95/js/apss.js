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

    app4BtnVer.addEventListener("click" , (e) => {
        e.preventDefault();

        let tabla = parseInt(app4Tabla.value);

        let lista = document.createElement("ul");

        if( !app4Inv.checked ){
            for(let i=1; i <= 10 ; i++){
                let mult = tabla + "X" + i + "=" + tabla * i;
                let item = document.createElement("li");
                item.innerHTML = mult;
                lista.appendChild(item);
            }
        }
        else{
             for(let i=10; i >= 1 ; i--){
            let mult = tabla + "X" + i + "=" + tabla * i;
            let item = document.createElement("li");
            item.innerHTML = mult;
            lista.appendChild(item);
             }
        }

        app4Res.innerHTML = "";
        app4Res.appendChild(lista);

    });
