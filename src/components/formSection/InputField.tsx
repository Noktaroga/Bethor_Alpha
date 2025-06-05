import React from 'react';

interface Props {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<Props> = ({ label, value, onChange, type = 'text', onKeyDown }) => {
  return (
    <label className="block text-sm font-medium text-gray-600 space-y-1">
      <span>{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={onKeyDown}
        className="block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm font-medium bg-white"
      />
    </label>
  );
};

export default InputField;
