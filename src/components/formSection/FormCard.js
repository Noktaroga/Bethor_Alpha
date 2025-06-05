import React from 'react';
import InputField from './InputField';
const FormCard = ({ title, fields, data, onChange, lastKeyHandler, cols = 2 // valor por defecto
 }) => {
    const gridColsClass = cols === 1 ? 'grid-cols-1' :
        cols === 2 ? 'grid-cols-2' :
            'grid-cols-3';
    return (React.createElement("section", { className: "bg-white rounded-xl shadow-md border border-gray-200 p-6" },
        React.createElement("h2", { className: "text-md font-semibold text-gray-700 border-b pb-2 mb-4 uppercase tracking-wide" }, title),
        React.createElement("div", { className: `grid ${gridColsClass} gap-4` }, fields.map(({ label, field, type = 'text' }, i) => (React.createElement(InputField, { key: field, label: label, value: typeof data[field] === 'string' ? data[field] : '', onChange: (val) => onChange(field, val), type: type, onKeyDown: i === fields.length - 1 && lastKeyHandler ? lastKeyHandler : undefined }))))));
};
export default FormCard;
