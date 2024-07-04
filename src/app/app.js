import html from "./app.html";
import './app.css'
import { initFlowbite } from 'flowbite'
import { getTableData } from './contragents/table/table.js';
import { initModalFunction } from "./contragents/modal/modal";

export const contragent = [
    {id: "12345", name: "name", inn: "inn", address: "address", kpp: "kpp"},
    {id: "54321", name: "name", inn: "inn", address: "address", kpp: "kpp"}
];

const rootElement = document.getElementById('root');
rootElement.innerHTML = html;

rootElement.onload = (() => {
    initFlowbite();
})

getTableData();

initModalFunction();
