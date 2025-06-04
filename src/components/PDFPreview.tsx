import React from 'react';

interface Props {
  data: any;
}

const PDFPreview: React.FC<Props> = ({ data }) => {
  return (
    <aside className="w-1/3 border-l p-4 overflow-y-auto">
      {/* TODO: Render PDF preview */}
      <p className="text-gray-500">Vista previa PDF</p>
    </aside>
  );
};

export default PDFPreview;
