function downloadPDF(filename) {
    // Create overlay
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    
    // Create iframe
    const iframe = document.createElement('iframe');
    iframe.src = filename;
    iframe.classList.add('embedded-pdf');

    // Append iframe to overlay
    overlay.appendChild(iframe);

    // Append overlay to body
    document.body.appendChild(overlay);

    // Add event listener to close overlay when clicked outside the PDF
    overlay.addEventListener('click', function(event) {
        if (event.target === overlay) {
            // Remove overlay and iframe
            document.body.removeChild(overlay);
        }
    });  
  }
  