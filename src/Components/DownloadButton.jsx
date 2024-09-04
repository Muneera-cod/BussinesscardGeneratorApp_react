
import React from 'react';
import { toPng } from 'html-to-image';
import jsPDF from 'jspdf';

const DownloadButton = ({ node }) => {
  const downloadImage = () => {
    toPng(node)
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = 'business-card.png';
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.error('Could not generate image', err);
      });
  };

  const downloadPDF = () => {
    toPng(node)
      .then((dataUrl) => {
        const pdf = new jsPDF();
        pdf.addImage(dataUrl, 'PNG', 0, 0);
        pdf.save('business-card.pdf');
      })
      .catch((err) => {
        console.error('Could not generate PDF', err);
      });
  };

  return (
    <div style={{display:'flex',gap:'2%',padding:'2% 0'}}>
      <button onClick={downloadImage}>Download as Image</button>
      <button onClick={downloadPDF}>Download as PDF</button>
    </div>
  );
};

export default DownloadButton;
