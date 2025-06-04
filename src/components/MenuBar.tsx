import React from 'react';
import { ipcRenderer } from 'electron';

interface Props {
  lastSaved: Date | null;
}

const MenuBar: React.FC<Props> = ({ lastSaved }) => {
  const send = (action: string) => ipcRenderer.send('window-control', action);

  return (
    <header className="w-full flex items-center justify-between bg-gray-800 text-white p-2">
      <div>
        <button onClick={() => send('minimize')}>_</button>
        <button onClick={() => send('maximize')}>[]</button>
        <button onClick={() => send('close')}>X</button>
      </div>
      <span className="text-sm mr-2">
        Último guardado: {lastSaved ? lastSaved.toLocaleTimeString() : 'Nunca'}
      </span>
    </header>
  );
};

export default MenuBar;
