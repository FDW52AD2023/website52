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
    let resultado= texto.repeat(veces); /*multiplicar texto con numero*/ 
    app2Res.value =resultado;
});
//++ significa que aumenta 1 
/* for (let cont=1; cont<=10; cont++ ){
    console.log("Numero", cont);
} */

/*App3*/
const app3Num1= document.getElementById("app3Num1");
const app3Num2= document.getElementById("app3Num2");
const app3Operacion =document.getElementById("app3Operacion");
const app3Res= document.getElementById("app3Res");
const app3BtnCalcular =document.getElementById("app3BtnCalcular");

app3BtnCalcular.addEventListener("click", (e) =>{
    e.preventDefault();
    let n1 = parseInt(app3Num1.value);
    let n2 = parseInt(app3Num2.value);

    let operacion = app3Operacion.value;
    let resultado;
    //checar la operacion seleccionada por el usuario
    
/*     if(operacion == "S"){
        resultado= n1 + n2;
    }
    else if(operacion == "R"){
        resultado =n1-n2;
    }
    else if (operacion== "M"){
        resultado= n1*n2;
    }

    else if (operacion=="D"){
        resultado=n1/n2;
    } */

    switch(operacion){
        case "S": resultado= n1 + n2
            break;
        case "R" : resultado =n1-n2
            break;
        case "M": resultado= n1*n2 
            break;
        case "D": resultado=n1/n2 
            break;
    }
    app3Res.value=resultado;
} )

/*App4*/
const app4Tabla = document.getElementById("app4Tabla");
const app4Inv =document.getElementById("app4Inv");
const app4SoloPunto =document.getElementById("app4SoloPunto");
const app4Res =document.getElementById("app4Res");
const app4BtnVer =document.getElementById("app4BtnVer");

function mostrarTabla(){
    let tabla =parseInt(app4Tabla.value);
    
    let lista =document.createElement("ul"); //es para crear una etiqueta desde java

    if(!app4Inv.checked){ //es el no
        for(let i=1; i<=10; i++){

            let resMulti= app4SoloPunto.checked ? "♡".repeat(tabla*i) : tabla*i; //? esto representa el if y : representa el else
/*             let resMulti;
            if(app4SoloPunto.checked){
                resMulti= "♡".repeat(tabla*i)
            }
            else{
                resMulti= tabla*i;
            }
 */
            let mult= tabla + " X " + i + " = " + resMulti;
            let item =document.createElement("li");
            item.innerHTML= mult; //aqui se va mostrar lo que tienes en el java al html
            lista.appendChild(item); //aqui agrega todos los elementos a la lista
            //console.log(mult)
        }
    }
    else{
        for(let i=10; i>=1; i--){
            let resMulti= app4SoloPunto.checked ? "♡".repeat(tabla*i) : tabla*i;

/*             let resMulti;
            if(app4SoloPunto.checked){
                resMulti= "♡".repeat(tabla*i)
            }
            else{
                resMulti= tabla*i;
            } */

            let mult= tabla + " X " + i + " = " + resMulti;
            let item =document.createElement("li");
            item.innerHTML= mult; //aqui se va mostrar lo que tienes en el java al html
            lista.appendChild(item); //aqui agrega todos los elementos a la lista
            //console.log(mult)
        }
    }
    app4Res.innerHTML=""; //para limpiar
    app4Res.appendChild(lista);
}

app4BtnVer.addEventListener("click", (e) =>{
    e.preventDefault();
    mostrarTabla()
})

app4Inv.addEventListener("change", (e) =>{
    mostrarTabla()
})
app4SoloPunto.addEventListener("change", (e) =>{
    mostrarTabla()
})

/*App5*/
const app5Borde = document.getElementById("app5Borde");
const app5Color = document.getElementById ("app5Color");
const app5Grosor = document.getElementById("app5Grosor");
const app5Tipo = document.getElementById("app5Tipo");
const app5Res = document.getElementById("app5Res");
const app5BtnAplicar = document.getElementById("app5BtnAplicar");

app5BtnAplicar.addEventListener("click", (e) =>{
    e.preventDefault();
    let borde = app5Borde.value;
    let color = app5Color.value;
    let grosor = app5Grosor.value;
    let tipo = app5Tipo.value;
    switch(borde){
        case "T":
            app5Res.style.border= borde;
            app5Res.style.borderColor= color;
            app5Res.style.borderWidth= grosor;
            app5Res.style.borderStyle = tipo;
            break;
        case "BT" :
            app5Res.style.border=borde;
            app5Res.style.borderTopColor=color;
            app5Res.style.borderTopWidth=grosor;
            app5Res.style.borderTopStyle=tipo;
            break;
        case "BB":
            app5Res.style.border=borde;
            app5Res.style.borderBottomColor=color;
            app5Res.style.borderBottomWidth=grosor;
            app5Res.style.borderBottomStyle =tipo;
            break;
        case "L": 
            app5Res.style.border=borde;
            app5Res.style.borderLeftColor=color;
            app5Res.style.borderLeftWidth=grosor;
            app5Res.style.borderLeftStyle =tipo;
            break;
        case "R": 
            app5Res.style.border=borde;
            app5Res.style.borderLeftColor=color;
            app5Res.style.borderLeftWidth=grosor;
            app5Res.style.borderLeftStyle=tipo;
            break;
    }
});

/*App6*/
function perfecto(numero){
    let divisor = 1 ;
    let suma =0;
    do{
        //si el numero se divide entre el divisor entonces se le suma el divisor
        if(numero%divisor==0){
            suma+=divisor;
        }
        divisor++;
    }while(divisor < numero);// el numero siempre debe ser menor al numero para que sea perfecto
    return numero==suma; // si son iguales se manda un true y sino un false dentro de las comparaciones
}

const app6Ini = document.getElementById("app6Ini"); 
const app6Fin =document.getElementById("app6Fin");
const app6Res= document.getElementById ("app6Res");
const app6BtnVer = document.getElementById("app6BtnVer");
const lista =document.createElement("ol");

app6BtnVer.addEventListener("click", (e) =>{
    e.preventDefault();
    let ini = parseInt(app6Ini.value);
    let fin = parseInt(app6Fin.value);
    // se aplica un ciclo es un while

    if (ini > fin){
        let aux = ini ;//creamos una copia del principal
        ini= fin ;
        fin =aux;
    } 
/*     if (ini > fin){
        ini = parseInt(app6Fin.value);
        fin = parseInt(app6Ini .value);
    }  */

    let numero =ini;
    while(numero <= fin){ //condicion
        /**Checar si es perfecto */
        //Si el numero es perfecto
        if (perfecto (numero)){
            let item= document.createElement("li")
            item.innerHTML=numero;
            lista.appendChild(item);
        }

        console.log(numero);//comienza en el numero inicial
        numero++;//incremento
    }
    app6Res.innerHTML= "";
    app6Res.appendChild(lista);

});