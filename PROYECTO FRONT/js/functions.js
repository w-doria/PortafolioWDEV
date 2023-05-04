//document.getElementById('table').style.backgroundColor='green';
//const elemento = document
//document.getElementsByClassName('.encabezado').style.color='red';

const work1 = document.querySelector(".work1");
const work2 = document.querySelector(".work2");
const work3 = document.querySelector(".work3");
const bcWork = document.querySelector("#work");

function navegation1() {
    work1.style.display="none";
    work2.style.display="inline-flex";
    work3.style.display="none";
    bcWork.style.backgroundColor = "#FFF1DC";
}

function navegation2up() {
    work1.style.display="inline-flex";
    work2.style.display="none";
    work3.style.display="none";
    bcWork.style.backgroundColor = "#3A98B9";
}
function navegation2down() {
    work1.style.display="none";
    work2.style.display="none";
    work3.style.display="inline-flex";
    bcWork.style.backgroundColor = "#3A98B9";
}
function navegation3() {
    work1.style.display="none";
    work2.style.display="inline-flex";
    work3.style.display="none";
    bcWork.style.backgroundColor = "#FFF1DC";
}

function agregarMensaje() {
    // Obtener el valor del campo de texto
    var mensaje = document.getElementById("menssage").value;

    // Codificar el mensaje para que se incluya correctamente en el correo electrónico
    var mensajeCodificado = encodeURIComponent(mensaje);

    // Agregar el mensaje al cuerpo del correo electrónico
    var link = document.getElementById("mailto-link");
    var href = "mailto:williamdev.fullstack@gmail.com?subject=Ví tu portafolio quiero ponerme en contacto&body=" + mensajeCodificado;
    link.setAttribute("href", href);

    // Borrar el contenido del textarea
    document.getElementById("menssage").value = "";
  }

