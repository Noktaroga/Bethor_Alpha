import React, { useState } from 'react';
import { FormData } from './types';
import FormCard from './FormCard';

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
    <div className={`flex-1 p-6 overflow-y-auto space-y-6 bg-gray-50 ${disabled ? 'opacity-50 pointer-events-none' : ''}`}>
      <FormCard
        title="Información general"
        fields={[
          { label: 'Certificado N°', field: 'certificadoNo' },
          { label: 'Fecha de calibración', field: 'fecha', type: 'date' },
          { label: 'Cliente', field: 'cliente' },
          { label: 'Orden de compra', field: 'orden' },
        ]}
        data={data}
        onChange={handleChange}
      />

      <FormCard
        title="Detalles del instrumento"
        fields={[
          { label: 'Instrumento', field: 'instrumento' },
          { label: 'Fabricante', field: 'fabricante' },
          { label: 'Modelo', field: 'modelo' },
          { label: 'Exactitud', field: 'exactitud' },
          { label: 'Condiciones atmosféricas', field: 'condiciones' },
          { label: 'Ubicación', field: 'ubicacion' },
          { label: 'Observaciones', field: 'observaciones' },
        ]}
        data={data}
        onChange={handleChange}
      />

      <FormCard
        title="Datos del patrón"
        fields={[
          { label: 'Tipo de Patrón', field: 'patronTipo' },
          { label: 'Código de Patrón', field: 'patronCodigo' },
          { label: 'Clase del Patrón', field: 'patronClase' },
          { label: 'Certificado del Patrón', field: 'patronCertificado' },
          { label: 'Fecha de Certificación', field: 'fechaCertificacion', type: 'date' },
          { label: 'Fecha del Patrón', field: 'patronFecha', type: 'date' },
          { label: 'Temperatura [°C]', field: 'temperatura' },
          { label: 'Humedad relativa [%]', field: 'humedad' },
        ]}
        data={data}
        onChange={handleChange}
        lastKeyHandler={handleLastKey}
      />
    </div>
  );
};

export default FormSection;
