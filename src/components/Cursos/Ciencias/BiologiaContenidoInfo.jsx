import React from 'react';
import { useState } from 'react';
import { Document, Page } from 'react-pdf';



export default function ModalContentInfo({ onClose }) {
    const [numPages, setNumPages] = useState();
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({numPages}) {
    setNumPages(numPages);
    }

return (
    <div className="modal-1">
        <div>
    <Document file="/src/pdf/Recurso de Biología copia.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
    </Document>
    <p>
        Page {pageNumber} of {numPages}
    </p>
    </div>



        <button onClick={onClose}  type="button" className="btn-close" aria-label="Close"></button>
</div>
    );
}