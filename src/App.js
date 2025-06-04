import React, { useState, useEffect } from 'react';
import FormSection from './components/FormSection';
import PDFPreview from './components/PDFPreview';
import MenuBar from './components/MenuBar';
const App = () => {
    const [data, setData] = useState({});
    const [lastSaved, setLastSaved] = useState(null);
    useEffect(() => {
        const interval = setInterval(() => {
            setLastSaved(new Date());
        }, 5000);
        return () => clearInterval(interval);
    }, []);
    return (React.createElement("div", { className: "flex h-full" },
        React.createElement(MenuBar, { lastSaved: lastSaved }),
        React.createElement(FormSection, { data: data, onChange: setData }),
        React.createElement(PDFPreview, { data: data })));
};
export default App;
