for (let cont=1 ; cont <=10 ; cont ++ ){
console.log(cont);
}



/*apps3*/
const app3Num1 = document.getElementById("app3Num1");
const app3Num2 = document.getElementById("app3Num2");
const app3operaciones = document.getElementById("app3operaciones");
const app3Res = document.getElementById ("app3Res");
const app3BtnCalcular = document.getElementById("app3BtnCalcular");


app3Btncalcular.addEventlistener("click",(e) =>{
    e.preventDefault();

    let n1 =parseInt(app3Num1.value)
    let n2 =parseInt(app3Num2.value)
    let operacion = app3operaciones.value;
    let resultado;
    
    /*checar que operacion selecciono el usuario*/
    /*if( operacion == "s") {
       resultado = n1 + n2
    }
    
    else if (operacion == "r"){
       resultado =n1 -n2;
    
    }
    
    else if (operacion== "m"){
       resultado = n1 * n2;
    
    }
    
    else if (operacion == "d" ){
       resultado = n1 / n2;
    
    }*/
})
switch(operaciones){
   case "s": resultado =n1 + n2;
   break;
   case "r": resultado =n1 - n2;
   break;
   case "m": resultado =n1 * n2;
   break;
   case "d": resultado =n1 / n2;
   break;
}



/*APP 4 */
const app4Tabla = document.getElementById ("app4Tabla");
const app4Inv = document.getElementById ("app4INv");
const app4SoloPunto = document.getElementById ("app4SoloPunto");
const app4Res = document.getElementById ("app4Res");
const app4BtnVer = document.getElementById ("app4BtnVer");

app4BtnVer. addEventListener ("click", (e) => {
    e.preventDefault();
    let  tabla = parseInt( app4Tabla.value);
let lista = document.createElement("ul");
 


if(app4Inv == false ) {
    for (let i=1; i <= 10; i++){
        let mult = tabla + "X" + i + " = "+ tabla * i; 
        let item =document.createElement("li")
        item.innerHTML =mult;
         lista.appendChild(item);
       
    }

}
else {
    for (let i=1; i <= 10; i++){
        let mult = tabla + "X" + i + " = "+ tabla * i; 
        let item =document.createElement("li")
        item.innerHTML =mult;
         lista.appendChild(item); 
       
}
}

app4Res.innerHTML = "";
app4Res.appendChild(lista);


   
})
