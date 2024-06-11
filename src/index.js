import { Init } from './init';
import { Menu } from './menu';
import { Contact } from './contact';
import './style.css';

//Controlador de cdo se debe ver cada pagina

alert("No esta pinchando");

function Controller(){
    const content = document.querySelector('#content')
    const init = document.querySelector('#init');
    const menu = document.querySelector('#menu');
    const contact = document.querySelector("#contactenos");
    //const predeterminado = document.querySelector('.predeterminado');

    return {content,init,menu,contact};
}

//Se va a cargar cada seccion cdo se precione el boton correspondiente, por tanto hay que eliminar la info de esa seccion para colocar la seccion nueva


function Main(){
    const controler = Controller();//para manipular cada seccion
    //necesidad de una variable bandera para cambiar esta variable con cada seccion
    let seccion = 'init';
    
    controler.init.addEventListener('click',(e) =>{ //si se toca en la seccion tengo que ir para la seccion de inicio
        console.log("Funciona");
        switch(seccion){
            case 'contact': controler.contact.classList.remove('actual');
                            e.target.classList.add('actual');
                            while(controler.content.firstChild){
                                controler.content.removeChild(controler.content.firstChild);
                            }
                            Init();
                            break;
            case 'menu': controler.menu.classList.remove('actual');
                         e.target.classList.add('actual');
                         while(controler.content.firstChild){
                            controler.content.removeChild(controler.content.firstChild);
                         }
                         Init();
                         break;
            default:     break;
        } 
        seccion = 'init';
    })

    controler.contact.addEventListener('click',(e) =>{
        switch(seccion){
            case 'init': controler.init.classList.remove('actual');
                         e.target.classList.add('actual');
                         while(controler.content.firstChild){
                            controler.content.removeChild(controler.content.firstChild);
                         }
                         Contact();
                         break;
            case 'menu': controler.menu.classList.remove('actual');
                         e.target.classList.add('actual')
                         while(controler.content.firstChild){
                            controler.content.removeChild(controler.content.firstChild);
                         }
                         Contact();
                         break;
            default:     break;
        }
        seccion = 'contact';
    })

    controler.menu.addEventListener('click',(e) =>{
        switch(seccion){
            case 'init': controler.init.classList.remove('actual');
                         e.target.classList.add('actual');
                         while(controler.content.firstChild){
                            controler.content.removeChild(controler.content.firstChild);
                         }
                         Menu();
                         break;
            case 'contact': controler.contact.classList.remove('actual')
                            e.target.classList.add('actual');
                            while(controler.content.firstChild){
                                controler.content.removeChild(controler.content.firstChild);
                             }
                            Menu();
                            break;
            default:    break;        
        }
        seccion = 'menu';
    })
}

Init();
Main();

