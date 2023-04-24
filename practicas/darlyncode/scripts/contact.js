const volver = document.getElementById("atras")

volver.addEventListener("click", volverPrincipal)


function volverPrincipal(){
    console.log("hola mundo")
    window.location = "/index.html"
}