import { focusInfo, contactInFocus } from './eventos'


/**
 * Clase constructora de los componentus UI.
 */
class ComponentsHtml {

    componentContacto(contacto) {
        //Creacion de componente contacto
        let li = document.createElement("li");
        let div1 = document.createElement("div");
        let div2 = document.createElement("div");
        let p = document.createElement("p");

        li.id = contacto.id
        li.className = `contact-${contacto.nombre.charAt(0).toUpperCase()}`;
        div1.className = 'contact';
        div2.className = 'contact-img';
        div2.style.backgroundImage = `url(${contacto.urlImg}), url(../assets/img-default.jpg)`;
        p.innerText = contacto.nombre;

        li.appendChild(div1);
        div1.appendChild(div2);
        div1.appendChild(p);
        //Obtencion de id de la ubicacion con primera letra del nombre.
        let index = document.getElementById(`agendaContacts${contacto.nombre.charAt(0).toUpperCase()}`);
        index.append(li);
        //listeners para elementos creados dinamicos desde storage.
        focusInfo();

    }
    componentInfoContacto(contacto) {
        //Try por si falla la obtencion de datos.
        try {
            let img = document.getElementById("infoImg");
            img.style.backgroundImage = `url(${contacto.urlImg}), url(../assets/img-default.jpg)`
            document.getElementById("infoName").innerText = contacto.nombre;
            document.getElementById("infoTel").innerText = contacto.telefono;
            document.getElementById("infoEmail").innerText = contacto.email;
            document.getElementById("button-edit").style.display = 'block';
            document.getElementById("button-delete").style.display = 'block';
        } catch{
            console.log('Fallo en carga de datos')
        }
    }

    showFormulario() {
        document.getElementById("newContact").style.display = 'flex';
    }

    closeFormulario() {
        //Reset de formulario y cierre del mismo.
        document.getElementById("newContactName").value = '';
        document.getElementById("newContactTel").value = '';
        document.getElementById("newContactEmail").value = '';
        document.getElementById("newImg").value = '';
        document.getElementById("newContactImg").style.backgroundImage = 'url(../assets/img-default.jpg)';
        document.getElementById("newContact").style.display = 'none';
        document.getElementById("buttonInput").style.display = 'block';
        document.getElementById("buttonEdit").style.display = 'none';
    }

    showAgenda() {
        document.getElementById("agendaIndexA").focus({ preventScroll: false });
        document.getElementById("newContact").style.display = 'none';
        document.getElementById("agendaBox").style.display = 'flex';
    }

    closeAgenda() {
        document.getElementById("agendaBox").style.display = 'none';
    }

    searchInFocus() {
        document.getElementById("searchInput").focus();
    }

    agendaInFocus() {
        document.getElementById("agendaIndexA").focus();
    }

    deleteItem(idContacto) {
        //Borrado del nodo contacto
        let contact = document.getElementById(idContacto);
        contact.parentNode.removeChild(contact)

        this.resetInfo()

    }

    resetInfo() {
        let img = document.getElementById("infoImg");
        img.style.backgroundImage = 'url(../assets/img-default.jpg)';
        document.getElementById("infoName").innerText = '';
        document.getElementById("infoTel").innerText = '';
        document.getElementById("infoEmail").innerText = '';
        document.getElementById("button-edit").style.display = 'none';
        document.getElementById("button-delete").style.display = 'none';
    }

    editItem(contacto) {
        //Activo button Edit.
        document.getElementById("buttonInput").style.display = 'none';
        document.getElementById("buttonEdit").style.display = 'block';

        this.resetInfo();

        //Insertar datos en component Editar.
        document.getElementById("newContactImg").style.backgroundImage = `url(${contacto.urlImg}), url(../assets/img-default.jpg)`;
        document.getElementById("newContactName").value = contacto.nombre;
        document.getElementById("newContactTel").value = contacto.telefono;
        document.getElementById("newContactEmail").value = contacto.email;
        document.getElementById("newImg").value = contacto.urlImg;

    }
}




export { ComponentsHtml }