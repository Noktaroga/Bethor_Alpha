// src/components/formSection/FormSection.tsx
import React from 'react';
import FormCard from './FormCard';
import ResultadosTable from './ResultadosTable';
const FormSection = ({ data, onChange }) => {
    const handleChange = (field, value) => {
        onChange({ ...data, [field]: value });
    };
    const handleNumberChange = (field, value) => {
        const num = parseFloat(value);
        if (!isNaN(num)) {
            onChange({ ...data, [field]: num });
        }
    };
    const handleDivisionesChange = (value) => {
        onChange({ ...data, divisiones: value });
    };
    return (React.createElement("div", { className: "flex-1 p-6 overflow-y-auto space-y-6 bg-gray-50" },
        React.createElement(FormCard, { title: "INFORMACI\u00D3N GENERAL", cols: 2, fields: [
                { label: 'Certificado N°', field: 'certificadoNo' },
                { label: 'Fecha de emisión', field: 'fechaEmision', type: 'date' },
                { label: 'Fecha de calibración', field: 'fecha', type: 'date' },
                { label: 'Cliente', field: 'cliente' },
                { label: 'Orden de compra', field: 'orden' },
            ], data: data, onChange: handleChange }),
        React.createElement(FormCard, { title: "DATOS DEL INSTRUMENTO CALIBRADO", cols: 2, fields: [
                { label: 'Rango mínimo', field: 'rangoMin' },
                { label: 'Rango máximo', field: 'rangoMax' },
                { label: 'Instrumento', field: 'instrumento' },
                { label: 'Exactitud', field: 'exactitud' },
                { label: 'Fabricante', field: 'fabricante' },
                { label: 'Tolerancia', field: 'tolerancia' },
                { label: 'Modelo / ID', field: 'modelo' },
                { label: 'Estado', field: 'estado' },
                { label: 'N° Serie / Lote', field: 'serie' },
            ], data: data, onChange: handleChange }),
        React.createElement(ResultadosTable, { rangoMinimo: parseFloat(String(data.rangoMin)), rangoMaximo: parseFloat(String(data.rangoMax)), tolerancia: parseFloat(String(data.tolerancia)), divisiones: data.divisiones || 4, resultados: data.resultados, onChange: (res) => onChange({ ...data, resultados: res }), onDivisionesChange: handleDivisionesChange }),
        React.createElement(FormCard, { title: "DATOS DEL PATR\u00D3N", cols: 3, fields: [
                { label: 'Tipo de Patrón', field: 'patronTipo' },
                { label: 'Código de Patrón', field: 'patronCodigo' },
                { label: 'Clase del Patrón', field: 'patronClase' },
                { label: 'Certificado del Patrón', field: 'patronCertificado' },
                { label: 'Fecha de Certificación', field: 'fechaCertificacion', type: 'date' },
                { label: 'Fecha del Patrón', field: 'patronFecha', type: 'date' },
                { label: 'Temperatura [°C]', field: 'temperatura' },
                { label: 'Humedad relativa [%]', field: 'humedad' },
            ], data: data, onChange: handleChange })));
};
export default FormSection;
