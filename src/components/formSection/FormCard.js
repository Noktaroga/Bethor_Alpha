import React from 'react';
import InputField from './InputField';
const FormCard = ({ title, fields, data, onChange, lastKeyHandler }) => {
    return (React.createElement("section", { className: "mb-6 border rounded-lg p-6 shadow-md bg-white" },
        React.createElement("h2", { className: "text-lg font-semibold mb-4" }, title),
        React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4" }, fields.map(({ label, field, type = 'text' }, i) => (React.createElement(InputField, { key: field, label: label, value: data[field] ?? '', onChange: (val) => onChange(field, val), type: type, onKeyDown: i === fields.length - 1 && lastKeyHandler ? lastKeyHandler : undefined }))))));
};
export default FormCard;
