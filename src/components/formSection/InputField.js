import React from 'react';
const InputField = ({ label, value, onChange, type = 'text', onKeyDown }) => {
    return (React.createElement("label", { className: "block" },
        React.createElement("span", { className: "text-sm text-gray-700" }, label),
        React.createElement("input", { type: type, value: value, onChange: (e) => onChange(e.target.value), onKeyDown: onKeyDown, className: "mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm" })));
};
export default InputField;
