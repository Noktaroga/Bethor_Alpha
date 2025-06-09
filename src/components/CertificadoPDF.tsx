    import React from 'react';
    import {
      Document,
      Page,
      Text,
      View,
      StyleSheet,
      Font,
      Image,
    } from '@react-pdf/renderer';

    import { Resultado } from './formSection/types';
    import { FormData } from './formSection/types';

    // @ts-ignore
    import logoFPC from './assets/image.png';

    interface Props {
      data: FormData;
      chartImage?: string;
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

    const CertificadoPDF: React.FC<Props> = ({ data, chartImage }) => (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
            <Image src={logoFPC} style={{ width: 100 }} />
            <View style={{ textAlign: 'right', fontSize: 8, lineHeight: 1.4 }}>
              <Text>FPC S.R.L. Fluid & Power Connection</Text>
              <Text>9 de Julio 1277, Cipolletti, Río Negro</Text>
              <Text>Tel. 299 691-1335</Text>
              <Text>www.fpcsrl.com.ar</Text>
            </View>
          </View>

          <View
            style={{
              backgroundColor: '#0071BC', // azul estilo PDF original
              paddingVertical: 6,
              paddingHorizontal: 10,
              marginBottom: 12
            }}
          >
            <Text
              style={{
                color: 'white',
                fontSize: 14,
                fontWeight: 'bold',
                textAlign: 'center',
                fontFamily: 'Helvetica'
              }}
            >
              CERTIFICADO DE CALIBRACIÓN
            </Text>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
            <View style={{ width: '50%' }}>
              <Text><Text style={styles.label}>Certificado n°:</Text> {data.certificadoNo}</Text>
              <Text><Text style={styles.label}>Fecha de calibración:</Text> {data.fecha}</Text>
              <Text><Text style={styles.label}>Fecha de emisión:</Text> {data.fechaEmision}</Text>
            </View>
            <View style={{ width: '50%' }}>
              <Text><Text style={styles.label}>Cliente:</Text> {data.cliente}</Text>
              <Text><Text style={styles.label}>Orden de compra n°:</Text> {data.orden}</Text>
            </View>
          </View>

          {/* Título centrado */}
          <View style={{ marginBottom: 0 }}>
            <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>
              Datos del instrumento calibrado:
            </Text>
          </View>

          {/* Doble línea horizontal */}
          <View>
            <View style={{ borderBottomWidth: 1, borderBottomColor: '#000', marginBottom: 1 }} />
            <View style={{ borderBottomWidth: 1, borderBottomColor: '#000' }} />
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 }}>
            {/* Columna izquierda */}
            <View style={{ width: '50%' }}>
              <Text><Text style={styles.label}>Instrumento:</Text> {data.instrumento}</Text>
              <Text><Text style={styles.label}>Fabricante:</Text> {data.fabricante}</Text>
              <Text><Text style={styles.label}>Modelo / ID:</Text> {data.modelo}</Text>
              <Text><Text style={styles.label}>N° Serie / Lote:</Text> {data.serie}</Text>
            </View>

            {/* Columna derecha */}
            <View style={{ width: '50%' }}>
              <Text><Text style={styles.label}>Rango:</Text> {data.rangoMin} - {data.rangoMax} bar</Text>
              <Text><Text style={styles.label}>Exactitud:</Text> {data.exactitud}</Text>
              <Text><Text style={styles.label}>Tolerancia:</Text> ± {data.tolerancia} bar</Text>
              <Text><Text style={styles.label}>Estado:</Text> {data.estado}</Text>
            </View>
          </View>

          {/* Título centrado */}
          <View style={{ marginBottom: 0 }}>
            <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>
              Resultados de medición:
            </Text>
          </View>

          {/* Doble línea horizontal */}
          <View>
            <View style={{ borderBottomWidth: 1, borderBottomColor: '#000', marginBottom: 1 }} />
            <View style={{ borderBottomWidth: 1, borderBottomColor: '#000' }} />
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

          {chartImage && (
          <View style={{ marginTop: 20 }}>
            <Text style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: 6 }}>
              Resultados de medición (Gráfico)
            </Text>
            <Image src={chartImage} style={{ width: 400, height: 250, alignSelf: 'center' }} />
          </View>
          )}

        </Page>
      </Document>
    );

    export default CertificadoPDF;
