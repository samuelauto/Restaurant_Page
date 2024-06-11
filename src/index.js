import { Init } from './init.js';
import { Menu } from './menu.js';
import { Contact } from './contact.js';
import './style.css';

//Controlador de cdo se debe ver cada pagina

function Controller(){
    const init = document.querySelector('#init');
    const menu = document.querySelector('#menu');
    const contact = document.querySelector("#contact");
    const predeterminado = document.querySelector('.predeterminado');

    return {init,menu,contact,predeterminado};
}

function Main(){
    const controler = Controller();//para manipular cada seccion
    //necesidad de una variable bandera para cambiar esta variable con cada seccion
    let seccion = 'init';
    
    controler.init.addEventListener('click',(e) =>{ //si se toca en la seccion tengo que ir para la seccion de inicio
        switch(seccion){
            case 'contact': 
        }
    })
}

Init();
Main();

