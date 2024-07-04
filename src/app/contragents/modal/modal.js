import {Modal} from 'flowbite';
import {getTableData} from "../table/table";
import {contragent} from "../../app";

export function editRow(id, trElement) {
    const name = trElement.querySelector("[id='name']");
    const inn = trElement.querySelector("[id='inn']");
    const kpp = trElement.querySelector("[id='kpp']");
    const address = trElement.querySelector("[id='address']");

    openModal();

    setValue("input-name", name.innerHTML);
    setValue("input-inn", inn.innerHTML);
    setValue("input-kpp", kpp.innerHTML);
    setValue("input-address", address.innerHTML);

    setValue("input-id", id);
}

function saveModal() {
    const id = getValue("input-id");

    if (id) {
       const index =
           contragent.findIndex(e => e.id === id);

        contragent[index].name = getValue("input-name");
        contragent[index].inn = getValue("input-inn");
        contragent[index].kpp = getValue("input-kpp");
        contragent[index].address = getValue("input-address");
    } else {

        const uniqueId = contragent.length === 0 ? 1 : contragent[contragent.length - 1].id;

        contragent.push({
            id: uniqueId + 1,
            name: getValue("input-name"),
            inn: getValue("input-inn"),
            kpp: getValue("input-kpp"),
            address: getValue("input-address")
        })
    }

    setValue("input-name", "");
    setValue("input-inn", "");
    setValue("input-kpp", "");
    setValue("input-address", "");

    setValue("input-id", "");

    closeModal();

    getTableData();
}

function getValue(id) {
    const element = document.getElementById(id);

    return element.value ? element.value : "";
}

function setValue(id, value) {
    const element = document.getElementById(id);

    element.value = value;
}


function openModal() {
    const modal = new Modal(document.getElementById("authentication-modal"));
    modal.show();
}

function closeModal() {
    const modal = new Modal(document.getElementById("authentication-modal"));
    modal.hide();
}

export function initModalFunction(contraagents) {
    const buttonSubmit = document.getElementById("modal-submit-button");

    buttonSubmit.onclick = () => saveModal(contraagents);

    const addButton = document.getElementById("add-button");

    addButton.onclick = () => openModal();

    const closeModalButton = document.getElementById("modal-close-button")

    closeModalButton.onclick = () => closeModal();
}
