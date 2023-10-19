//declaring variables 

var aumento = document.getElementById("aumentar")

var descender = document.getElementById("desc")
var resete = document.getElementById("reset")



// variable for the paragraph
var p = document.getElementById("value")

// create function for adding one number foreach clicked

var contador = []

function add(){
    console.log("hello world")

    if(aumento){
        contador.push(1)
        contador[0]++
        // contador.forEach(function(aumentar){
            
        // })
        p.textContent = contador[0]

    } 
}
aumento.addEventListener("click", add)

// create function for delete one number foreach clicked

function deletee(){
    console.log("delete")
    contador[0]--
    p.textContent = contador[0]

}


descender.addEventListener("click", deletee)


// create function for reset all counter

function reset(){
    console.log("reset")
    let resetear = contador.splice(0)
    let numReset = contador.push(0)
    p.textContent = contador[0]
}

resete.addEventListener("click", reset)

// i have still a problem, when i do click to deletee 
// mark NAN(is not a number) i will fix that later, 
// in theory i finished this container
