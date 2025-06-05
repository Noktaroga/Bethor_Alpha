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
  cols?: 1 | 2 | 3; // Número de columnas permitidas
}

const FormCard: React.FC<Props> = ({
  title,
  fields,
  data,
  onChange,
  lastKeyHandler,
  cols = 2 // valor por defecto
}) => {
  const gridColsClass =
    cols === 1 ? 'grid-cols-1' :
    cols === 2 ? 'grid-cols-2' :
    'grid-cols-3';

  return (
    <section className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
      <h2 className="text-md font-semibold text-gray-700 border-b pb-2 mb-4 uppercase tracking-wide">
        {title}
      </h2>

      <div className={`grid ${gridColsClass} gap-4`}>
        {fields.map(({ label, field, type = 'text' }, i) => (
          <InputField
            key={field}
            label={label}
            value={typeof data[field] === 'string' ? data[field] as string : ''}
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
