// src/components/graph/GraphCanvas.tsx
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
const GraphCanvas = ({ resultados, tolerancia, onImageReady }) => {
    const canvasRef = useRef(null);
    useEffect(() => {
        if (!canvasRef.current)
            return;
        const ctx = canvasRef.current.getContext('2d');
        if (!ctx)
            return;
        // Obtener referencias únicas y ordenadas
        const referencias = [...new Set(resultados.map(r => r.referencia))].sort((a, b) => a - b);
        const chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: referencias,
                datasets: [
                    {
                        label: 'Error de Medición en Subida (bar)',
                        data: referencias.map(ref => {
                            const punto = resultados.find(r => r.referencia === ref);
                            return punto?.diferencia ?? null;
                        }),
                        borderColor: 'blue',
                        borderWidth: 2,
                        fill: false,
                    },
                    {
                        label: 'Error de Medición en Bajada (bar)',
                        data: referencias.map(ref => {
                            const punto = resultados.find(r => r.referencia === ref);
                            return punto ? -punto.diferencia : null;
                        }),
                        borderColor: 'red',
                        borderWidth: 2,
                        fill: false,
                    },
                    {
                        label: `Tolerancia Superior (+${tolerancia} bar)`,
                        data: referencias.map(() => tolerancia),
                        borderColor: 'orange',
                        borderDash: [5, 5],
                        fill: false,
                    },
                    {
                        label: `Tolerancia Inferior (-${tolerancia} bar)`,
                        data: referencias.map(() => -tolerancia),
                        borderColor: 'green',
                        borderDash: [5, 5],
                        fill: false,
                    },
                ],
            },
            options: {
                responsive: false,
                animation: false,
                plugins: {
                    legend: { position: 'top' },
                    title: {
                        display: true,
                        text: 'Error de Medición',
                    },
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Punto de Referencia (bar)',
                        },
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Error (bar)',
                        },
                    },
                },
            },
        });
        // Esperar el render para exportar la imagen
        const timeout = setTimeout(() => {
            const base64 = canvasRef.current?.toDataURL('image/png');
            if (base64)
                onImageReady(base64);
        }, 300);
        return () => {
            clearTimeout(timeout);
            chart.destroy();
        };
    }, [resultados, tolerancia]);
    return React.createElement("canvas", { ref: canvasRef, width: 600, height: 300, style: { display: 'none' } });
};
export default GraphCanvas;
