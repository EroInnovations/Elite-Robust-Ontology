function copyToClipboard(textToCopy) {
    // Create a temporary text area element
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = textToCopy;
    document.body.appendChild(tempTextArea);
  
    // Select the text
    tempTextArea.select();
    tempTextArea.setSelectionRange(0, 99999); // For mobile devices
  
    // Copy the text to the clipboard
    document.execCommand('copy');
  
    // Remove the temporary text area
    document.body.removeChild(tempTextArea);
}

