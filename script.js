//Definimos array de proyectos//

const proyectos = [
    {
        titulo: "Bank Design 2023",
        descripcion: "Reto de diseño enfocado en mejorar la interacción de adultos mayores con productos financieros en canales digitales.",
        imagen: "./Assets/Img/yo.jpg",
        enlace: "#"
    },
    {
        titulo: "Buddy",
        descripcion: "Caso de estudio sobre una problematica habitual a la que se exponen los dueños de mascotas.",
        imagen: "imagen1.jpg",
        enlace: "#"
    }

//Aqui puedes agregar mas proyectos//
];

//Seleccion del contenedor donde se mostraran los proyectos//

const contenedorPortafolio = document.getElementById("portfolio_container");

//Funcion para cargar y mostrar los proyectos//

function mostrarProyectos() {
    proyectos.forEach((proyecto, index)=>{
        //El forEach va a crear un contenedor para cada proyecto//
        const card = document.createElement("div");
        card.classList.add("project_card");
        
        //Crear un contenedor para la informacion del proyecto//
        const info = document.createElement("div");
        info.classList.add("project_info");

        //Crear y configurar el numero y titulo del proyecto//
        const titulo = document.createElement("h3");
        titulo.textContent = `${index + 1} / ${proyecto.titulo}`

        //Crear y configurar la descripcion del proyecto//
        const descripcion = document.createElement("p");
        descripcion.textContent = proyecto.descripcion;
        
        //Crear y configurar el link del proyecto//
        const enlace = document.createElement("a");
        enlace.href = proyecto.enlace;
        enlace.textContent = "More shots from this project ↗";

        //Agregar titulo, descripcion y enlace a la seccion de info//

        info.appendChild(titulo);
        info.appendChild(descripcion);
        info.appendChild(enlace);


        //Crear y configurar la imagen del proyecto//
        const imageContainer = document.createElement("div");
        imageContainer.classList.add("project_image");

        const img = document.createElement("img");
        img.src = proyecto.imagen;

        //Agregar imagen a su contenedor//

        imageContainer.appendChild(img);

        //Agregar la info y la img al contenedor del proyecto//
        card.appendChild(info);
        card.appendChild(imageContainer);

        //Agregar la tarjeta completa al contenedor principal//
        contenedorPortafolio.appendChild(card);

    
    } );
}

//LLamar la funcion//
mostrarProyectos();

//EJERCICIO TARJETAS DE RECOMENDACION//
//Definimos array de las tarjetas//

const tarjetas = [
    {
        titulo: "Juan Pablo - El mejor profesor",
        descripcion: "Reto enfocado en mejorar habilidades con JavaScript.",
        imagen: "./Assets/Img/ .jpg",
        enlace: "#"
    },
    {
        titulo: "Francisco José - Front Developer",
        descripcion: "Reto enfocado en mejorar habilidades con JavaScript.",
        imagen: "./Assets/Img/yo.jpg",
        enlace: "#"
    },
    {
        titulo: "Mishell Uribe - La mejor estudiante",
        descripcion: "Reto enfocado en mejorar habilidades con JavaScript.",
        imagen: "./Assets/Img/ .jpg",
        enlace: "#"
    }

//Aqui puedes agregar mas tarjetas//
];

//Seleccion del contenedor donde se mostraran las tarjetas//

const contenedorTarjetas = document.getElementById("main_card");

//Funcion para cargar y mostrar llas tarjetas//

function mostrarTarjetas() {
    tarjetas.forEach((tarjeta, index) => {
        //El forEach va a crear un contenedor para cada tarjeta//
        const cardRec = document.createElement("div");
        cardRec.classList.add("card_container");

        //Crear un contenedor para la informacion de la tarjeta//
        const cardInfo = document.createElement("div");
        cardInfo.classList.add("card_info");

        //Crear y configurar titulo de la tarjeta//
        const cardTitulo = document.createElement("h3");
        cardTitulo.textContent = `${tarjeta.titulo}`;

        //Crear y configurar la descripcion de la tarjeta//
        const cardDescripcion = document.createElement("p");
        cardDescripcion.textContent = tarjeta.descripcion;

        //Agregar titulo, descripcion y enlace a la seccion de info//
        cardInfo.appendChild(cardTitulo);
        cardInfo.appendChild(cardDescripcion);


        //Crear y configurar la imagen de la tarjeta//
        const cardImageContainer = document.createElement("div");
        cardImageContainer.classList.add("card_image");

        const img = document.createElement("img");
        img.src = tarjeta.imagen;

        //Agregar imagen a su contenedor//
        cardImageContainer.appendChild(img);

        //Agregar la info y la img al contenedor de la tarjeta//
        cardRec.appendChild(cardInfo);
        cardRec.appendChild(cardImageContainer);

        //Agregar la tarjeta completa al contenedor principal//
        contenedorTarjetas.appendChild(cardRec);

    } );
}

//LLamar la funcion//
mostrarTarjetas();