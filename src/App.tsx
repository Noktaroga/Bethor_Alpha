import React, { useState, useEffect } from 'react';
import FormSection from './components/formSection';
import PDFPreview from './components/PDFPreview';
import MenuBar from './components/MenuBar';
import { FormData } from './components/formSection/types';

const App: React.FC = () => {
  console.log('✅ App.tsx está en ejecución');

  const [data, setData] = useState<FormData>({
    certificadoNo: '',
    fecha: '',
    fechaEmision: '',
    cliente: '',
    orden: '',
    instrumento: '',
    fabricante: '',
    modelo: '',
    exactitud: '',
    condiciones: '',
    ubicacion: '',
    observaciones: '',
    patronTipo: '',
    patronCodigo: '',
    patronClase: '',
    patronCertificado: '',
    fechaCertificacion: '',
    patronFecha: '',
    temperatura: '',
    humedad: '',
    tolerancia: 0,
    rangoMin: 0,
    rangoMax: 1600,
    serie: '',
    estado: '',
    resultados: []
  });

  const [lastSaved, setLastSaved] = useState<Date | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setLastSaved(new Date());
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen flex flex-col bg-gray-50 text-gray-800 text-sm font-sans">
      <MenuBar lastSaved={lastSaved} />
      <div className="flex flex-1 overflow-hidden p-4 gap-4">
        <FormSection data={data} onChange={setData} />
        <PDFPreview data={data} />
      </div>
    </div>
  );
};

export default App;
