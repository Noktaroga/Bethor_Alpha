import React from 'react';
import FormCard from './FormCard';
import ResultadosTable from './ResultadosTable';
const FormSection = ({ data, onChange }) => {
    const handleChange = (field, value) => {
        onChange({ ...data, [field]: value });
    };
    const handleNumberChange = (field, value) => {
        const num = parseInt(value);
        if (!isNaN(num)) {
            onChange({ ...data, [field]: num });
        }
    };
    return (React.createElement("div", { className: `flex-1 p-6 overflow-y-auto space-y-6 bg-gray-50 ` },
        React.createElement(FormCard, { title: "Informaci\u00F3n general", cols: 2, fields: [
                { label: 'Certificado N°', field: 'certificadoNo' },
                { label: 'Fecha de emisión', field: 'fechaEmision', type: 'date' },
                { label: 'Fecha de calibración', field: 'fecha', type: 'date' },
                { label: 'Cliente', field: 'cliente' },
                { label: 'Orden de compra', field: 'orden' },
            ], data: data, onChange: handleChange }),
        React.createElement(FormCard, { title: "Datos del instrumento calibrado", cols: 3, fields: [
                { label: 'Instrumento', field: 'instrumento' },
                { label: 'Fabricante', field: 'fabricante' },
                { label: 'Modelo / ID', field: 'modelo' },
                { label: 'Exactitud', field: 'exactitud' },
                { label: 'Tolerancia', field: 'tolerancia' },
                { label: 'Rango mínimo', field: 'rangoMin' },
                { label: 'Rango máximo', field: 'rangoMax' },
                { label: 'N° Serie / Lote', field: 'serie' },
                { label: 'Estado', field: 'estado' },
                { label: 'Divisiones del rango', field: 'divisiones' },
            ], data: data, onChange: handleChange }),
        React.createElement(FormCard, { title: "Datos del patr\u00F3n", cols: 3, fields: [
                { label: 'Tipo de Patrón', field: 'patronTipo' },
                { label: 'Código de Patrón', field: 'patronCodigo' },
                { label: 'Clase del Patrón', field: 'patronClase' },
                { label: 'Certificado del Patrón', field: 'patronCertificado' },
                { label: 'Fecha de Certificación', field: 'fechaCertificacion', type: 'date' },
                { label: 'Fecha del Patrón', field: 'patronFecha', type: 'date' },
                { label: 'Temperatura [°C]', field: 'temperatura' },
                { label: 'Humedad relativa [%]', field: 'humedad' },
            ], data: data, onChange: handleChange }),
        React.createElement(ResultadosTable, { rangoMinimo: parseFloat(String(data.rangoMin)), rangoMaximo: parseFloat(String(data.rangoMax)), tolerancia: parseFloat(String(data.tolerancia)), divisiones: data.divisiones, resultados: data.resultados, onChange: (res) => onChange({ ...data, resultados: res }) })));
};
export default FormSection;
