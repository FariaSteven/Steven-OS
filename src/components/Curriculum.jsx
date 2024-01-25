import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

import pdf from "../assets/CV_Steven_Faria_Gusmão.pdf";

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { HStack, Link, Text, VStack } from '@chakra-ui/react';

const Curriculum = () => {
    const [numPages, setNumPages] = useState();
    const [pageNumber, setPageNumber] = useState(1);

    const windowWidth = window.innerWidth;

    pdfjs.GlobalWorkerOptions.workerSrc = new URL(
        'pdfjs-dist/build/pdf.worker.min.js',
        import.meta.url,
    ).toString();

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    return (
        <VStack p="5px">
            <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
                <Page width={windowWidth <= 425 && "360"} pageNumber={pageNumber} />
            </Document>
            <HStack w="100%" justifyContent="space-between">
                <Text>
                    Page {pageNumber} of {numPages}
                </Text>
                <HStack>
                    <Text cursor="pointer" border="1px solid #000" p="2px 5px" onClick={() => setPageNumber(1)}>Back</Text>
                    <Text cursor="pointer" border="1px solid #000" p="2px 5px" onClick={() => setPageNumber(2)}>Next</Text>
                    <Link download href={pdf} cursor="pointer" border="1px solid #000" p="2px 5px">Download</Link>
                </HStack>
            </HStack>
        </VStack>
    );
};

export default Curriculum;
