const volver = document.getElementById("atras")
const saveInfo = document.getElementById("guardar")
const pText = document.getElementById("texto");
// para los contactos
const nom = document.getElementById("nombre").value
const last = document.getElementById("apellido").value
const numero = document.getElementById("num").value

// boton de guardar
saveInfo.addEventListener('click', save)


function volverPrincipal(){
    // console.log("hola mundo")
    window.location = "/JS/practicas/darlyncode/index.html"
}

function save(){
    // nos damos cuenta si funciona el boton
    console.log("el boton de guardar esta funcional")
    // variables para los valores
    // const number = numero.value
    if(nom == "darlyn" && last == "olivo" && numero == "1234567890"){
        // document.write = "Contacto guardado"
        // pText.innerText = document.write("Bienvenido")
        window.alert("klk bienvenido")
        console.clear()
    } else {
        window.alert("Datos incorrectos")
        window.location = "/JS/practicas/darlyncode/index.html"
    }
}

// boton de volver
volver.addEventListener("click", volverPrincipal)