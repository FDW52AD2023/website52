/*APP6*/
function perfect ( numero){
    let divisor = 1
    let suma = 0;
    do{
        if (numero % divisor==0) {
            suma+=divisor;
        }
        divisor++;
    }while (divisor < numero );
    return numero == suma; 
}
const app6Ini= document.getElementById("app6Ini");
const app6Fin= document.getElementById("app6Fin");
const app6Res= document.getElementById("app6Res");
const app6BtnVer= document.getElementById("app6BtnVer");
const lista = document.createElement("ol");

app6BtnVer.addEventListener( "click", (e) => {
    e.preventDefaul();
    let ini = parseInt(app6Ini.Value);
    let fin = parseInt(app6Fin.Value);


    if(ini > fin){
        let aux = ini 
        ini = fin 
        fin = aux 
    }
    else {

    }
     
     let numero = ini;  
    while(numero <= fin ){
        console.log(numero);
        /*checar si es perfect*/

        if (perfecto (numero)){
            let item = document.createElement("li");
            item.innerHTML = numero;
            lista.appendChild(item);

        }

        
        numero++;
    }
    app6Res.innerHTML = "";
    app6Res.appendChild( lista);
}); 