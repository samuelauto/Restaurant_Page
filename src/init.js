function Init(){
    const content = document.querySelector('#content');
    const div = document.createElement("div");//Div donde va todo almacenado
    const title = document.createElement('h1');//Titulo de la pagina
    const description = document.createElement("div");//Descripcion del restaurante
    const hour = document.createElement("div");//horario del restaurante
    const location = document.createElement("div");//Localizazcion del restaurante

    title.textContent = "Restaurant 'Las pajitas'";
    div.appendChild(title);

    description.textContent = "Donde las fajitas de pollo son el plato preferido, pero nuestro dueño es dislexico, por eso dice las pajitas, no se preocupe, no es que hagamos pajas todo el tiempo :)";
    div.appendChild(description);


    //div del horario
    const hourTitle = document.createElement('h1');
    hourTitle.textContent = "Horario";
    hour.appendChild(hourTitle);
    for(let i=0;i<7;i++){
        const day = document.createElement('p');
        switch(i){
            case 0: day.textContent = "Lunes: Cerrado";
                    hour.appendChild(day)
                    break;
            case 1: day.textContent = "Martes: 8am-8pm";
                    hour.appendChild(day);
                    break;
            case 2: day.textContent = "Miercoles: 8am-8pm";
                    hour.appendChild(day);
                    break;
            case 3: day.textContent = "Jueves: Cerrado";
                    hour.appendChild(day);
                    break;
            case 4: day.textContent = "Viernes: 10am-2am";
                    hour.appendChild(day);
                    break;
            case 5: day.textContent = "Sabado: 10am-2am";
                    hour.appendChild(day);
                    break;
            case 6: day.textContent = "Domingo: 10am-2am"
                    hour.appendChild(day);
                    break;
            default: break;

        }
    }
    div.appendChild(hour);

    const titleLocation = document.createElement('h1');
    titleLocation.textContent = "Nos encontramos en: "
    location.appendChild(titleLocation);
    const address = document.createElement('p');
    address.textContent = "Calle 403%198 y 200, Santiago de las Vegas, Boyeros"
    location.appendChild(address);

    div.appendChild(location);

    content.appendChild(div);
}

export{Init}