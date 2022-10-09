function mascotas(raza){
    return function(nombre){
        return console.log("Mi mascota se llama "+nombre+" y es un "+raza)
    }
}

mascotas("gato")("Michi")