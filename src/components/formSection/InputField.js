import React from 'react';
const InputField = ({ label, value, onChange, type = 'text', onKeyDown }) => {
    return (React.createElement("label", { className: "block text-sm font-medium text-gray-600 space-y-1" },
        React.createElement("span", null, label),
        React.createElement("input", { type: type, value: value, onChange: (e) => onChange(e.target.value), onKeyDown: onKeyDown, className: "block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm font-medium bg-white" })));
};
export default InputField;
