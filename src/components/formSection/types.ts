export interface Resultado {
  referencia: number;
  dispositivo: number;
  diferencia: number;
  condicion: 'Aprobado' | 'Rechazado';
}

export interface FormData {
  certificadoNo: string;
  fecha: string;
  fechaEmision: string;
  cliente: string;
  orden: string;
  instrumento: string;
  fabricante: string;
  modelo: string;
  exactitud: string;
  condiciones: string;
  ubicacion: string;
  observaciones: string;
  patronTipo: string;
  patronCodigo: string;
  patronClase: string;
  patronCertificado: string;
  fechaCertificacion: string;
  patronFecha: string;
  temperatura: string;
  humedad: string;
  tolerancia: number;
  serie: string;
  estado: string;
  resultados: Resultado[];
  rangoMin: number;
  rangoMax: number;
}
