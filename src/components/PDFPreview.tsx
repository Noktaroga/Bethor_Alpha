import React, { useEffect, useState } from 'react';
import { pdf } from '@react-pdf/renderer';
import CertificadoPDF from './CertificadoPDF';
import type { FormData } from './formSection/types';

interface Props {
  data: FormData;
}

const PDFPreview: React.FC<Props> = ({ data }) => {
  const [blobUrl, setBlobUrl] = useState<string | null>(null);

  useEffect(() => {
    const generatePdf = async () => {
      const instance = <CertificadoPDF data={data} />;
      const blob = await pdf(instance).toBlob();
      const url = URL.createObjectURL(blob);
      setBlobUrl(url);
    };

    generatePdf();

    return () => {
      if (blobUrl) URL.revokeObjectURL(blobUrl);
    };
  }, [data]);

  return (
    <aside className="w-1/3 border-l p-4 overflow-y-auto bg-gray-50">
      <p className="text-gray-700 font-semibold mb-2">Vista previa del PDF:</p>
      {blobUrl ? (
        <iframe src={blobUrl} className="w-full h-[90%] border rounded" />
      ) : (
        <p>Generando vista previa...</p>
      )}
    </aside>
  );
};

export default PDFPreview;
