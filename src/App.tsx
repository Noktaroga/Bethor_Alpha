import React, { useState, useEffect } from 'react';
import FormSection from './components/FormSection';
import PDFPreview from './components/PDFPreview';
import MenuBar from './components/MenuBar';

const App: React.FC = () => {
  const [data, setData] = useState({});
  const [lastSaved, setLastSaved] = useState<Date | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setLastSaved(new Date());
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-full">
      <MenuBar lastSaved={lastSaved} />
      <FormSection data={data} onChange={setData} />
      <PDFPreview data={data} />
    </div>
  );
};

export default App;
