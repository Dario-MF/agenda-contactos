import { Contactos } from './contactos';
import { ComponentsHtml } from './componente_ui'
//libreria para creacion de id dinamicos.
import { v4 as uuidv4 } from 'uuid';



//variable global para obtener contacto en focus.
let contactInFocus = '';


//Evento captura de formulario.
document.getElementById("buttonInput").addEventListener("click", function () {

    const idItem = uuidv4();
    const name = document.getElementById("newContactName").value;
    const telefone = document.getElementById("newContactTel").value;
    const email = document.getElementById("newContactEmail").value;
    const url = document.getElementById("newImg").value;

    const contact = new Contactos(idItem, name, telefone, email, url);

    contact.addListaContactos();



    const contactUi = new ComponentsHtml();

    contactUi.componentContacto(contact);
    contactUi.closeFormulario();
    contactUi.showAgenda();

}, false);

//Evento cerrar formulario.
document.getElementById("buttonClose").addEventListener("click", function () {

    const eventClose = new ComponentsHtml();
    eventClose.closeFormulario();
    eventClose.showAgenda();

}, false);

//Evento abrir formulario.
document.getElementById("buttonNewContact").addEventListener("click", function () {

    const openform = new ComponentsHtml();
    openform.closeAgenda();
    openform.showFormulario();

}, false);

//Evento focus agenda.
document.getElementById("buttonAgenda").addEventListener("click", function () {

    const focusAgenda = new ComponentsHtml();
    focusAgenda.closeFormulario();
    focusAgenda.showAgenda();
    focusAgenda.agendaInFocus();

}, false);

//Evento focus en barra de busqueda.
document.getElementById("buttonSearchPointer").addEventListener("click", function () {

    const focusSearchBar = new ComponentsHtml();
    focusSearchBar.searchInFocus();

}, false);

//Evento en card del contacto para mostrar info del contacto.
const focusInfo = () => {
    let contacts = document.getElementsByClassName("contact");
    for (let contact of contacts) {

        contact.addEventListener("click", function (event) {
            const idContact = event.target.parentNode.id

            let contact = new Contactos();
            contact = contact.searchContacto(idContact);

            const component = new ComponentsHtml();
            component.componentInfoContacto(contact);

            contactInFocus = contact;
        }, false);
    }
}

//Evento borrar contacto
document.getElementById("button-delete").addEventListener("click", function () {

    const component = new ComponentsHtml();
    component.deleteItem(contactInFocus.id);

    const contact = new Contactos();
    contact.removeContact(contactInFocus.id);


}, false);

//Evento editar contacto
document.getElementById("button-edit").addEventListener("click", function () {
    console.log(contactInFocus)
    const component = new ComponentsHtml();
    component.closeAgenda();
    component.showFormulario();
    component.editItem(contactInFocus);


}, false);

//Evento boton editar contacto
document.getElementById("buttonEdit").addEventListener("click", () => {

    const idItem = contactInFocus.id;
    console.log(idItem)
    const name = document.getElementById("newContactName").value;
    const telefone = document.getElementById("newContactTel").value;
    const email = document.getElementById("newContactEmail").value;
    const url = document.getElementById("newImg").value;

    const contact = new Contactos(idItem, name, telefone, email, url);
    contact.modifyContacto(idItem);


    const contactUi = new ComponentsHtml();

    contactUi.deleteItem(idItem);
    contactUi.componentContacto(contact);
    contactUi.closeFormulario();
    contactUi.showAgenda();
}, false);





export { focusInfo, contactInFocus }