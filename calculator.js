let displayValue = '';

    function appendToDisplay(value) {
      displayValue += value;
      document.getElementById('display').value = displayValue;
    }
    
    function clearDisplay() {
      displayValue = '';
      document.getElementById('display').value = '';
    }
    
    function deleteLast() {
      displayValue = displayValue.slice(0, -1);
      document.getElementById('display').value = displayValue;
    }
    
    function calculateResult() {
      try {
        const result = eval(displayValue);
        document.getElementById('display').value = result;
        displayValue = String(result);
      } catch (error) {
        document.getElementById('display').value = 'Error';
      }
    }
    function toggleSign() {
  if (displayValue !== '') {
    
    displayValue = (parseFloat(displayValue) * -1).toString();
    document.getElementById('display').value = displayValue;
  }
}