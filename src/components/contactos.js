import { v4 as uuidv4 } from 'uuid';
import { ComponentsHtml } from './componente_ui';



/**
 * Clase constructora de los objetos contacto
 * 
 */
class Contactos {
    constructor(id, nombre, telefono, email, urlImg = '../assets/img-default.jpg') {
        this.id = id;
        this.nombre = nombre;
        this.telefono = telefono;
        this.email = email;
        this.urlImg = urlImg;

    }

    addListaContactos() {
        listaContactos.push({
            id: this.id,
            nombre: this.nombre,
            telefono: this.telefono,
            email: this.email,
            urlImg: this.urlImg
        });
        this.sendStorage()
    }

    modifyContacto(contactoId) {
        //Elimina el contacto y vuelve a pasarlo con la nueva informacion.
        this.removeContact(contactoId);
        this.addListaContactos();
        this.sendStorage()
    }

    removeContact(idContacto) {
        //Elimina contacto filtrando todos menos el que pasamos por parametro.
        listaContactos = listaContactos.filter(element => element.id != idContacto);
        this.sendStorage()
    }

    searchContacto(idContacto) {
        //Busca un contacto pot ID y lo devuelve
        return listaContactos.find(item => item.id == idContacto);
    }


    //WebStorage
    sendStorage() {
        localStorage.setItem('ListContactsStorage', JSON.stringify(listaContactos));
    }

    receiveStorage() {
        try {
            listaContactos = JSON.parse(localStorage.getItem('ListContactsStorage') || []);
        } catch{
            console.log('El storage aún no existe')
        }

    }

}
//Array global para almacenar los contactos
let listaContactos = [];

//Descarga del storage
const storage = new Contactos();
storage.receiveStorage();

//Pintado del listado cuando inicia la aplicación.
listaContactos.forEach(contacto => {
    let printStorage = new ComponentsHtml();
    printStorage.componentContacto(contacto);
})











export { Contactos }


