function saveToClipboard() {
    const text = document.getElementById("clipboard-text").value;
    navigator.clipboard.writeText(text).then(function() {
      console.log('Text copied to clipboard');
    }, function(err) {
      console.error('Failed to copy text: ', err);
    });
  }