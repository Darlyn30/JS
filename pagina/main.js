// variables declaradas
const btn = document.getElementById("boton")
const usuario = document.getElementById("user")
const  usuarioConfirm = document.getElementById("userConfirm")
const password = document.getElementById("pass")
const mensaje = document.getElementById("text")


// click al boton para crear cuenta
btn.addEventListener("click", boton);

// funcion del boton, esto es lo que el boton ejecutara
function boton(){
    console.log("el boton ta gvi");
    const user = usuario.value
    const pass = password.value
    if(user == "darlyn" && pass == "darlyn123"){
        window.location = "/pagina/index2.html"
    } else if(user != "darlyn" && pass != "darlyn123"){
        window.location = "/pagina/index4.html"
    }

}