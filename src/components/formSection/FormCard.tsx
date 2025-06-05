import React from 'react';
import InputField from './InputField';
import { FormData } from './types';

interface Field {
  label: string;
  field: keyof FormData;
  type?: string;
}

interface Props {
  title: string;
  fields: Field[];
  data: FormData;
  onChange: (field: keyof FormData, value: string) => void;
  lastKeyHandler?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const FormCard: React.FC<Props> = ({ title, fields, data, onChange, lastKeyHandler }) => {
  return (
    <section className="mb-6 border rounded-lg p-6 shadow-md bg-white">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {fields.map(({ label, field, type = 'text' }, i) => (
          <InputField
            key={field}
            label={label}
            value={data[field] ?? ''}
            onChange={(val) => onChange(field, val)}
            type={type}
            onKeyDown={i === fields.length - 1 && lastKeyHandler ? lastKeyHandler : undefined}
          />
        ))}
      </div>
    </section>
  );
};

export default FormCard;
