import React, { useState, useEffect } from 'react';
import FormSection from './components/formSection';
import PDFPreview from './components/PDFPreview';
import MenuBar from './components/MenuBar';

export interface FormData {
    certificadoNo: string,
    fecha: string,
    cliente: string,
    orden: string,
    instrumento: string,
    fabricante: string,
    modelo: string,
    exactitud: string,
    condiciones: string,
    ubicacion: string,
    observaciones: string,
    patronTipo: string,
    patronCodigo: string,
    patronClase: string,
    fechaCertificacion: string,
    patronFecha: string,
    temperatura: string,
    humedad: string,
}

const App: React.FC = () => {
  console.log('✅ App.tsx está en ejecución');

  const [data, setData] = useState<FormData>({
    certificadoNo: '',
    fecha: '',
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
    fechaCertificacion: '',
    patronFecha: '',
    temperatura: '',
    humedad: '',
  });

  const [lastSaved, setLastSaved] = useState<Date | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setLastSaved(new Date());
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen flex flex-col bg-gray-100 text-gray-800">
      <MenuBar lastSaved={lastSaved} />
      <div className="flex flex-1 overflow-hidden">
        <FormSection data={data} onChange={setData} />
        <PDFPreview data={data} />
      </div>
    </div>
  );

};

export default App;
