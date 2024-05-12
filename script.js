function downloadPDF(filename) {
    // Assuming the PDF files are in the same directory as the HTML file
    const link = document.createElement('a');
    link.href = filename;
    link.download = filename.substr(filename.lastIndexOf('/') + 1);
    link.click();
  }
  