import React, { useEffect, useState } from 'react';
const ResultadosTable = ({ rangoMinimo, rangoMaximo, tolerancia, resultados, onChange }) => {
    const [referencias, setReferencias] = useState([]);
    useEffect(() => {
        if (!rangoMinimo || !rangoMaximo)
            return;
        const partes = 4;
        const pasos = (rangoMaximo - rangoMinimo) / partes;
        const refs = [];
        for (let i = 0; i <= partes; i++) {
            refs.push(rangoMinimo + i * pasos);
        }
        setReferencias(refs);
    }, [rangoMinimo, rangoMaximo]);
    const handleDispositivoChange = (index, value) => {
        const ref = referencias[index];
        const disp = parseFloat(value);
        const diff = disp - ref;
        const condicion = Math.abs(diff) <= tolerancia ? 'Aprobado' : 'Rechazado';
        const updated = [...(resultados || [])];
        updated[index] = {
            referencia: ref,
            dispositivo: isNaN(disp) ? 0 : disp,
            diferencia: isNaN(diff) ? 0 : diff,
            condicion,
        };
        onChange(updated);
    };
    return (React.createElement("section", { className: "bg-white rounded-xl shadow-md border border-gray-200 p-6 mt-4" },
        React.createElement("h2", { className: "text-md font-semibold text-gray-700 border-b pb-2 mb-4 uppercase tracking-wide" }, "Resultados de medici\u00F3n"),
        React.createElement("table", { className: "w-full text-sm text-left border border-gray-300" },
            React.createElement("thead", { className: "bg-gray-100 text-gray-700" },
                React.createElement("tr", null,
                    React.createElement("th", { className: "p-2 border" }, "Referencia"),
                    React.createElement("th", { className: "p-2 border" }, "Dispositivo"),
                    React.createElement("th", { className: "p-2 border" }, "Diferencia"),
                    React.createElement("th", { className: "p-2 border" }, "Tolerancia"),
                    React.createElement("th", { className: "p-2 border" }, "Condici\u00F3n"))),
            React.createElement("tbody", null, referencias.map((ref, index) => {
                const res = resultados?.[index] || { dispositivo: '', diferencia: '', condicion: '' };
                return (React.createElement("tr", { key: index },
                    React.createElement("td", { className: "p-2 border text-center" }, ref),
                    React.createElement("td", { className: "p-2 border text-center" },
                        React.createElement("input", { type: "number", className: "w-full px-2 py-1 border rounded text-sm", value: res.dispositivo ?? '', onChange: (e) => handleDispositivoChange(index, e.target.value) })),
                    React.createElement("td", { className: "p-2 border text-center" }, res.diferencia?.toFixed(2) ?? ''),
                    React.createElement("td", { className: "p-2 border text-center" }, tolerancia),
                    React.createElement("td", { className: `p-2 border text-center font-semibold ${res.condicion === 'Aprobado' ? 'text-green-600' : 'text-red-600'}` }, res.condicion || '')));
            })))));
};
export default ResultadosTable;
