import React, { useState } from 'react';
import { FormData } from './types';
import FormCard from './FormCard';
import ResultadosTable from './ResultadosTable';
import { Resultado } from './types';


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
        cols={2}
        fields={[
          { label: 'Certificado N°', field: 'certificadoNo' },
          { label: 'Fecha de emisión', field: 'fechaEmision', type: 'date' },
          { label: 'Fecha de calibración', field: 'fecha', type: 'date' },
          { label: 'Cliente', field: 'cliente' },
          { label: 'Orden de compra', field: 'orden' },
        ]}
        data={data}
        onChange={handleChange}
      />

      <FormCard
        title="Datos del instrumento calibrado"
        cols={3}
        fields={[
          { label: 'Instrumento', field: 'instrumento' },
          { label: 'Fabricante', field: 'fabricante' },
          { label: 'Modelo / ID', field: 'modelo' },
          { label: 'Exactitud', field: 'exactitud' },
          { label: 'Tolerancia', field: 'tolerancia' },
          { label: 'Rango mínimo', field: 'rangoMin' },
          { label: 'Rango máximo', field: 'rangoMax' },
          { label: 'N° Serie / Lote', field: 'serie' },
          { label: 'Estado', field: 'estado' },
        ]}
        data={data}
        onChange={handleChange}
      />

      <FormCard
        title="Datos del patrón"
        cols={3}
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

      {/* Sección resultados de medición */}
      <ResultadosTable
        rangoMinimo={parseFloat(String(data.rangoMin))}
        rangoMaximo={parseFloat(String(data.rangoMax))}
        tolerancia={parseFloat(String(data.tolerancia))}
        resultados={data.resultados}
        onChange={(res: Resultado[]) => onChange({ ...data, resultados: res })}
      />

    </div>
  );
};

export default FormSection;
