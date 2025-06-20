import React, { useEffect, useState } from 'react';
import { pdf } from '@react-pdf/renderer';
import CertificadoPDF from './CertificadoPDF';
import GraphCanvas from './graph/GraphCanvas';
const PDFPreview = ({ data }) => {
    const [blobUrl, setBlobUrl] = useState(null);
    const [chartImage, setChartImage] = useState(null);
    useEffect(() => {
        if (!chartImage)
            return;
        const generatePdf = async () => {
            const instance = React.createElement(CertificadoPDF, { data: data, chartImage: chartImage });
            const blob = await pdf(instance).toBlob();
            const url = URL.createObjectURL(blob);
            setBlobUrl(url);
        };
        generatePdf();
        return () => {
            if (blobUrl)
                URL.revokeObjectURL(blobUrl);
        };
    }, [data, chartImage]);
    return (React.createElement("aside", { className: "w-1/3 border-l p-4 overflow-y-auto bg-gray-50" },
        React.createElement(GraphCanvas, { resultados: data.resultados, tolerancia: data.tolerancia, onImageReady: (base64) => setChartImage(base64) }),
        React.createElement("p", { className: "text-gray-700 font-semibold mb-2" }, "Vista previa del PDF:"),
        blobUrl ? (React.createElement("iframe", { src: blobUrl, className: "w-full h-[90%] border rounded" })) : (React.createElement("p", null, "Generando vista previa..."))));
};
export default PDFPreview;
