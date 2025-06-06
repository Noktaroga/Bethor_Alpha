import React, { useEffect, useState } from 'react';

interface Resultado {
  referencia: number;
  dispositivo: number;
  diferencia: number;
  condicion: 'Aprobado' | 'Rechazado';
}

interface Props {
  rangoMinimo: number;
  rangoMaximo: number;
  tolerancia: number;
  divisiones: number;
  resultados: Resultado[];
  onChange: (res: Resultado[]) => void;
}

const ResultadosTable: React.FC<Props> = ({
  rangoMinimo,
  rangoMaximo,
  tolerancia,
  resultados,
  onChange
}) => {
  const [referencias, setReferencias] = useState<number[]>([]);
  const [divisiones, setDivisiones] = useState<number>(4);

  useEffect(() => {
    const min = Number(rangoMinimo);
    const max = Number(rangoMaximo);

    if (
      isNaN(min) || isNaN(max) ||
      max <= min || isNaN(divisiones) || divisiones <= 0
    ) {
      setReferencias([]);
      return;
    }

    const paso = (max - min) / divisiones;
    const ida: number[] = [];

    for (let i = 0; i <= divisiones; i++) {
      ida.push(Number((min + i * paso).toFixed(2)));
    }

    const vuelta = [...ida].reverse();

    setReferencias([...ida, ...vuelta]);
  }, [rangoMinimo, rangoMaximo, divisiones]);

  const handleDispositivoChange = (index: number, value: string) => {
    const ref = referencias[index];
    const disp = parseFloat(value);
    const diff = disp - ref;
    const condicion = Math.abs(diff) <= tolerancia ? 'Aprobado' : 'Rechazado';

    const updated: Resultado[] = [...(resultados || [])];
    updated[index] = {
      referencia: ref,
      dispositivo: isNaN(disp) ? 0 : disp,
      diferencia: isNaN(diff) ? 0 : diff,
      condicion
    };

    onChange(updated);
  };

  return (
    <section className="bg-white rounded-xl shadow-md border border-gray-200 p-6 mt-4">
      <h2 className="text-md font-semibold text-gray-700 border-b pb-2 mb-4 uppercase tracking-wide">
        Resultados de medición
      </h2>

      <div className="mb-4">
        <label className="font-medium text-gray-700 mr-2">Dividir rango en:</label>
        <input
          type="number"
          min={1}
          className="w-20 px-2 py-1 border rounded"
          value={divisiones}
          onChange={(e) => setDivisiones(parseInt(e.target.value))}
        />
        <span className="ml-2 text-gray-500">partes</span>
      </div>

      <table className="w-full text-sm text-left border border-gray-300">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="p-2 border">Referencia</th>
            <th className="p-2 border">Dispositivo</th>
            <th className="p-2 border">Diferencia</th>
            <th className="p-2 border">Tolerancia</th>
            <th className="p-2 border">Condición</th>
          </tr>
        </thead>
        <tbody>
          {referencias.map((ref, index) => {
            const res = resultados?.[index] || {
              referencia: ref,
              dispositivo: 0,
              diferencia: 0,
              condicion: 'Rechazado'
            };
            return (
              <tr key={index}>
                <td className="p-2 border text-center">{ref}</td>
                <td className="p-2 border text-center">
                  <input
                    type="number"
                    className="w-full px-2 py-1 border rounded text-sm"
                    value={res.dispositivo.toString()}
                    onChange={(e) => handleDispositivoChange(index, e.target.value)}
                  />
                </td>
                <td className="p-2 border text-center">{res.diferencia.toFixed(2)}</td>
                <td className="p-2 border text-center">{tolerancia}</td>
                <td
                  className={`p-2 border text-center font-semibold ${
                    res.condicion === 'Aprobado' ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {res.condicion}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default ResultadosTable;
