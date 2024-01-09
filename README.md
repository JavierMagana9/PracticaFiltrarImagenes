# PracticaFiltrarImagenes

Lo primero que he tenido en cuenta es que elementos del documento HTML iban a ser estaticos y cuales dinamicos. 
```html
<body>
    <header>
        <h1>Práctica Filtro</h1>
    </header>   
    <main>
        <h2>FOTOS</h2>
        <div id="botones">
            
        </div>
       
        <div id="fotoGrande">

        </div>
        <h3>IMAGENES RELACIONADAS</h3>
        <div id="galeria">

        </div>
    </main>
    <footer>
        <p>footer</p>
    </footer>
    <script src="js/main.js"></script>
</body>
```

Una vez deidido, elegí que elementos del DOM tenía que capturar para usar posteriormente:

```js
const botones = document.querySelector('#botones')
const fotoGrande = document.querySelector('#fotoGrande')
const galeria = document.querySelector('#galeria')
```

Despues decidi que habia que crear para posteriormente pintar, en este caso un array con las fotos 

```js
const arrayImg = [
    {
        foto: "assets/viajes-1.jpg",
        alter: "mujer tumbada en amaca en la playa",
        titulo: "título del viaje 1",
        etiqueta: ["mar", "arena"]
    }
    ...
]
```
### Funciones

una vez decidido esto, pense que acciones necesitaba:

1. pintar las fotos pequeñas:

con un forEach recorro cada objeto del array y a su vez cada item, es decir cada objeto.

Mediante el metodo .find(devuelve el valor del primer elemento del array) busco en todas las etiquetas de cada objeto para ver si coinciden (con el metodo .includes, que devuelve true si encuentra lo que busca) con boton. 

Si es asi, se pintan div y dentro de el img y p con el titulo, src y alt correspondientes.

Todo se crea en el elemnto estatico div galeria.
El innerHTML vacio al principio de la funcion impide que se acumulen una y otra vez cada vez que se hace click en los botones.

```js

const muestraImg = (boton) => {

    galeria.innerHTML = ''

    arrayImg.forEach((item) => {
        
        const comparacion = item.etiqueta.find((tag) =>
            tag.includes(boton)
        )
        if (comparacion == boton) {

            const caja = document.createElement('DIV')
            const foto = document.createElement('IMG')
            const titulo = document.createElement('P')
            titulo.textContent = item.titulo
            foto.src = item.foto
            foto.alt = item.alter
            caja.append(titulo)
            caja.append(foto)
            fragment.append(caja)

        }

        
    })
    
    galeria.append(fragment)
}

```

2. pintar la foto grande:

aqui creo una foto y la coloco dentro de mi div fotoGrande. El innerHTML vacio al principio de la funcion impide que se acumulen una y otra vez cada vez que se hace click en los botones. 

```js
const muestraFotoGrande = (fotoArriba) => {
    fotoGrande.innerHTML = ''

    const foto = document.createElement('IMG')
    foto.src = fotoArriba
    fragment.append(foto)
    fotoGrande.append(fragment)

}
```
3. crear botones 

aunque arrayBotones debia estar creado de forma dinamica, aqui lo utilizo desde una variable universal. Un forEach itera el array creando un boton por cada valor, recibiendo su contenido e id. 

```js
const creaBotones = () => {


    arrayBotones.forEach((item) => {
        const button = document.createElement('BUTTON');
        button.textContent = item;
        button.id = item;

        fragment.append(button)
    })

    botones.append(fragment)
}
```

### Eventos
Una vez decididas las funciones tenia que ver cuando se ejecutarian. Cree una delegacion de eventos. Al hacer click en cada boton y al hacer click en cada imagen.
Gracias a la expresion de target podemos capturar
```js
document.addEventListener('click', (ev) => {

    const target = ev.target;
    const fotoArriba = ev.target.src
    if (target.matches("button")) {

        const boton = ev.target.id
        //console.log(etiqueta)
        muestraImg(boton)
        muestraFotoGrande(fotoArriba)
        fraseExp()
    } else if (target.matches("img")) {

        muestraFotoGrande(fotoArriba)
    }

});
```


