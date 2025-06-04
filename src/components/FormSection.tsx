import React from 'react';

interface Props {
  data: any;
  onChange: (data: any) => void;
}

const FormSection: React.FC<Props> = ({ data, onChange }) => {
  return (
    <form className="flex-1 p-4 overflow-y-auto">
      {/* TODO: Implement form fields */}
      <input
        className="border p-2 w-full"
        placeholder="Dato de ejemplo"
        onChange={(e) => onChange({ ...data, field: e.target.value })}
      />
    </form>
  );
};

export default FormSection;
