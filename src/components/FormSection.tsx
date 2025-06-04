import React, { useState } from 'react';

interface FormData {
  certificadoNo: string;
  fecha: string;
  cliente: string;
  orden: string;
  instrumento: string;
  fabricante: string;
}

interface Props {
  data: FormData;
  onChange: (data: FormData) => void;
}

const FormSection: React.FC<Props> = ({ data, onChange }) => {
  const [disabled, setDisabled] = useState(false);

  const handleChange = (field: keyof FormData, value: string) => {
    onChange({ ...data, [field]: value });
  };

  const handleLastKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Tab' && !e.shiftKey) {
      setDisabled(true);
    }
  };

  return (
    <form
      className={`flex-1 p-4 overflow-y-auto ${disabled ? 'opacity-50 pointer-events-none' : ''}`}
    >
      <label className="block mb-3">
        <span className="text-sm">Certificado N°</span>
        <input
          type="text"
          className="border p-2 w-full"
          value={data.certificadoNo}
          onChange={(e) => handleChange('certificadoNo', e.target.value)}
          disabled={disabled}
        />
      </label>

      <label className="block mb-3">
        <span className="text-sm">Fecha de calibración</span>
        <input
          type="date"
          className="border p-2 w-full"
          value={data.fecha}
          onChange={(e) => handleChange('fecha', e.target.value)}
          disabled={disabled}
        />
      </label>

      <label className="block mb-3">
        <span className="text-sm">Cliente</span>
        <input
          type="text"
          className="border p-2 w-full"
          value={data.cliente}
          onChange={(e) => handleChange('cliente', e.target.value)}
          disabled={disabled}
        />
      </label>

      <label className="block mb-3">
        <span className="text-sm">Orden de compra</span>
        <input
          type="text"
          className="border p-2 w-full"
          value={data.orden}
          onChange={(e) => handleChange('orden', e.target.value)}
          disabled={disabled}
        />
      </label>

      <label className="block mb-3">
        <span className="text-sm">Instrumento</span>
        <input
          type="text"
          className="border p-2 w-full"
          value={data.instrumento}
          onChange={(e) => handleChange('instrumento', e.target.value)}
          disabled={disabled}
        />
      </label>

      <label className="block mb-3">
        <span className="text-sm">Fabricante</span>
        <input
          type="text"
          className="border p-2 w-full"
          value={data.fabricante}
          onChange={(e) => handleChange('fabricante', e.target.value)}
          onKeyDown={handleLastKey}
          disabled={disabled}
        />
      </label>
    </form>
  );
};

export default FormSection;
