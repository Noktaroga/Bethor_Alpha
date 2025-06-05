import React, { useState, useEffect } from 'react';
import FormSection from './components/formSection';
import PDFPreview from './components/PDFPreview';
import MenuBar from './components/MenuBar';
const App = () => {
    console.log('✅ App.tsx está en ejecución');
    const [data, setData] = useState({
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
    const [lastSaved, setLastSaved] = useState(null);
    useEffect(() => {
        const interval = setInterval(() => {
            setLastSaved(new Date());
        }, 5000);
        return () => clearInterval(interval);
    }, []);
    return (React.createElement("div", { className: "h-screen flex flex-col bg-gray-100 text-gray-800" },
        React.createElement(MenuBar, { lastSaved: lastSaved }),
        React.createElement("div", { className: "flex flex-1 overflow-hidden" },
            React.createElement(FormSection, { data: data, onChange: setData }),
            React.createElement(PDFPreview, { data: data }))));
};
export default App;
