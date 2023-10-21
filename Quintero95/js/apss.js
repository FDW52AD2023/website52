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