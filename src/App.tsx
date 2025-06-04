import React, { useState, useEffect } from 'react';
import FormSection from './components/FormSection';
import PDFPreview from './components/PDFPreview';
import MenuBar from './components/MenuBar';

interface FormData {
  certificadoNo: string;
  fecha: string;
  cliente: string;
  orden: string;
  instrumento: string;
  fabricante: string;
}

const App: React.FC = () => {
  const [data, setData] = useState<FormData>({
    certificadoNo: '',
    fecha: '',
    cliente: '',
    orden: '',
    instrumento: '',
    fabricante: '',
  });
  const [lastSaved, setLastSaved] = useState<Date | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setLastSaved(new Date());
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full flex flex-col">
      <MenuBar lastSaved={lastSaved} />
      <div className="flex flex-1">
        <FormSection data={data} onChange={setData} />
        <PDFPreview data={data} />
      </div>
    </div>
  );
};

export default App;
