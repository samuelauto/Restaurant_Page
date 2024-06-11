function Contact(){
    const content = document.querySelector('#content');
    const div = document.createElement("div");
    const title = document.createElement('h1');

    title.textContent = "Acerca de Nosotros";
    div.appendChild(title);

    for(let i=0;i<3;i++){
        const section = document.createElement('div')
        const titleSection = document.createElement('h3');
        const name = document.createElement('p');
        const phone = document.createElement("p");
        const email = document.createElement('p');

        section.appendChild(titleSection);
        section.appendChild(name);
        section.appendChild(phone);
        section.appendChild(email);

        switch(i){
            case 0: titleSection.textContent = "Manager";
                    name.textContent = "Samuel Medina Mesa";
                    phone.textContent = "65783678";
                    email.textContent = "samumedina@nauta.com";
                    break;
            case 1: titleSection.textContent = "Chef";
                    name.textContent = "Ana Maria Mesa";
                    phone.textContent = "78985423";
                    email.textContent = "anitacrazy@nauta.com";
                    break;
            case 2: titleSection.textContent = "Recursos Humanos";
                    name.textContent = "Alfredo Medina";
                    phone.textContent = "89762356";
                    email.textContent = "alfredo@nauta.com";
                    break;
            default:break;                    
        }
        div.appendChild(section);
    }
    content.appendChild(div);
}
export {Contact}