import React from 'react';
const FormSection = ({ data, onChange }) => {
    return (React.createElement("form", { className: "flex-1 p-4 overflow-y-auto" },
        React.createElement("input", { className: "border p-2 w-full", placeholder: "Dato de ejemplo", onChange: (e) => onChange({ ...data, field: e.target.value }) })));
};
export default FormSection;
