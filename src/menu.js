function Menu(){
    const content = document.querySelector('#content');
    const div = document.createElement('div');//Div donde va todo almacenado
    const title = document.createElement('div');//Titulo de la pagina

    title.textContent = "Menu, rico y sabroso ;)";
    div.appendChild(title);

    //Entrante, Platos Principales, Postres, Bebidas
    //cada uno un div, dentro de cada uno los platos y todo al final dentro de div para content

    for(let i = 0; i<4; i++){
        const section = document.createElement('div');//div donde va cada uno
        const titleSection = document.createElement('h3');
        div.appendChild(section);
        switch(i){
            case 0: titleSection.textContent = "Entrante"
                    section.appendChild(titleSection);
                    for(let j=0;j<3;j++){
                        const dish = document.createElement('p');
                        switch(j){
                            case 0: dish.textContent = "Croquetas de la casa:.................600 cup";
                                    section.appendChild(dish);
                                    break;
                            case 1: dish.textContent = "Maripositas chinas:...............500 cup";
                                    section.appendChild(dish);
                                    break;
                            case 2: dish.textContent = "Picadera mixta:.....................1500cup";
                                    section.appendChild(dish);
                                    break;
                            default: break;
                        }
                    }
                    break;
            case 1: titleSection.textContent = "Platos Principales";
                    section.appendChild(titleSection);
                    for(let j=0;j<3;j++){
                        const dish = document.createElement('p');
                        switch(j){
                            case 0: dish.textContent = "Arroz con pollo:.......................1200 cup";
                                    section.appendChild(dish);
                                    break;
                            case 1: dish.textContent = "Bisteson de puerco:....................1500 cup";
                                    section.appendChild(dish);
                                    break;
                            case 2: dish.textContent = "Parrillada de la casa:..................2700 cup";
                                    section.appendChild(dish);
                                    break;
                            default:break;
                        }
                    }
                    break;
            case 2: titleSection.textContent = "Postres";
                    section.appendChild(titleSection);
                    for(let j=0;j<3;j++){
                        const dish = document.createElement('p');
                        switch(j){
                            case 0: dish.textContent = "Flancito de la pura:.......................500 cup";
                                    section.appendChild(dish);
                                    break;
                            case 1: dish.textContent = "Heladito Nestle:...........................1200 cup";
                                    section.appendChild(dish);
                                    break;
                            case 2: dish.textContent = "Keycito de la esquina con helado de choco:..900 cup";
                                    section.appendChild(dish);
                                    break;
                            default:break;
                        }
                    }
                    break;
            case 3: titleSection.textContent = "Bebidas";
                    section.appendChild(titleSection);
                    for(let j=0;j<3;j++){
                        const dish = document.createElement('p');
                        switch(j){
                            case 0: dish.textContent = "Agua fresca de jamaica:....................300 cup";
                                    section.appendChild(dish);
                                    break;
                            case 1: dish.textContent = "Cerveza:...................................800 cup";
                                    section.appendChild(dish);
                                    break;
                            case 2: dish.textContent = "Jugo de naranja:...........................500 cup";
                                    section.appendChild(dish);
                                    break;
                            default:break;
                        }
                    }
                    break;
            default: break;
        }

    }
    content.appendChild(div);
}

export {Menu}