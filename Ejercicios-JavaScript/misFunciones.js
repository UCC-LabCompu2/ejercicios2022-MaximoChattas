/**
 * Conversion de Unidades de metros, pies, yardas y pulgadas
 * @method conversionUnidades
 * @param {String} id - ID de los inputs del formulario
 * @param {Number} valor - Valor de los inputs del formulario
 */

function conversionUnidades(id , valor)
{
    let metro, pie, pulgada, yarda;

    if(valor.includes(','))
    {
        valor = valor.replace(',' , '.');
    }

    if(isNaN(valor))
    {
        alert("Ingrese un numero");
        metro = "";
        pie = "";
        pulgada = "";
        yarda = "";

    } else if (id === "metro")
    {
        metro = valor;
        pulgada = valor*39.3701;
        yarda = valor*1.09361;
        pie = valor*3.28084;

    } else if (id === "pulgada")
    {
        pulgada = valor;
        metro = valor*0.0254;
        yarda = valor*0.0277778;
        pie = valor*0.0833333;

    } else if (id === "yarda")
    {
        yarda = valor;
        metro = valor*0.9144;
        pulgada = valor*36;
        pie = valor*3;

    } else if (id === "pie")
    {
        pie = valor;
        yarda = valor*0.333333;
        metro = valor*0.3048;
        pulgada = valor*12;

    }

    document.conversorUnidades.unid_metro.value = Math.round(metro*100)/100;
    document.conversorUnidades.unid_pulgada.value = Math.round(pulgada*100)/100;
    document.conversorUnidades.unid_yarda.value = Math.round(yarda*100)/100;
    document.conversorUnidades.unid_pie.value = Math.round(pie*100)/100;
}

/**
 * Conversion de Unidades de angulos en grados o radianes
 * @method conversionAngulos
 * @param {String} id - ID de los inputs del formulario
 */

function conversionAngulos(id) /*Verificar Funcionalidad*/
{
    let grados , rad;

    if (id == "grados")
    {
       grados = document.getElementById("grados").value;
        rad = (grados*Math.PI/180);

    }else if (id == "radianes")
    {
        rad = document.getElementById("radianes").value;
        grados = (rad*180/Math.PI);
    }

    document.getElementById("grados").value = grados;
    document.getElementById("radianes").value = rad;

}

/**
 * Segun el boton seleccionado, muestra u oculta el div en cuestion
 * @method mostrarOcultar
 * @param {string} valor - Valor de los botones del formulario
 */

function mostrarOcultar (valor)
{
    if (valor === "val_mostrar")
    {
        document.getElementById("div1").style.display = "block";
    } else if (valor === "val_ocultar")
    {
        document.getElementById("div1").style.display = "none";
    }
}

/**
 * Suma dos valores ingresados por el usuario
 * @method fnSuma
 */

function fnSuma()
{
    let num1 , num2;

    num1 = document.getElementById("nums1").value;
    num2 = document.getElementById("nums2").value;

    document.getElementById("totalS").value = Number(num1) + Number(num2);
}

/**
 * Resta dos valores ingresados por el usuario
 * @method fnResta
 */

function fnResta()
{
    let num1 , num2;

    num1 = document.getElementById("numr1").value;
    num2 = document.getElementById("numr2").value;

    document.getElementById("totalR").value = Number(num1) - Number(num2);
}

/**
 * Multiplica dos valores ingresados por el usuario
 * @method fnProducto
 */

function fnProducto()
{
    let num1 , num2;

    num1 = document.getElementById("numm1").value;
    num2 = document.getElementById("numm2").value;

    document.getElementById("totalM").value = Number(num1) * Number(num2);
}

/**
 * Divide dos valores ingresados por el usuario
 * @method fnDivision
 */

function fnDivision()
{
    let num1 , num2;

    num1 = document.getElementById("numd1").value;
    num2 = document.getElementById("numd2").value;

    document.getElementById("totalD").value = Number(num1) / Number(num2);
}

/**
 * Abre la segunda web cuando se apreta el boton
 * @method cargarWeb
 */

function cargarWeb()
{
    let cantidad , unidad , URL;

    cantidad = document.getElementById("distancia").value;
    unidad = document.getElementsByName("unidades")[0].value;

    URL = "segundaWeb.html#" + cantidad + "#" + unidad;
    window.open(URL);
}

/**
 * Carga los resultados de la primera web en la segunda cuando esta se carga
 * @method cargarResultado
 */

function cargarResultado()
{
    let cantidad , unidad , URL;

    URL = window.location.href;
    URL = URL.split("#");
    console.log(URL);

    cantidad = URL[1];
    unidad = URL[2];

    document.getElementById("dist").value = cantidad + ' ' + unidad;
}

function dibujarCirculoCuadrado()
{
    let canvas = document.getElementById("myCanvas");
    let context = canvas.getContext("2d");

    let canvasHeight = canvas.height;
    let canvasWidth = canvas.width;
    let squareSize = 50;
    let margin = 15;

    context.fillRect(margin ,canvasHeight-margin-squareSize , squareSize , squareSize);

    context.arc(canvasWidth/2 , canvasHeight/2 , 100 , 0 , 2*Math.PI);
    context.stroke();
    context.fillStyle = "#00FF00";
    context.fill();
}

var bandera;
function dibujar() {
    let canvas = document.getElementById("canvasPaint");
    let context = canvas.getContext("2d");

    let posX = event.clientX;
    let posY = event.clientY;

    canvas.onmousedown = function (){bandera = true};
    canvas.onmouseup = function (){bandera = false};

    console.log(posX , posY);

    if (bandera)
    {
        context.fillRect(posX , posY , 5 , 5);
    }
}

function limpiarCanvas()
{
    let canvas = document.getElementById("canvasPaint");
    let context = canvas.getContext("2d");

    canvas.width = canvas.width;

}