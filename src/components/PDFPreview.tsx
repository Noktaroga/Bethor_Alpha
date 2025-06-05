import React, { useEffect, useState } from 'react';
import { pdf, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

interface FormData {
  certificadoNo: string;
  fecha: string;
  cliente: string;
  orden: string;
  instrumento: string;
  fabricante: string;
  modelo: string;
  exactitud: string;
  condiciones: string;
}

interface Props {
  data: FormData;
}

// Estilos PDF
const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontSize: 12,
    fontFamily: 'Helvetica',
  },
  section: {
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
  },
});

// Documento PDF con los datos del formulario
const PDFDocument: React.FC<{ data: FormData }> = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {Object.entries(data).map(([key, value]) => (
        <View style={styles.section} key={key}>
          <Text style={styles.label}>{key}: </Text>
          <Text>{value}</Text>
        </View>
      ))}
    </Page>
  </Document>
);

const PDFPreview: React.FC<Props> = ({ data }) => {
  const [blobUrl, setBlobUrl] = useState<string | null>(null);

  useEffect(() => {
    const generatePdf = async () => {
      const instance = <PDFDocument data={data} />;
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
