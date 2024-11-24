document.getElementById('obfuscate-button').addEventListener('click', () => {
    const inputCode = document.getElementById('input-code').value.trim();
    const method = document.getElementById('obfuscation-method').value;
    let obfuscatedCode = '';
  
    if (!inputCode) {
      obfuscatedCode = '/* Please provide valid JavaScript code */';
    } else if (method === 'ascii') {
      const asciiArray = inputCode.split('').map(char => char.charCodeAt(0));
      obfuscatedCode = `<script>
        var y = "";
        var x = [${asciiArray.join(',')}];
        x.forEach(char => { y += String.fromCharCode(char); });
        document.write(y);
      </script>`;
    } else if (method === 'base64') {
      const base64Encoded = btoa(inputCode);
      obfuscatedCode = `<script>
        document.write(atob("${base64Encoded}"));
      </script>`;
    }
  
    document.getElementById('output-code').value = obfuscatedCode;
  });
  
