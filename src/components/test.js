import React from 'react';
import { PDFDownloadLink, PDFViewer,  Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

export default class Test1 extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const style11 = {
            fontSize: "40px",
            color: "red",
            padding:"2%",
            borderBottom: "1px solid green",
        };

        const MyDoc = (
            <Document>
                <Page style={style11}>
                    <Text>asasaa</Text>
                </Page>
            </Document>
        )

        return (
            <div>
                <PDFDownloadLink document={MyDoc} fileName="somename.pdf">
                    {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
                </PDFDownloadLink>
            </div>
        )
    }
}