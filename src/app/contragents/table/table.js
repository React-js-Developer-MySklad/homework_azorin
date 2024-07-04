import {editRow} from "../modal/modal";
import {contragent} from "../../app";

export function getTableData() {
    const table = document.getElementById("table");

    table.innerHTML = '';

    for (let data of contragent) {
        const trElement = document.createElement("tr");
        trElement.classList.add("bg-white");
        trElement.classList.add("border-b");
        trElement.classList.add("dark:bg-gray-800");
        trElement.classList.add("dark:border-gray-700");

        const thElement = document.createElement("th");
        thElement.scope = "row";
        thElement.classList.add("px-6");
        thElement.classList.add("py-4");
        thElement.classList.add("font-medium");
        thElement.classList.add("text-gray-900");
        thElement.classList.add("whitespace-nowrap");
        thElement.classList.add("dark:text-white");
        thElement.innerHTML = data.id;

        trElement.appendChild(thElement)
        trElement.appendChild(createTdElement(data.name, "name", data.id, trElement));
        trElement.appendChild(createTdElement(data.inn, "inn", data.id, trElement));
        trElement.appendChild(createTdElement(data.address, "address", data.id, trElement));
        trElement.appendChild(createTdElement(data.kpp, "kpp", data.id, trElement));
        trElement.appendChild(createButtonElement(data.id));

        table.appendChild(trElement);
    }
}

function createTdElement(value, id, dataId, trElement) {
    const tdElement = document.createElement("th");
    tdElement.scope = "row";
    tdElement.id = id;
    tdElement.classList.add("px-6");
    tdElement.classList.add("py-4");
    tdElement.innerHTML = value;
    tdElement.onclick = () => editRow(dataId, trElement)
    return tdElement;
}

function createButtonElement(id) {
    const button = document.createElement("button");
    button.type = "submit";
    button.classList.add("w-full");
    button.classList.add("text-white");
    button.classList.add("bg-blue-700");
    button.classList.add("hover:bg-blue-800");
    button.classList.add("focus:ring-4");
    button.classList.add("focus:outline-none");
    button.classList.add("font-medium");
    button.classList.add("rounded-lg");
    button.classList.add("text-sm");
    button.classList.add("px-5");
    button.classList.add("py-2.5");
    button.classList.add("text-center");
    button.classList.add("dark:bg-blue-600");
    button.classList.add("dark:hover:bg-blue-700");
    button.classList.add("dark:focus:ring-blue-800");
    button.innerHTML = "Удалить";
    button.onclick = () => {
        for (let i = contragent.length - 1; i >= 0; --i) {
            console.log(id);
            if (contragent[i].id === id) {
                contragent.splice(i, 1);
            }
        }

        getTableData();
    };

    return button;
}
