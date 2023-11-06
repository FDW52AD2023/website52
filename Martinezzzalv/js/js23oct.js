//App 3//

const app3Num1 = document.getElementById("app3Num1");
const app3Num2 = document.getElementById("app3Num2");
const app3Operacion = document.getElementById("app3Operacion");
const app3Res = document.getElementById("app3Res");
const app3BtnCalcular = document.getElementById("app3BtnCalcular");

app3BtnCalcular.addEventListener("click",(e) =>{
    e.preventDefault();

    let n1 = parseInt(app3Num1.value);
    let n2 = parseInt(app3Num2.value);
    let operacion = app3Operacion.value;
    let resultado;

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


    function mostrarTabla(){
    let tabla = parseInt(app4Tabla.value);
    let lista = document.createElement("ul");

    if( !app4Inv.checked ){
        for (let i=1; i <= 10; i++){
            
            let resMult =app4SoloPunto.checked ? ".".repeat(tabla * i) : tabla * i;

           

            let mult = tabla + "X" + i +"="+ resMult;
            let item = document.createElement("li");
            item.innerHTML=mult;
            lista.appendChild(item);
        }

    }
    else {
        for (let i=10; i >= 1; i--){

            let resMult= app4SoloPunto.checked ? ".".repeat(tabla*i) : tabla*i;
            
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

    resultado5.style.border = 'none';
    resultado5.style.borderTop = 'none';
    resultado5.style.borderRight = 'none';
    resultado5.style.borderBottom = 'none';
    resultado5.style.borderLeft = 'none';


    if (posicion === 'all') {
        resultado5.style.border = borde;
        
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
       
        resultado5.style.backgroundColor = colorElegido;
});