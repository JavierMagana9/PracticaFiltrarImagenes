

//1.Cuales son los elementos con los que voy a interactuar, botones y fotos
/**
 * Captura de elementos del DOM para interactuar con ellos
 */
const botones = document.querySelector('#botones')

const fotoGrande = document.querySelector('#fotoGrande')
const galeria = document.querySelector('#galeria')


//FRAGMENT
/**
 * Creación de un fragmento de documento para agilizar y no hacer tantas llamadas al DOM
 */
const fragment = document.createDocumentFragment()
//2.Que es lo que pintaremos luego: necesito pintar las imagenes asociadas al tema y pintar una mas grande que otra.
const arrayBotones = ["mar", "arena", "señales", "edificio", "montaña", "cosa"]

/**
 * Array que contiene objetos que son imágenes.
 */
const arrayImg = [
    {
        foto: "assets/viajes-1.jpg",
        alter: "mujer tumbada en amaca en la playa",
        titulo: "título del viaje 1",
        etiqueta: ["mar", "arena"]
    },
    {
        foto: "assets/viajes-2.jpg",
        alter: "Bungaloo sobre las olas",
        titulo: "título del viaje 2",
        etiqueta: ["mar"]
    },
    {
        foto: "assets/viajes-3.jpg",
        alter: "Cruce de caminos",
        titulo: "título del viaje 3",
        etiqueta: ["señales", 'arena']
    },
    {
        foto: "assets/viajes-4.jpg",
        alter: "Plaza España en Sevilla",
        titulo: "título del viaje 4",
        etiqueta: ["edificio"]
    },
    {
        foto: "assets/viajes-5.jpg",
        alter: "Plaza España en otro angulo",
        titulo: "título del viaje 5",
        etiqueta: ["edificio"]
    },
    {
        foto: "assets/viajes-6.jpg",
        alter: "Paseo maritimo junto a las montañas",
        titulo: "título del viaje 6",
        etiqueta: ["mar", "arena", "montaña"]
    },
    {
        foto: "assets/viajes-7.jpg",
        alter: "Castillo coronando el altode una colina, abajo un pueblo",
        titulo: "título del viaje 7",
        etiqueta: ["edificio", "montaña"]
    }
]


//4.cuando se realizaran las acciones? al hacer 'click' tanto en los botones como en las nuevas fotos para que se hagan grandes

/**
 * Escucha de eventos 'click' en el documento para manipular imágenes y botones.
 */
document.addEventListener('click', (ev) => {

    const target = ev.target;
    // @ts-ignore
    const fotoArriba = ev.target.src
    // @ts-ignore
    if (target.matches("button")) {
        // @ts-ignore
        const boton = ev.target.id
        //console.log(etiqueta)
        muestraImg(boton)
        muestraFotoGrande(fotoArriba)
        fraseExp()
    // @ts-ignore
    } else if (target.matches("img")) {

        muestraFotoGrande(fotoArriba)
    }

});


//3.Que acciones necesito?? Pintar botones,crear de forma dinamica array, pintar las fotos, pintar fots en grande,  pintar la frase, filtrar imagenes y eliminar el titulo.
/**
 * Crea botones dinámicamente y los añade al DOM.
 */
const creaBotones = () => {


    arrayBotones.forEach((item) => {
        const button = document.createElement('BUTTON');
        button.textContent = item;
        button.id = item;

        fragment.append(button)
    })

    botones.append(fragment)
}

/**
 * Muestra imágenes filtradas basadas en la etiqueta del botón seleccionado.
 * @param {string} boton
 */

const muestraImg = (boton) => {

    galeria.innerHTML = ''

    arrayImg.forEach((item) => {
        //console.log(item)      
        // @ts-ignore
        const comparacion = item.etiqueta.find((tag) =>
            tag.includes(boton)

            //console.log(item.etiqueta)
        )
        if (comparacion == boton) {
            //console.log("hola")

            const caja = document.createElement('DIV')
            const foto = document.createElement('IMG')
            const titulo = document.createElement('P')
            titulo.textContent = item.titulo
            // @ts-ignore
            foto.src = item.foto
            // @ts-ignore
            foto.alt = item.alter
            caja.append(titulo)
            caja.append(foto)
            fragment.append(caja)

        }

        //console.log(boton)
        //console.log(comparacion)
        //console.log(arrayEncontrados)
    })
    //console.log({arrayEncontrados})
    galeria.append(fragment)
    fraseExp()
}

const fraseExp = (boton) => {

arrayImg 


}
/*const primeraFoto = (fotoArriba) => {

}*/

/**
 * Muestra una imagen en un tamaño más grande.
 * @param {string} fotoArriba
 */
const muestraFotoGrande = (fotoArriba) => {
    fotoGrande.innerHTML = ''

    const foto = document.createElement('IMG')
    // @ts-ignore
    foto.src = fotoArriba
    // @ts-ignore
    //caja.append(foto)
    // @ts-ignore
    fragment.append(foto)
    fotoGrande.append(fragment)

}

/*
const arrayEtiquetas = () => {
    
    const arrayEt = []
    .forEach()
}
*/



creaBotones()