import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image, } from '@react-pdf/renderer';
// @ts-ignore
import logoFPC from './assets/image.png';
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
const CertificadoPDF = ({ data, chartImage }) => (React.createElement(Document, null,
    React.createElement(Page, { size: "A4", style: styles.page },
        React.createElement(View, { style: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 } },
            React.createElement(Image, { src: logoFPC, style: { width: 100 } }),
            React.createElement(View, { style: { textAlign: 'right', fontSize: 8, lineHeight: 1.4 } },
                React.createElement(Text, null, "FPC S.R.L. Fluid & Power Connection"),
                React.createElement(Text, null, "9 de Julio 1277, Cipolletti, R\u00EDo Negro"),
                React.createElement(Text, null, "Tel. 299 691-1335"),
                React.createElement(Text, null, "www.fpcsrl.com.ar"))),
        React.createElement(View, { style: {
                backgroundColor: '#0071BC', // azul estilo PDF original
                paddingVertical: 6,
                paddingHorizontal: 10,
                marginBottom: 12
            } },
            React.createElement(Text, { style: {
                    color: 'white',
                    fontSize: 14,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    fontFamily: 'Helvetica'
                } }, "CERTIFICADO DE CALIBRACI\u00D3N")),
        React.createElement(View, { style: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 } },
            React.createElement(View, { style: { width: '50%' } },
                React.createElement(Text, null,
                    React.createElement(Text, { style: styles.label }, "Certificado n\u00B0:"),
                    " ",
                    data.certificadoNo),
                React.createElement(Text, null,
                    React.createElement(Text, { style: styles.label }, "Fecha de calibraci\u00F3n:"),
                    " ",
                    data.fecha),
                React.createElement(Text, null,
                    React.createElement(Text, { style: styles.label }, "Fecha de emisi\u00F3n:"),
                    " ",
                    data.fechaEmision)),
            React.createElement(View, { style: { width: '50%' } },
                React.createElement(Text, null,
                    React.createElement(Text, { style: styles.label }, "Cliente:"),
                    " ",
                    data.cliente),
                React.createElement(Text, null,
                    React.createElement(Text, { style: styles.label }, "Orden de compra n\u00B0:"),
                    " ",
                    data.orden))),
        React.createElement(View, { style: { marginBottom: 0 } },
            React.createElement(Text, { style: { fontWeight: 'bold', textAlign: 'center' } }, "Datos del instrumento calibrado:")),
        React.createElement(View, null,
            React.createElement(View, { style: { borderBottomWidth: 1, borderBottomColor: '#000', marginBottom: 1 } }),
            React.createElement(View, { style: { borderBottomWidth: 1, borderBottomColor: '#000' } })),
        React.createElement(View, { style: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 } },
            React.createElement(View, { style: { width: '50%' } },
                React.createElement(Text, null,
                    React.createElement(Text, { style: styles.label }, "Instrumento:"),
                    " ",
                    data.instrumento),
                React.createElement(Text, null,
                    React.createElement(Text, { style: styles.label }, "Fabricante:"),
                    " ",
                    data.fabricante),
                React.createElement(Text, null,
                    React.createElement(Text, { style: styles.label }, "Modelo / ID:"),
                    " ",
                    data.modelo),
                React.createElement(Text, null,
                    React.createElement(Text, { style: styles.label }, "N\u00B0 Serie / Lote:"),
                    " ",
                    data.serie)),
            React.createElement(View, { style: { width: '50%' } },
                React.createElement(Text, null,
                    React.createElement(Text, { style: styles.label }, "Rango:"),
                    " ",
                    data.rangoMin,
                    " - ",
                    data.rangoMax,
                    " bar"),
                React.createElement(Text, null,
                    React.createElement(Text, { style: styles.label }, "Exactitud:"),
                    " ",
                    data.exactitud),
                React.createElement(Text, null,
                    React.createElement(Text, { style: styles.label }, "Tolerancia:"),
                    " \u00B1 ",
                    data.tolerancia,
                    " bar"),
                React.createElement(Text, null,
                    React.createElement(Text, { style: styles.label }, "Estado:"),
                    " ",
                    data.estado))),
        React.createElement(View, { style: { marginBottom: 0 } },
            React.createElement(Text, { style: { fontWeight: 'bold', textAlign: 'center' } }, "Resultados de medici\u00F3n:")),
        React.createElement(View, null,
            React.createElement(View, { style: { borderBottomWidth: 1, borderBottomColor: '#000', marginBottom: 1 } }),
            React.createElement(View, { style: { borderBottomWidth: 1, borderBottomColor: '#000' } })),
        React.createElement(View, { style: styles.table },
            React.createElement(View, { style: styles.tableRow },
                React.createElement(Text, { style: [styles.tableColHeader] }, "Referencia"),
                React.createElement(Text, { style: [styles.tableColHeader] }, "Dispositivo"),
                React.createElement(Text, { style: [styles.tableColHeader] }, "Diferencia"),
                React.createElement(Text, { style: [styles.tableColHeader] }, "Tolerancia"),
                React.createElement(Text, { style: [styles.tableColHeader, styles.lastCol] }, "Condici\u00F3n")),
            data.resultados.map((r, i) => (React.createElement(View, { key: i, style: styles.tableRow },
                React.createElement(Text, { style: styles.tableCol }, r.referencia),
                React.createElement(Text, { style: styles.tableCol }, r.dispositivo),
                React.createElement(Text, { style: styles.tableCol }, r.diferencia.toFixed(2)),
                React.createElement(Text, { style: styles.tableCol }, data.tolerancia),
                React.createElement(Text, { style: [styles.tableCol, styles.lastCol] }, r.condicion))))),
        chartImage && (React.createElement(View, { style: { marginTop: 20 } },
            React.createElement(Text, { style: { textAlign: 'center', fontWeight: 'bold', marginBottom: 6 } }, "Resultados de medici\u00F3n (Gr\u00E1fico)"),
            React.createElement(Image, { src: chartImage, style: { width: 400, height: 250, alignSelf: 'center' } }))))));
export default CertificadoPDF;
