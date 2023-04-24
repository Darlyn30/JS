// variables boton de contacto
const contact = document.getElementById("contacto")
// variable boton de evento 
const eventos = document.getElementById("evento")
// variable boton utiliario
const util = document.getElementById("utiliario")

// esto hace que el boton funcione
contact.addEventListener("click", contacto)

function contacto(){
    //el console log me asegura que el boton funciona
   // console.log("Hola contacto")
     window.location = "./subpages/contact.html"
}

eventos.addEventListener("click", evento)

function evento(){
    // el console log me asegura que el boton funciona
   // console.log("Hola evento")
    window.location = "./subpages/event.html"
}

// esto hace que el boton funcione
util.addEventListener("click", utiliario)


function utiliario(){
    // el console log me asegura que el boton funciona
    console.log("Hola utiliario")
    window.location = "./subpages/util.html"
}