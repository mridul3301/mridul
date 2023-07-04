import { Document, Page } from 'react-pdf';
import React, { useState } from 'react';

const PdfViewer = () => {
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div>
      <Document
        file="../public/CV.pdf" // Replace with the actual path to your PDF file
        onLoadSuccess={onDocumentLoadSuccess}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            width={800}
          />
        ))}
      </Document>
    </div>
  );
};

export default PdfViewer;
  