import React from 'react';
const ipcRenderer = window.require?.('electron')?.ipcRenderer;
const MenuBar = ({ lastSaved }) => {
    const send = (channel) => {
        ipcRenderer?.send(channel);
    };
    return (React.createElement("header", { className: "w-full flex items-center justify-between bg-gray-800 text-white p-2 select-none" },
        React.createElement("span", { className: "mr-4" }, "Archivo"),
        React.createElement("span", { className: "text-sm flex-1" },
            "\u00DAltimo guardado: ",
            lastSaved ? lastSaved.toLocaleTimeString() : 'Nunca'),
        React.createElement("div", { className: "space-x-2" },
            React.createElement("button", { onClick: () => send('minimize'), className: "px-2" }, "_"),
            React.createElement("button", { onClick: () => send('maximize'), className: "px-2" }, "\u2B1C"),
            React.createElement("button", { onClick: () => send('close'), className: "px-2" }, "X"))));
};
export default MenuBar;
