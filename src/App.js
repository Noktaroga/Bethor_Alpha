import React, { useState, useEffect } from 'react';
import FormSection from './components/formSection';
import PDFPreview from './components/PDFPreview';
import MenuBar from './components/MenuBar';
const App = () => {
    console.log('✅ App.tsx está en ejecución');
    const [data, setData] = useState({
        certificadoNo: '',
        cliente: '',
        condiciones: '',
        divisiones: 4,
        estado: '',
        exactitud: '',
        fabricante: '',
        fecha: '',
        fechaCertificacion: '',
        fechaEmision: '',
        humedad: '',
        instrumento: '',
        modelo: '',
        observaciones: '',
        orden: '',
        patronCertificado: '',
        patronClase: '',
        patronCodigo: '',
        patronFecha: '',
        patronTipo: '',
        rangoMax: 1600,
        rangoMin: 0,
        resultados: [],
        serie: '',
        temperatura: '',
        tolerancia: 0,
        ubicacion: ''
    });
    const [lastSaved, setLastSaved] = useState(null);
    useEffect(() => {
        const interval = setInterval(() => {
            setLastSaved(new Date());
        }, 5000);
        return () => clearInterval(interval);
    }, []);
    return (React.createElement("div", { className: "h-screen flex flex-col bg-gray-50 text-gray-800 text-sm font-sans" },
        React.createElement(MenuBar, { lastSaved: lastSaved }),
        React.createElement("div", { className: "flex flex-1 overflow-hidden p-4 gap-4" },
            React.createElement(FormSection, { data: data, onChange: setData }),
            React.createElement(PDFPreview, { data: data }))));
};
export default App;
