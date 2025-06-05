import React, { useState } from 'react';
const FormSection = ({ data, onChange }) => {
    const [disabled, setDisabled] = useState(false);
    const handleChange = (field, value) => {
        onChange({ ...data, [field]: value });
    };
    const handleLastKey = (e) => {
        if (e.key === 'Tab' && !e.shiftKey) {
            setDisabled(true);
        }
    };
    const fields = [
        { label: 'Certificado N°', field: 'certificadoNo' },
        { label: 'Fecha de calibración', field: 'fecha', type: 'date' },
        { label: 'Cliente', field: 'cliente' },
        { label: 'Orden de compra', field: 'orden' },
        { label: 'Instrumento', field: 'instrumento' },
        { label: 'Fabricante', field: 'fabricante' },
        { label: 'Modelo', field: 'modelo' },
        { label: 'Exactitud declarada', field: 'exactitud' },
        { label: 'Condiciones atmosféricas declaradas', field: 'condiciones' },
        { label: 'Ubicación', field: 'ubicacion' },
        { label: 'Observaciones', field: 'observaciones' },
        { label: 'Patrón usado - Tipo', field: 'patronTipo' },
        { label: 'Patrón usado - Código', field: 'patronCodigo' },
        { label: 'Patrón usado - Certificado', field: 'patronCertificado' },
        { label: 'Patrón usado - Fecha', field: 'patronFecha', type: 'date' },
        { label: 'Temperatura [°C]', field: 'temperatura' },
        { label: 'Humedad relativa [%]', field: 'humedad' },
    ];
    return (React.createElement("form", { className: `flex-1 p-4 overflow-y-auto ${disabled ? 'opacity-50 pointer-events-none' : ''}` }, fields.map(({ label, field, type = 'text' }, i) => (React.createElement("label", { className: "block mb-3", key: field },
        React.createElement("span", { className: "text-sm" }, label),
        React.createElement("input", { type: type, className: "border p-2 w-full", value: data[field], onChange: (e) => handleChange(field, e.target.value), onKeyDown: i === fields.length - 1 ? handleLastKey : undefined, disabled: disabled }))))));
};
export default FormSection;
