
const adopcion = []

const nombre = prompt ("Ingrese nombre de usuario")
console.log (nombre)

while(nombre.trim() === ""){
    nombre = prompt("Ingresa un nombre de usuario")
}

let pregunta = prompt ("¿Desea adoptar una mascota? (responda con un si/no)")
if (pregunta == "si"){
    alert ("Eliga una mascota")
} else {
    alert ("Adopcion cancelada")
}


let numeroMascota = prompt ("Ingrese que mascota con sus numeros(1.Perro 2.Gato 3.Conejo 4.Coballo)")
switch (numeroMascota){
    case "1":
        alert ("Eligiste un Perro")
        break
    case "2":
        alert ("Elegiste un Gato")
        break
    case "3":
        alert ("Elegiste a Conejo")
        break
    case "4": 
        alert ("Elegiste un Coballo")            
        break
    default:
        alert ("ERROR")
        break    
}

const animales = ["Perro", " Gato", " Conejo", " Coballo"]
console.log (animales.join (","))

function despedida (){
    console.log("Muchas gracias por su momento saludos")
}

despedida()