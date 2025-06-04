import React from 'react';
import { ipcRenderer } from 'electron';

interface Props {
  lastSaved: Date | null;
}

const MenuBar: React.FC<Props> = ({ lastSaved }) => {
  const send = (channel: 'minimize' | 'maximize' | 'close') => {
    ipcRenderer.send(channel);
  };

  return (
    <header className="w-full flex items-center justify-between bg-gray-800 text-white p-2 select-none">
      <span className="mr-4">Archivo</span>
      <span className="text-sm flex-1">
        Último guardado: {lastSaved ? lastSaved.toLocaleTimeString() : 'Nunca'}
      </span>
      <div className="space-x-2">
        <button onClick={() => send('minimize')} className="px-2">_</button>
        <button onClick={() => send('maximize')} className="px-2">⬜</button>
        <button onClick={() => send('close')} className="px-2">X</button>
      </div>
    </header>
  );
};

export default MenuBar;
