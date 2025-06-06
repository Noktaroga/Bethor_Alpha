import React from 'react';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font
} from '@react-pdf/renderer';
import { Resultado } from './formSection/types';
import { FormData } from './formSection/types';

interface Props {
  data: FormData;
}

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 10,
    fontFamily: 'Helvetica',
  },
  header: {
    textAlign: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
    textDecoration: 'underline',
  },
  section: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontWeight: 'bold',
  },
  table: {
    width: 'auto',
    marginTop: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#000',
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableColHeader: {
    width: '20%',
    backgroundColor: '#eee',
    borderRightWidth: 1,
    borderColor: '#000',
    padding: 4,
    fontWeight: 'bold',
  },
  tableCol: {
    width: '20%',
    borderRightWidth: 1,
    borderColor: '#000',
    padding: 4,
  },
  lastCol: {
    borderRightWidth: 0,
  },
});

const CertificadoPDF: React.FC<Props> = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.title}>CERTIFICADO DE CALIBRACIÓN</Text>
        <Text>N° {data.certificadoNo}</Text>
      </View>

      <View style={styles.section}>
        <Text><Text style={styles.label}>Cliente:</Text> {data.cliente}</Text>
        <Text><Text style={styles.label}>Fecha:</Text> {data.fecha}</Text>
      </View>

      <View style={styles.section}>
        <Text><Text style={styles.label}>Instrumento:</Text> {data.instrumento}</Text>
        <Text><Text style={styles.label}>Fabricante:</Text> {data.fabricante}</Text>
      </View>

      <View style={styles.section}>
        <Text><Text style={styles.label}>Modelo/ID:</Text> {data.modelo}</Text>
        <Text><Text style={styles.label}>N° Serie:</Text> {data.serie}</Text>
      </View>

      <View style={styles.section}>
        <Text><Text style={styles.label}>Rango:</Text> {data.rangoMin} - {data.rangoMax}</Text>
        <Text><Text style={styles.label}>Tolerancia:</Text> ±{data.tolerancia}</Text>
      </View>

      <View style={styles.table}>
        <View style={styles.tableRow}>
          <Text style={[styles.tableColHeader]}>Referencia</Text>
          <Text style={[styles.tableColHeader]}>Dispositivo</Text>
          <Text style={[styles.tableColHeader]}>Diferencia</Text>
          <Text style={[styles.tableColHeader]}>Tolerancia</Text>
          <Text style={[styles.tableColHeader, styles.lastCol]}>Condición</Text>
        </View>
        {data.resultados.map((r, i) => (
          <View key={i} style={styles.tableRow}>
            <Text style={styles.tableCol}>{r.referencia}</Text>
            <Text style={styles.tableCol}>{r.dispositivo}</Text>
            <Text style={styles.tableCol}>{r.diferencia.toFixed(2)}</Text>
            <Text style={styles.tableCol}>{data.tolerancia}</Text>
            <Text style={[styles.tableCol, styles.lastCol]}>{r.condicion}</Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

export default CertificadoPDF;
