import React, { useState } from 'react';

import { Document, Page, pdfjs } from 'react-pdf';
import { HStack, Link, Text, VStack } from '@chakra-ui/react';

import pdf from "../assets/CV_Steven_Faria_Gusmão.pdf";
import save from "../assets/Save.svg";
import arrowLeft from "../assets/arrowLeft.svg";
import arrowRight from "../assets/arrowRight.svg";

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

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
        <VStack w="100%" gap="0.1rem">
            <HStack w="100%" h="100%" borderBottom="1px solid #000" borderTop="1px solid #000" p="2px 5px" gap="0.1" justifyContent="space-between">
                <Link visibility="hidden" download href={pdf} cursor="pointer" p="0px 5px">Download</Link>
                <HStack>
                    <Text display="flex" alignItems="center" cursor="pointer" p="0px 5px" onClick={() => setPageNumber(1)}><img src={arrowLeft} alt='Back Arrow' width="25px"/> Back</Text>
                    <Text display="flex" alignItems="center" cursor="pointer" p="0px 5px" onClick={() => setPageNumber(2)}>Next <img src={arrowRight} alt='Back Arrow' width="25px"/></Text>
                </HStack>
                <Link download href={pdf} display="flex" alignItems="center" cursor="pointer" p="0px 5px"><img src={save} alt='Save CV' width="25px"/> Download</Link>
            </HStack>
            <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
                <Page width={windowWidth <= 500 && "360"} pageNumber={pageNumber} />
            </Document>
            <HStack w="100%" borderTop="1px solid #000">
                <Text p="0px 10px" borderRight="1px solid #000">
                    Page {pageNumber} of {numPages}
                </Text>
            </HStack>
        </VStack>
    );
};

export default Curriculum;
