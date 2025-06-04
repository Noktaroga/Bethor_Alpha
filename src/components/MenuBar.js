import React from 'react';
import { ipcRenderer } from 'electron';
const MenuBar = ({ lastSaved }) => {
    const send = (action) => ipcRenderer.send('window-control', action);
    return (React.createElement("header", { className: "w-full flex items-center justify-between bg-gray-800 text-white p-2" },
        React.createElement("div", null,
            React.createElement("button", { onClick: () => send('minimize') }, "_"),
            React.createElement("button", { onClick: () => send('maximize') }, "[]"),
            React.createElement("button", { onClick: () => send('close') }, "X")),
        React.createElement("span", { className: "text-sm mr-2" },
            "\u00DAltimo guardado: ",
            lastSaved ? lastSaved.toLocaleTimeString() : 'Nunca')));
};
export default MenuBar;
