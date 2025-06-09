// src/components/formSection/FormSection.tsx

import React from 'react';
import { FormData } from './types';
import FormCard from './FormCard';
import ResultadosTable from './ResultadosTable';
import { Resultado } from './types';

interface Props {
  data: FormData;
  onChange: (data: FormData) => void;
}

const FormSection: React.FC<Props> = ({ data, onChange }) => {
  const handleChange = (field: keyof FormData, value: string) => {
    onChange({ ...data, [field]: value });
  };

  const handleNumberChange = (field: keyof FormData, value: string) => {
    const num = parseFloat(value);
    if (!isNaN(num)) {
      onChange({ ...data, [field]: num });
    }
  };

  const handleDivisionesChange = (value: number) => {
    onChange({ ...data, divisiones: value });
  };

  return (
    <div className="flex-1 p-6 overflow-y-auto space-y-6 bg-gray-50">
      {/* Información general */}
      <FormCard
        title="INFORMACIÓN GENERAL"
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

      {/* Datos del instrumento calibrado */}
      <FormCard
        title="DATOS DEL INSTRUMENTO CALIBRADO"
        cols={2}
        fields={[
          { label: 'Rango mínimo', field: 'rangoMin' },
          { label: 'Rango máximo', field: 'rangoMax' },
          { label: 'Instrumento', field: 'instrumento' },
          { label: 'Exactitud', field: 'exactitud' },
          { label: 'Fabricante', field: 'fabricante' },
          { label: 'Tolerancia', field: 'tolerancia' },
          { label: 'Modelo / ID', field: 'modelo' },
          { label: 'Estado', field: 'estado' },
          { label: 'N° Serie / Lote', field: 'serie' },
        ]}
        data={data}
        onChange={handleChange}
      />
      
      {/* Resultados de medición */}
      <ResultadosTable
        rangoMinimo={parseFloat(String(data.rangoMin))}
        rangoMaximo={parseFloat(String(data.rangoMax))}
        tolerancia={parseFloat(String(data.tolerancia))}
        divisiones={data.divisiones || 4}
        resultados={data.resultados}
        onChange={(res: Resultado[]) => onChange({ ...data, resultados: res })}
        onDivisionesChange={handleDivisionesChange}
      />

      {/* Datos del patrón */}
      <FormCard
        title="DATOS DEL PATRÓN"
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
      />
    </div>
  );
};

export default FormSection;
