//1.Cuales son los elementos con los que voy a interactuar, botones y fotos
const botones = document.querySelector('#botones')

const frase = document.querySelector('#frase')
const fotoGrande = document.querySelector('#fotoGrande')
const galeria = document.querySelector('#galeria')
const titulo = document.querySelector('h3')
//FRAGMENT
const fragment = document.createDocumentFragment()
//2.Que es lo que pintaremos luego: necesito pintar las imagenes asociadas al tema y pintar una mas grande que otra.
const arrayBotones = ["mar", "arena","señales", "edificio", "montaña"]

const arrayImg = [
    {
        foto: "assets/viajes-1.jpg",
        alter: "mujer tumbada en amaca en la playa",
        titulo: "título del viaje 1",
        id: ["mar", "arena"]
    },
    {
        foto: "assets/viajes-2.jpg",
        alter: "Bungaloo sobre las olas",
        titulo: "título del viaje 2",
        id: "mar"
    },
    {
        foto: "assets/viajes-3.jpg",
        alter: "Cruce de caminos",
        titulo: "título del viaje 3",
        id: "señales"
    },
    {
        foto: "assets/viajes-4.jpg",
        alter: "Plaza España en Sevilla",
        titulo: "título del viaje 4",
        id: "edificio"
    },
    {
        foto: "assets/viajes-5.jpg",
        alter: "Plaza España en otro angulo",
        titulo: "título del viaje 5",
        id: "edificio"
    },
    {
        foto: "assets/viajes-6.jpg",
        alter: "Paseo maritimo junto a las montañas",
        titulo: "título del viaje 6",
        id: ["mar", "arena", "montaña"]
    },
    {
        foto: "assets/viajes-7.jpg",
        alter: "Castillo coronando el altode una colina, abajo un pueblo",
        titulo: "título del viaje 7",
        id: ["edificio", "montaña"]
    }
]

//4.cuando se realizaran las acciones? al hacer 'click' tanto en los botones como en las nuevas fotos para que se hagan grandes 
document.addEventListener("click", (ev)=>{
    
})
//3.Que acciones necesito?? Pintar botones, pintar las fotos, pintar fots en grande,  pintar la frase, filtrar imagenes y eliminar el titulo.

const creaBotones = () => {
    arrayBotones.forEach((item) => {
        const button = document.createElement('BUTTON');
        button.value = item;
        button.textContent = item;
        button.id = item;

        fragment.append(button)
    })

    botones.append(fragment)
}
creaBotones()


const muestraImg = () => {
   

    arrayImg.forEach((item)=>{
        const caja = document.createElement("DIV")
        const foto = document.createElement("IMG")
        foto.src = item.foto
        foto.alt = item.alter
        foto.id = item.id
        caja.append(foto)
        fragment.append(caja)
    })
    galeria.append(fragment)
}
muestraImg()


const desaparece = () => {

}